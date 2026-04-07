import React, { useState, useCallback, useEffect, useRef } from 'react';
import TopBar from './components/TopBar.jsx';
import LeftPanel from './components/LeftPanel.jsx';
import RightPanel from './components/RightPanel.jsx';
import BottomPanel from './components/BottomPanel.jsx';
import MapCanvas from './components/MapCanvas.jsx';
import PlayerControls from './components/PlayerControls.jsx';
import WarConclusion from './components/WarConclusion.jsx';
import { createSimulationState, simulateTick, applyPlayerAction } from './engine/SimulationEngine.js';

const TICK_INTERVALS = { 1: 1000, 5: 200, 20: 50 };

export default function App() {
  const [state, setState] = useState(createSimulationState);
  const [running, setRunning] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [bottomTab, setBottomTab] = useState('predictions'); // 'predictions' | 'command'
  const [iranHasNuke, setIranHasNuke] = useState(false);
  const intervalRef = useRef(null);

  const tick = useCallback(() => {
    setState(prev => {
      if (prev.warConclusion) return prev;
      return simulateTick(prev);
    });
  }, []);

  useEffect(() => {
    if (running && !state.warConclusion) {
      intervalRef.current = setInterval(tick, TICK_INTERVALS[speed] || 1000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [running, speed, tick, state.warConclusion]);

  // Stop simulation when war concludes
  useEffect(() => {
    if (state.warConclusion && running) {
      setRunning(false);
    }
  }, [state.warConclusion, running]);

  const handleToggleRunning = useCallback(() => {
    setRunning(prev => !prev);
  }, []);

  const handleReset = useCallback(() => {
    setRunning(false);
    setState(createSimulationState());
    setBottomTab('predictions');
  }, []);

  const handleSpeedChange = useCallback((s) => {
    setSpeed(s);
  }, []);

  const handleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  }, []);

  const handleSelectActor = useCallback((actorId) => {
    setState(prev => ({ ...prev, playerControlledActor: actorId }));
    if (actorId) setBottomTab('command');
  }, []);

  const handlePlayerAction = useCallback((actionId, target) => {
    setState(prev => applyPlayerAction(prev, actionId, target));
  }, []);

  return (
    <div className="app-shell">
      <TopBar
        dayCount={state.dayCount}
        warDay={state.warDay}
        speed={speed}
        running={running}
        nuclearIndex={state.nuclearIndex}
        onSpeedChange={handleSpeedChange}
        onToggleRunning={handleToggleRunning}
        onReset={handleReset}
        onFullscreen={handleFullscreen}
      />

      <div className="main-content">
        <LeftPanel actors={state.actors} />

        <div className="center-panel">
          <MapCanvas
            mapAnimations={state.mapAnimations}
            escalationLevel={state.escalationLevel}
            nuclearIndex={state.nuclearIndex}
          />
        </div>

        <RightPanel events={state.events} />
      </div>

      {/* Tabbed Bottom Panel */}
      <div className="bottom-tabs">
        <button
          className={`bottom-tab-btn ${bottomTab === 'predictions' ? 'active' : ''}`}
          onClick={() => setBottomTab('predictions')}
        >
          PREDICTIONS
        </button>
        <button
          className={`bottom-tab-btn ${bottomTab === 'command' ? 'active' : ''}`}
          onClick={() => setBottomTab('command')}
          style={state.playerControlledActor ? { color: '#22c55e' } : {}}
        >
          COMMAND {state.playerControlledActor ? `(${state.playerControlledActor.toUpperCase()})` : ''}
        </button>
      </div>

      {bottomTab === 'predictions' ? (
        <BottomPanel
          predictions={state.predictions}
          escalationProbability={state.escalationProbability}
          warDurationRange={state.warDurationRange}
          nuclearPredictions={state.nuclearPredictions}
          oilDisruption={state.oilDisruption}
          escalationLevel={state.escalationLevel}
        />
      ) : (
        <PlayerControls
          playerControlledActor={state.playerControlledActor}
          onSelectActor={handleSelectActor}
          onPlayerAction={handlePlayerAction}
          nuclearIndex={state.nuclearIndex}
          ceasefireProposals={state.ceasefireProposals}
          escalationLevel={state.escalationLevel}
          iranHasNuke={iranHasNuke}
          onToggleIranNuke={() => setIranHasNuke(prev => !prev)}
        />
      )}

      {/* War Conclusion Overlay */}
      <WarConclusion
        conclusion={state.warConclusion}
        dayCount={state.dayCount}
        warDay={state.warDay}
        oilDisruption={state.oilDisruption}
        nuclearIndex={state.nuclearIndex}
        onReset={handleReset}
      />
    </div>
  );
}
