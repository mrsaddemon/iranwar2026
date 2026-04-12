const DEFAULT_SIMULATION_DATE = '2026-04-07';
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function getSimulationStartDate(snapshotDate = DEFAULT_SIMULATION_DATE) {
  const rawValue = typeof snapshotDate === 'string' && snapshotDate.trim() ? snapshotDate.trim() : DEFAULT_SIMULATION_DATE;
  const startDate = new Date(rawValue);
  return Number.isNaN(startDate.getTime()) ? new Date(DEFAULT_SIMULATION_DATE) : startDate;
}

export function formatSimulationDate(simDay, snapshotDate = DEFAULT_SIMULATION_DATE) {
  const date = getSimulationStartDate(snapshotDate);
  date.setDate(date.getDate() + simDay);
  return `${MONTHS[date.getMonth()]} ${date.getDate()}`;
}

export function formatSimulationTimestamp(simDay, initialWarDay, snapshotDate = DEFAULT_SIMULATION_DATE) {
  return `${formatSimulationDate(simDay, snapshotDate)} • Day ${initialWarDay + simDay}`;
}
