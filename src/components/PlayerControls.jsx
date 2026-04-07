import React, { useState } from 'react';
import { ACTION_TYPES, ACTION_LABELS, ACTION_ICONS, SPECIAL_ACTIONS, TARGET_OPTIONS } from '../engine/actors.js';

const ACTOR_NAMES = { usa: 'United States', israel: 'Israel', iran: 'Iran' };
const ACTOR_SHORT = { usa: 'USA', israel: 'Israel', iran: 'Iran' };
const ACTOR_COLORS = { usa: '#3b82f6', israel: '#a855f7', iran: '#ef4444' };

const OFFENSIVE_ACTIONS = ['airstrike', 'missileStrike', 'droneOperation', 'cyberDisruption',
  'deployMOAB', 'carrierStrike', 'fullNavalBlockade', 'hormuzMineSurge', 'activateAllProxies', 'nuclearBreakout', 'nuclearStrike'];

function isOffensive(actionId) {
  return OFFENSIVE_ACTIONS.includes(actionId);
}

function NukeConfirmModal({ onConfirm, onCancel }) {
  const [step, setStep] = useState(0);
  return (
    <div className="nuke-modal-overlay">
      <div className="nuke-modal">
        <div className="nuke-modal-icon">{'\u2622'}</div>
        {step === 0 ? (
          <>
            <div className="nuke-modal-title">NUCLEAR STRIKE</div>
            <div className="nuke-modal-text">
              This action will launch nuclear weapons. Millions will die.
              Global fallout. Civilization altered permanently.
              <br /><br />This cannot be undone.
            </div>
            <div className="nuke-modal-buttons">
              <button className="nuke-cancel-btn" onClick={onCancel}>ABORT</button>
              <button className="nuke-confirm-btn" onClick={() => setStep(1)}>I UNDERSTAND</button>
            </div>
          </>
        ) : (
          <>
            <div className="nuke-modal-title" style={{ color: '#dc2626' }}>FINAL CONFIRMATION</div>
            <div className="nuke-modal-text">Are you absolutely certain? There is no going back.</div>
            <div className="nuke-modal-buttons">
              <button className="nuke-cancel-btn" onClick={onCancel}>ABORT LAUNCH</button>
              <button className="nuke-launch-btn" onClick={onConfirm}>LAUNCH</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function TargetPicker({ actorId, actionId, onSelect, onCancel }) {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const opponents = ['usa', 'israel', 'iran'].filter(id => id !== actorId);

  return (
    <div className="target-picker-overlay" onClick={onCancel}>
      <div className="target-picker" onClick={e => e.stopPropagation()}>
        <div className="tp-header">SELECT TARGET</div>
        <div className="tp-action-label">{ACTION_LABELS[actionId] || actionId}</div>

        {!selectedCountry ? (
          <>
            <div className="tp-section-label">TARGET COUNTRY</div>
            <div className="tp-countries">
              {opponents.map(id => (
                <button
                  key={id}
                  className="tp-country-btn"
                  style={{ borderColor: ACTOR_COLORS[id], color: ACTOR_COLORS[id] }}
                  onClick={() => setSelectedCountry(id)}
                >
                  <span className="tp-country-name">{ACTOR_SHORT[id]}</span>
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="tp-section-label">
              TARGET: <span style={{ color: ACTOR_COLORS[selectedCountry] }}>{ACTOR_SHORT[selectedCountry]}</span>
              <button className="tp-back-btn" onClick={() => setSelectedCountry(null)}>Back</button>
            </div>
            <div className="tp-subtargets">
              {(TARGET_OPTIONS[selectedCountry] || []).map(sub => (
                <button
                  key={sub.id}
                  className="tp-subtarget-btn"
                  onClick={() => onSelect({ countryId: selectedCountry, subTargetId: sub.id })}
                >
                  <span className="tp-sub-icon">{sub.icon}</span>
                  <span className="tp-sub-label">{sub.label}</span>
                  <span className="tp-sub-dmg">-{sub.damage} {sub.metricHit}</span>
                </button>
              ))}
            </div>
          </>
        )}

        <button className="tp-cancel-btn" onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}

export default function PlayerControls({
  playerControlledActor, onSelectActor, onPlayerAction,
  nuclearIndex, ceasefireProposals, escalationLevel,
  iranHasNuke, onToggleIranNuke,
}) {
  const [showNukeConfirm, setShowNukeConfirm] = useState(false);
  const [targetPicker, setTargetPicker] = useState(null); // { actionId } or null
  const [hoveredAction, setHoveredAction] = useState(null);

  const actorId = playerControlledActor;
  const actorColor = actorId ? ACTOR_COLORS[actorId] : '#64748b';
  const specialActions = actorId ? [...(SPECIAL_ACTIONS[actorId] || []), ...SPECIAL_ACTIONS.shared] : [];
  const opponentProposed = ceasefireProposals && Object.keys(ceasefireProposals).some(k => k !== actorId);

  const handleAction = (actionId) => {
    if (actionId === 'nuclearStrike') {
      setShowNukeConfirm(true);
      return;
    }
    if (isOffensive(actionId)) {
      setTargetPicker({ actionId });
      return;
    }
    // Non-offensive: fire directly
    onPlayerAction(actionId, null);
  };

  const handleTargetSelected = (target) => {
    const actionId = targetPicker.actionId;
    setTargetPicker(null);
    onPlayerAction(actionId, target);
  };

  const handleNukeConfirm = () => {
    setShowNukeConfirm(false);
    // Nuclear strike still needs a target
    setTargetPicker({ actionId: 'nuclearStrike' });
  };

  return (
    <div className="player-controls">
      {showNukeConfirm && (
        <NukeConfirmModal
          onConfirm={handleNukeConfirm}
          onCancel={() => setShowNukeConfirm(false)}
        />
      )}

      {targetPicker && (
        <TargetPicker
          actorId={actorId}
          actionId={targetPicker.actionId}
          onSelect={handleTargetSelected}
          onCancel={() => setTargetPicker(null)}
        />
      )}

      <div className="pc-header">
        <span className="pc-header-icon">{'\u{1F3AE}'}</span>
        COMMAND CENTER
      </div>

      <div className="pc-actor-selector">
        <span className="pc-label">PLAY AS:</span>
        {['usa', 'israel', 'iran'].map(id => (
          <button
            key={id}
            className={`pc-actor-btn ${actorId === id ? 'active' : ''}`}
            style={{
              borderColor: actorId === id ? ACTOR_COLORS[id] : 'transparent',
              color: actorId === id ? ACTOR_COLORS[id] : '#64748b',
              background: actorId === id ? `${ACTOR_COLORS[id]}15` : 'transparent',
            }}
            onClick={() => onSelectActor(actorId === id ? null : id)}
          >
            {ACTOR_SHORT[id]}
          </button>
        ))}
        {actorId && (
          <button className="pc-auto-btn" onClick={() => onSelectActor(null)}>AUTO</button>
        )}
      </div>

      {/* Iran Nuclear Breakout Toggle — scenario modifier */}
      <div className="pc-scenario-toggle">
        <label className="pc-toggle-label">
          <input
            type="checkbox"
            checked={!!iranHasNuke}
            onChange={() => onToggleIranNuke?.()}
          />
          <span className="pc-toggle-text" style={{ color: iranHasNuke ? '#ef4444' : '#64748b' }}>
            {'\u2622'} Iran Nuclear Breakout
          </span>
          <span className="pc-toggle-hint">
            {iranHasNuke ? 'Iran has a crude nuclear device (~15kt)' : 'Iran has no nuclear weapons'}
          </span>
        </label>
      </div>

      {!actorId && (
        <div className="pc-inactive">
          Select a country to issue commands. All actors run on autopilot.
        </div>
      )}

      {actorId && (
        <>
          <div className="pc-section-label">STANDARD OPERATIONS</div>
          <div className="pc-actions-grid">
            {ACTION_TYPES.map(action => (
              <button
                key={action}
                className="pc-action-btn"
                onClick={() => handleAction(action)}
                onMouseEnter={() => setHoveredAction(action)}
                onMouseLeave={() => setHoveredAction(null)}
                style={{ borderLeftColor: actorColor }}
              >
                <span className="pc-action-icon">{ACTION_ICONS[action]}</span>
                <span className="pc-action-label">{ACTION_LABELS[action]}</span>
              </button>
            ))}
          </div>

          <div className="pc-section-label">SPECIAL OPERATIONS</div>
          <div className="pc-actions-grid">
            {specialActions.map(sa => {
              const isNuke = sa.id === 'nuclearStrike';
              // Iran needs iranHasNuke AND nuclearIndex > 80; USA/Israel just need nuclearIndex > 80
              const nukeLocked = isNuke && (
                (actorId === 'iran' && !iranHasNuke) ||
                nuclearIndex < (sa.requiresNuclearIndex || 80)
              );
              const isCeasefireAccept = sa.id === 'acceptCeasefire';
              const disabled = nukeLocked || (isCeasefireAccept && !opponentProposed);

              return (
                <button
                  key={sa.id}
                  className={`pc-action-btn pc-special ${isNuke ? 'pc-nuke' : ''} ${disabled ? 'pc-disabled' : ''}`}
                  onClick={() => !disabled && handleAction(sa.id)}
                  onMouseEnter={() => setHoveredAction(sa.id)}
                  onMouseLeave={() => setHoveredAction(null)}
                  disabled={disabled}
                  title={disabled ? (nukeLocked ? `Requires Nuclear Index > ${sa.requiresNuclearIndex || 80}` : 'Opponent must propose ceasefire first') : sa.desc}
                >
                  <span className="pc-action-icon">{sa.icon}</span>
                  <span className="pc-action-label">{sa.label}</span>
                </button>
              );
            })}
          </div>

          {hoveredAction && (
            <div className="pc-tooltip">
              {(() => {
                const sa = specialActions.find(s => s.id === hoveredAction);
                if (sa) return sa.desc;
                if (isOffensive(hoveredAction)) return `${ACTION_LABELS[hoveredAction]} — select a target country and location`;
                return ACTION_LABELS[hoveredAction] || '';
              })()}
            </div>
          )}
        </>
      )}
    </div>
  );
}
