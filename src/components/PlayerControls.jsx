import React, { useState } from 'react';
import { ACTION_TYPES, ACTION_LABELS, ACTION_ICONS, SPECIAL_ACTIONS, TARGET_OPTIONS } from '../engine/actors.js';
import { getAvailableNuclearWarheads } from '../engine/nuclear.js';

const ACTOR_NAMES = { usa: 'United States', israel: 'Israel', iran: 'Iran' };
const ACTOR_SHORT = { usa: 'USA', israel: 'Israel', iran: 'Iran' };
const ACTOR_COLORS = { usa: '#ef4444', israel: '#3b82f6', iran: '#22c55e' };

const OFFENSIVE_ACTIONS = ['airstrike', 'missileStrike', 'droneOperation', 'cyberDisruption',
  'deployMOAB', 'carrierStrike', 'fullNavalBlockade', 'hormuzMineSurge', 'activateAllProxies', 'nuclearBreakout', 'nuclearStrike'];

function isOffensive(actionId) {
  return OFFENSIVE_ACTIONS.includes(actionId);
}

function NukeConfirmModal({ warheads, selectedWarheadId, onSelectWarhead, onConfirm, onCancel }) {
  const [step, setStep] = useState(0);
  const selectedWarhead = warheads.find((warhead) => warhead.id === selectedWarheadId) || warheads[0] || null;

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
        ) : step === 1 ? (
          <>
            <div className="nuke-modal-title">SELECT WARHEAD</div>
            <div className="nuke-modal-text">
              Choose the nuclear package available to this actor.
            </div>
            <div style={{ display: 'grid', gap: 8, marginTop: 10 }}>
              {warheads.map((warhead) => (
                <button
                  key={warhead.id}
                  className="tp-subtarget-btn"
                  onClick={() => onSelectWarhead(warhead.id)}
                  style={{
                    borderColor: selectedWarheadId === warhead.id ? '#dc2626' : 'rgba(148, 163, 184, 0.18)',
                    background: selectedWarheadId === warhead.id ? 'rgba(220, 38, 38, 0.14)' : undefined,
                    textAlign: 'left',
                  }}
                >
                  <span className="tp-sub-label">{warhead.shortLabel}</span>
                  <span className="tp-sub-dmg">{warhead.delivery}</span>
                  <span className="tp-sub-dmg" style={{ color: '#94a3b8' }}>{warhead.summary}</span>
                </button>
              ))}
            </div>
            <div className="nuke-modal-buttons">
              <button className="nuke-cancel-btn" onClick={() => setStep(0)}>BACK</button>
              <button
                className="nuke-confirm-btn"
                onClick={() => setStep(2)}
                disabled={!selectedWarhead}
              >
                CONTINUE
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="nuke-modal-title" style={{ color: '#dc2626' }}>FINAL CONFIRMATION</div>
            <div className="nuke-modal-text">
              {selectedWarhead ? `Warhead: ${selectedWarhead.shortLabel} — ${selectedWarhead.delivery}` : 'No warhead selected.'}
              <br /><br />
              Are you absolutely certain? There is no going back.
            </div>
            <div className="nuke-modal-buttons">
              <button className="nuke-cancel-btn" onClick={() => setStep(1)}>BACK</button>
              <button className="nuke-launch-btn" onClick={onConfirm} disabled={!selectedWarhead}>LAUNCH</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function TargetPicker({ actorId, actionId, warheadLabel, onSelect, onCancel }) {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const opponents = ['usa', 'israel', 'iran'].filter(id => id !== actorId);

  return (
    <div className="target-picker-overlay" onClick={onCancel}>
      <div className="target-picker" onClick={e => e.stopPropagation()}>
        <div className="tp-header">SELECT TARGET</div>
        <div className="tp-action-label">{ACTION_LABELS[actionId] || actionId}</div>
        {warheadLabel && (
          <div className="tp-action-label" style={{ fontSize: 10, color: '#fca5a5' }}>
            WARHEAD: {warheadLabel}
          </div>
        )}

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
  const [selectedWarheadId, setSelectedWarheadId] = useState(null);

  const actorId = playerControlledActor;
  const actorColor = actorId ? ACTOR_COLORS[actorId] : '#64748b';
  const specialActions = actorId ? [...(SPECIAL_ACTIONS[actorId] || []), ...SPECIAL_ACTIONS.shared] : [];
  const opponentProposed = ceasefireProposals && Object.keys(ceasefireProposals).some(k => k !== actorId);
  const availableWarheads = actorId ? getAvailableNuclearWarheads(actorId, !!iranHasNuke) : [];
  const selectedWarhead = availableWarheads.find((warhead) => warhead.id === selectedWarheadId) || availableWarheads[0] || null;

  const handleAction = (actionId) => {
    if (actionId === 'nuclearStrike') {
      const defaultWarhead = selectedWarheadId && availableWarheads.some((warhead) => warhead.id === selectedWarheadId)
        ? selectedWarheadId
        : (availableWarheads[0]?.id || null);
      setSelectedWarheadId(defaultWarhead);
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
    const warheadId = targetPicker.warheadId;
    setTargetPicker(null);
    onPlayerAction(actionId, target, warheadId ? { warheadId } : undefined);
  };

  const handleNukeConfirm = () => {
    setShowNukeConfirm(false);
    // Nuclear strike still needs a target
    setTargetPicker({ actionId: 'nuclearStrike', warheadId: selectedWarheadId });
  };

  return (
    <div className="player-controls">
      {showNukeConfirm && (
        <NukeConfirmModal
          warheads={availableWarheads}
          selectedWarheadId={selectedWarheadId}
          onSelectWarhead={setSelectedWarheadId}
          onConfirm={handleNukeConfirm}
          onCancel={() => setShowNukeConfirm(false)}
        />
      )}

      {targetPicker && (
        <TargetPicker
          actorId={actorId}
          actionId={targetPicker.actionId}
          warheadLabel={targetPicker.warheadId ? selectedWarhead?.shortLabel : null}
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
          <span className="pc-toggle-text" style={{ color: iranHasNuke ? '#22c55e' : '#64748b' }}>
            {'\u2622'} Iran Nuclear Breakout
          </span>
          <span className="pc-toggle-hint">
            {iranHasNuke ? 'Iran has a crude nuclear device (~15kt)' : 'Iran has no nuclear weapons'}
          </span>
        </label>
      </div>

      {!actorId && (
        <div className="pc-inactive-card">
          <div className="pc-inactive-title">Select a side to open command mode</div>
          <div className="pc-inactive-text">
            Issue strikes, diplomacy, proxy actions, and special operations manually. Until you choose a side, every actor stays on autopilot.
          </div>
          <div className="pc-inactive-actions">
            {['usa', 'israel', 'iran'].map(id => (
              <button
                key={`quick-${id}`}
                className="pc-quick-actor-btn"
                style={{
                  borderColor: ACTOR_COLORS[id],
                  color: ACTOR_COLORS[id],
                  background: `${ACTOR_COLORS[id]}14`,
                }}
                onClick={() => onSelectActor(id)}
              >
                {ACTOR_NAMES[id]}
              </button>
            ))}
          </div>
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
