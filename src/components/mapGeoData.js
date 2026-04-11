import { geoBounds } from 'd3-geo';
import { feature } from 'topojson-client';
import countriesAtlas from 'world-atlas/countries-50m.json';

export const VIEWPORT_BOUNDS = {
  minLon: 16,
  maxLon: 110,
  minLat: 4,
  maxLat: 62,
};

export const DEFAULT_VIEW = { x: 0, y: 0, scale: 1 };
export const GRID_SPACING = 40;

export const TOOLTIP_STYLE = {
  position: 'absolute',
  width: 220,
  padding: '10px 12px',
  borderRadius: 10,
  border: '1px solid rgba(59, 130, 246, 0.18)',
  background: 'rgba(5, 8, 16, 0.94)',
  boxShadow: '0 16px 36px rgba(0, 0, 0, 0.38)',
  backdropFilter: 'blur(6px)',
  pointerEvents: 'none',
  zIndex: 4,
};

export const ACTOR_RGB = {
  usa: '239, 68, 68',
  israel: '59, 130, 246',
  iran: '34, 197, 94',
};

export const COUNTRY_STYLES = {
  Iran: {
    fill: 'rgba(34, 197, 94, 0.16)',
    stroke: 'rgba(34, 197, 94, 0.72)',
    labelColor: 'rgba(34, 197, 94, 0.82)',
    label: 'IRAN',
    subtitle: 'Active Theater',
    detail: 'Primary Iranian theater and the core territory driving escalation, mobilization, and retaliation decisions.',
  },
  Israel: {
    fill: 'rgba(59, 130, 246, 0.22)',
    stroke: 'rgba(59, 130, 246, 0.76)',
    labelColor: 'rgba(59, 130, 246, 0.88)',
    label: 'ISRAEL',
    subtitle: 'Active Theater',
    detail: 'Primary Israeli theater where missile defense, mobilization, and strike decisions concentrate.',
  },
  Lebanon: {
    fill: 'rgba(249, 115, 22, 0.12)',
    stroke: 'rgba(249, 115, 22, 0.6)',
    labelColor: 'rgba(249, 115, 22, 0.76)',
    label: 'LEBANON',
    subtitle: 'Active Theater',
    detail: 'Northern front shaped by Hezbollah launches, Israeli responses, and cross-border escalation risk.',
  },
  Syria: {
    fill: 'rgba(100, 100, 100, 0.06)',
    stroke: 'rgba(100, 100, 100, 0.34)',
    labelColor: 'rgba(148, 163, 184, 0.54)',
    label: 'SYRIA',
    subtitle: 'Regional State',
    detail: 'Regional state territory exposed to spillover, cross-border strikes, and logistics pressure.',
  },
  Iraq: {
    fill: 'rgba(100, 100, 100, 0.07)',
    stroke: 'rgba(100, 100, 100, 0.34)',
    labelColor: 'rgba(148, 163, 184, 0.54)',
    label: 'IRAQ',
    subtitle: 'Regional State',
    detail: 'Iraqi territory remains exposed to regional spillover, militia activity, and transit pressure.',
  },
  Jordan: {
    fill: 'rgba(100, 100, 100, 0.05)',
    stroke: 'rgba(100, 100, 100, 0.28)',
    labelColor: 'rgba(148, 163, 184, 0.5)',
    label: 'JORDAN',
    subtitle: 'Regional State',
    detail: 'Transit and buffer state pressured by nearby escalation while trying to avoid direct entry.',
  },
  Egypt: {
    fill: 'rgba(100, 100, 100, 0.04)',
    stroke: 'rgba(100, 100, 100, 0.22)',
    labelColor: 'rgba(148, 163, 184, 0.46)',
    label: 'EGYPT',
    subtitle: 'Regional State',
    detail: 'Key regional state balancing border security, Red Sea exposure, and broader stability concerns.',
  },
  'Saudi Arabia': {
    fill: 'rgba(100, 100, 100, 0.05)',
    stroke: 'rgba(249, 115, 22, 0.28)',
    labelColor: 'rgba(249, 115, 22, 0.62)',
    label: 'SAUDI ARABIA',
    subtitle: 'Regional State',
    detail: 'Major Gulf power exposed to energy shock, air defense strain, and escalation spillover.',
  },
  Yemen: {
    fill: 'rgba(239, 68, 68, 0.05)',
    stroke: 'rgba(239, 68, 68, 0.34)',
    labelColor: 'rgba(239, 68, 68, 0.6)',
    label: 'YEMEN',
    subtitle: 'Proxy Theater',
    detail: 'Proxy escalation theater affecting Red Sea shipping and regional missile and drone pressure.',
  },
  Oman: {
    fill: 'rgba(100, 100, 100, 0.04)',
    stroke: 'rgba(100, 100, 100, 0.22)',
    labelColor: 'rgba(148, 163, 184, 0.46)',
    label: 'OMAN',
    subtitle: 'Regional State',
    detail: 'Omani territory sits beside key maritime chokepoints and diplomacy channels.',
  },
  Qatar: {
    fill: 'rgba(100, 100, 100, 0.05)',
    stroke: 'rgba(239, 68, 68, 0.28)',
    labelColor: 'rgba(239, 68, 68, 0.62)',
    label: 'QATAR',
    subtitle: 'US Position Host',
    detail: 'Critical host territory for major US air operations and logistics.',
  },
  Bahrain: {
    fill: 'rgba(100, 100, 100, 0.05)',
    stroke: 'rgba(239, 68, 68, 0.28)',
    labelColor: 'rgba(239, 68, 68, 0.62)',
    label: 'BAHRAIN',
    subtitle: 'US Position Host',
    detail: 'Host of major US naval presence in the Gulf theater.',
  },
  Kuwait: {
    fill: 'rgba(100, 100, 100, 0.05)',
    stroke: 'rgba(249, 115, 22, 0.28)',
    labelColor: 'rgba(249, 115, 22, 0.62)',
    label: 'KUWAIT',
    subtitle: 'Regional State',
    detail: 'Forward Gulf state vulnerable to spillover and logistics disruption.',
  },
  'United Arab Emirates': {
    fill: 'rgba(100, 100, 100, 0.05)',
    stroke: 'rgba(249, 115, 22, 0.28)',
    labelColor: 'rgba(249, 115, 22, 0.62)',
    label: 'UAE',
    subtitle: 'Regional State',
    detail: 'Gulf hub exposed to missile risk, trade disruption, and Gulf shipping pressure.',
  },
  Turkey: {
    fill: 'rgba(100, 100, 100, 0.04)',
    stroke: 'rgba(100, 100, 100, 0.24)',
    labelColor: 'rgba(148, 163, 184, 0.46)',
    label: 'TURKEY',
    subtitle: 'Regional State',
    detail: 'Northern regional power watching spillover, refugees, and alliance pressure.',
  },
  Pakistan: {
    fill: 'rgba(56, 189, 248, 0.08)',
    stroke: 'rgba(56, 189, 248, 0.36)',
    labelColor: 'rgba(125, 211, 252, 0.72)',
    label: 'PAKISTAN',
    subtitle: 'Ceasefire Mediator',
    detail: 'Pakistan is acting as a ceasefire mediator while also weighing nuclear-risk signaling, border security, Gulf linkages, and wider regional stability.',
  },
  Afghanistan: {
    fill: 'rgba(100, 100, 100, 0.03)',
    stroke: 'rgba(100, 100, 100, 0.18)',
    labelColor: 'rgba(148, 163, 184, 0.4)',
    label: 'AFGHANISTAN',
    subtitle: 'Regional State',
    detail: 'Peripheral regional state bordering the eastern edge of the war theater.',
  },
  Bangladesh: {
    fill: 'rgba(56, 189, 248, 0.16)',
    stroke: 'rgba(56, 189, 248, 0.46)',
    labelColor: 'rgba(125, 211, 252, 0.72)',
    label: 'BANGLADESH',
    subtitle: 'Regional Stakeholder',
    detail: 'Bangladesh sits on the eastern edge of the wider regional picture through shipping routes, labor-market exposure, and energy-price sensitivity.',
  },
  Nepal: {
    fill: 'rgba(56, 189, 248, 0.16)',
    stroke: 'rgba(56, 189, 248, 0.46)',
    labelColor: 'rgba(125, 211, 252, 0.72)',
    label: 'NEPAL',
    subtitle: 'Regional Stakeholder',
    detail: 'Nepal is indirectly affected through remittances, fuel-market spillover, and broader South Asian geopolitical balancing.',
  },
  Bhutan: {
    fill: 'rgba(56, 189, 248, 0.16)',
    stroke: 'rgba(56, 189, 248, 0.46)',
    labelColor: 'rgba(125, 211, 252, 0.72)',
    label: 'BHUTAN',
    subtitle: 'Regional Stakeholder',
    detail: 'Bhutan is a peripheral regional stakeholder affected mainly through energy pricing, South Asian diplomacy, and wider stability concerns.',
  },
  Palestine: {
    fill: 'rgba(59, 130, 246, 0.14)',
    stroke: 'rgba(59, 130, 246, 0.42)',
    labelColor: 'rgba(59, 130, 246, 0.72)',
    label: 'PALESTINE',
    subtitle: 'Contested Area',
    detail: 'Contested territory whose political and security dynamics continue to shape the wider conflict frame.',
  },
  'United States of America': {
    fill: 'rgba(239, 68, 68, 0.08)',
    stroke: 'rgba(239, 68, 68, 0.34)',
    labelColor: 'rgba(248, 113, 113, 0.62)',
    label: 'USA',
    subtitle: 'Primary External Actor',
    detail: 'The United States shapes deterrence, naval posture, military aid, sanctions, and diplomatic signaling across the conflict.',
  },
  'United Kingdom': {
    fill: 'rgba(96, 165, 250, 0.06)',
    stroke: 'rgba(96, 165, 250, 0.28)',
    labelColor: 'rgba(147, 197, 253, 0.54)',
    label: 'UNITED KINGDOM',
    subtitle: 'Allied Stakeholder',
    detail: 'Britain is tied in through alliance coordination, maritime security, intelligence sharing, and diplomatic pressure.',
  },
  France: {
    fill: 'rgba(96, 165, 250, 0.05)',
    stroke: 'rgba(96, 165, 250, 0.24)',
    labelColor: 'rgba(147, 197, 253, 0.48)',
    label: 'FRANCE',
    subtitle: 'Allied Stakeholder',
    detail: 'France is connected through Mediterranean deployments, diplomacy, and European security coordination.',
  },
  Germany: {
    fill: 'rgba(96, 165, 250, 0.04)',
    stroke: 'rgba(96, 165, 250, 0.2)',
    labelColor: 'rgba(147, 197, 253, 0.42)',
    label: 'GERMANY',
    subtitle: 'Economic Stakeholder',
    detail: 'Germany is linked through sanctions policy, alliance politics, refugee pressure, and energy-market exposure.',
  },
  Italy: {
    fill: 'rgba(96, 165, 250, 0.04)',
    stroke: 'rgba(96, 165, 250, 0.2)',
    labelColor: 'rgba(147, 197, 253, 0.42)',
    label: 'ITALY',
    subtitle: 'Mediterranean Stakeholder',
    detail: 'Italy is connected through Mediterranean logistics, NATO alignment, and energy-route sensitivity.',
  },
  Greece: {
    fill: 'rgba(96, 165, 250, 0.04)',
    stroke: 'rgba(96, 165, 250, 0.22)',
    labelColor: 'rgba(147, 197, 253, 0.44)',
    label: 'GREECE',
    subtitle: 'Transit Stakeholder',
    detail: 'Greece is exposed through Eastern Mediterranean air and sea traffic, alliance posture, and logistics spillover.',
  },
  Cyprus: {
    fill: 'rgba(96, 165, 250, 0.05)',
    stroke: 'rgba(96, 165, 250, 0.24)',
    labelColor: 'rgba(147, 197, 253, 0.46)',
    label: 'CYPRUS',
    subtitle: 'Forward Transit Hub',
    detail: 'Cyprus sits near military air corridors, evacuation planning, ISR flows, and Eastern Mediterranean naval traffic.',
  },
  Russia: {
    fill: 'rgba(168, 85, 247, 0.05)',
    stroke: 'rgba(168, 85, 247, 0.26)',
    labelColor: 'rgba(196, 181, 253, 0.48)',
    label: 'RUSSIA',
    subtitle: 'Great-Power Stakeholder',
    detail: 'Russia is linked through Syria, arms balances, energy markets, and broader great-power maneuvering.',
  },
  'Russian Federation': {
    fill: 'rgba(168, 85, 247, 0.05)',
    stroke: 'rgba(168, 85, 247, 0.26)',
    labelColor: 'rgba(196, 181, 253, 0.48)',
    label: 'RUSSIA',
    subtitle: 'Great-Power Stakeholder',
    detail: 'Russia is linked through Syria, arms balances, energy markets, and broader great-power maneuvering.',
  },
  China: {
    fill: 'rgba(250, 204, 21, 0.05)',
    stroke: 'rgba(250, 204, 21, 0.24)',
    labelColor: 'rgba(253, 224, 71, 0.44)',
    label: 'CHINA',
    subtitle: 'Global Economic Stakeholder',
    detail: 'China is connected through energy imports, global shipping exposure, sanctions politics, and diplomatic balancing.',
  },
  India: {
    fill: 'rgba(250, 204, 21, 0.05)',
    stroke: 'rgba(250, 204, 21, 0.22)',
    labelColor: 'rgba(253, 224, 71, 0.4)',
    label: 'INDIA',
    subtitle: 'Energy-Market Stakeholder',
    detail: 'India is linked through imported energy, Gulf labor ties, shipping exposure, and regional-security calculations.',
  },
  Azerbaijan: {
    fill: 'rgba(148, 163, 184, 0.05)',
    stroke: 'rgba(148, 163, 184, 0.22)',
    labelColor: 'rgba(148, 163, 184, 0.42)',
    label: 'AZERBAIJAN',
    subtitle: 'Border Stakeholder',
    detail: 'Azerbaijan is adjacent to Iranian territory and connected through borders, energy routes, and regional alignment.',
  },
  Armenia: {
    fill: 'rgba(148, 163, 184, 0.05)',
    stroke: 'rgba(148, 163, 184, 0.22)',
    labelColor: 'rgba(148, 163, 184, 0.42)',
    label: 'ARMENIA',
    subtitle: 'Border Stakeholder',
    detail: 'Armenia is indirectly linked through Caucasus instability, corridor politics, and neighboring escalation sensitivity.',
  },
  Georgia: {
    fill: 'rgba(148, 163, 184, 0.05)',
    stroke: 'rgba(148, 163, 184, 0.2)',
    labelColor: 'rgba(148, 163, 184, 0.4)',
    label: 'GEORGIA',
    subtitle: 'Transit Stakeholder',
    detail: 'Georgia connects to the wider picture through regional transit routes, Russia dynamics, and Black Sea exposure.',
  },
  Turkmenistan: {
    fill: 'rgba(148, 163, 184, 0.04)',
    stroke: 'rgba(148, 163, 184, 0.2)',
    labelColor: 'rgba(148, 163, 184, 0.38)',
    label: 'TURKMENISTAN',
    subtitle: 'Border Stakeholder',
    detail: 'Turkmenistan borders Iran and sits near Caspian trade and energy routes affected by regional instability.',
  },
  Kazakhstan: {
    fill: 'rgba(148, 163, 184, 0.04)',
    stroke: 'rgba(148, 163, 184, 0.22)',
    labelColor: 'rgba(148, 163, 184, 0.4)',
    label: 'KAZAKHSTAN',
    subtitle: 'Central Asian Stakeholder',
    detail: 'Kazakhstan is connected through Caspian energy routes, Eurasian trade links, and wider strategic balancing around Russia, China, and Iran.',
  },
  Uzbekistan: {
    fill: 'rgba(148, 163, 184, 0.04)',
    stroke: 'rgba(148, 163, 184, 0.22)',
    labelColor: 'rgba(148, 163, 184, 0.4)',
    label: 'UZBEKISTAN',
    subtitle: 'Central Asian Stakeholder',
    detail: 'Uzbekistan sits in the middle of Central Asian transit and security networks that can feel second-order effects from regional instability.',
  },
  Kyrgyzstan: {
    fill: 'rgba(148, 163, 184, 0.04)',
    stroke: 'rgba(148, 163, 184, 0.22)',
    labelColor: 'rgba(148, 163, 184, 0.4)',
    label: 'KYRGYZSTAN',
    subtitle: 'Central Asian Stakeholder',
    detail: 'Kyrgyzstan is indirectly connected through Central Asian security dynamics, economic spillover, and broader Eurasian balancing.',
  },
  Tajikistan: {
    fill: 'rgba(148, 163, 184, 0.04)',
    stroke: 'rgba(148, 163, 184, 0.22)',
    labelColor: 'rgba(148, 163, 184, 0.4)',
    label: 'TAJIKISTAN',
    subtitle: 'Central Asian Stakeholder',
    detail: 'Tajikistan links into the wider picture through security corridors, Afghan adjacency, and regional stability concerns.',
  },
  Mongolia: {
    fill: 'rgba(148, 163, 184, 0.04)',
    stroke: 'rgba(148, 163, 184, 0.2)',
    labelColor: 'rgba(148, 163, 184, 0.36)',
    label: 'MONGOLIA',
    subtitle: 'Peripheral Stakeholder',
    detail: 'Mongolia is a peripheral Eurasian stakeholder shaped more by great-power alignment and trade exposure than direct conflict spillover.',
  },
  Libya: {
    fill: 'rgba(148, 163, 184, 0.04)',
    stroke: 'rgba(148, 163, 184, 0.2)',
    labelColor: 'rgba(148, 163, 184, 0.36)',
    label: 'LIBYA',
    subtitle: 'Mediterranean Stakeholder',
    detail: 'Libya is indirectly linked through Mediterranean shipping lanes, energy markets, and regional spillover concerns.',
  },
  Sudan: {
    fill: 'rgba(148, 163, 184, 0.04)',
    stroke: 'rgba(148, 163, 184, 0.2)',
    labelColor: 'rgba(148, 163, 184, 0.36)',
    label: 'SUDAN',
    subtitle: 'Red Sea Stakeholder',
    detail: 'Sudan matters through Red Sea maritime corridors, regional instability, and nearby logistics routes.',
  },
  Eritrea: {
    fill: 'rgba(148, 163, 184, 0.04)',
    stroke: 'rgba(148, 163, 184, 0.2)',
    labelColor: 'rgba(148, 163, 184, 0.36)',
    label: 'ERITREA',
    subtitle: 'Red Sea Stakeholder',
    detail: 'Eritrea sits along the Red Sea corridor and is strategically relevant to shipping and regional posture.',
  },
  Djibouti: {
    fill: 'rgba(148, 163, 184, 0.04)',
    stroke: 'rgba(148, 163, 184, 0.22)',
    labelColor: 'rgba(148, 163, 184, 0.4)',
    label: 'DJIBOUTI',
    subtitle: 'Maritime Chokepoint Stakeholder',
    detail: 'Djibouti anchors one of the world’s most important maritime chokepoints and hosts multiple foreign military presences.',
  },
  Somalia: {
    fill: 'rgba(148, 163, 184, 0.04)',
    stroke: 'rgba(148, 163, 184, 0.18)',
    labelColor: 'rgba(148, 163, 184, 0.34)',
    label: 'SOMALIA',
    subtitle: 'Shipping-Lane Stakeholder',
    detail: 'Somalia sits beside the maritime approaches that tie Red Sea instability to wider global shipping flows.',
  },
};

export const DEFAULT_COUNTRY_STYLE = {
  fill: 'rgba(100, 100, 100, 0.035)',
  stroke: 'rgba(100, 100, 100, 0.2)',
  labelColor: 'rgba(148, 163, 184, 0.38)',
  subtitle: 'Regional State',
  detail: 'Regional state territory within the wider Middle East theater.',
};

export const MAP_LABELS = [
  { text: 'TURKEY', coordinates: [35.0, 39.0], color: 'rgba(148, 163, 184, 0.44)' },
  { text: 'SYRIA', coordinates: [38.5, 35.0], color: 'rgba(148, 163, 184, 0.48)' },
  { text: 'LEBANON', coordinates: [35.7, 33.9], color: 'rgba(249, 115, 22, 0.72)' },
  { text: 'ISRAEL', coordinates: [35.0, 31.7], color: 'rgba(59, 130, 246, 0.9)' },
  { text: 'JORDAN', coordinates: [36.4, 31.2], color: 'rgba(148, 163, 184, 0.5)' },
  { text: 'IRAQ', coordinates: [43.7, 33.6], color: 'rgba(148, 163, 184, 0.5)' },
  { text: 'EGYPT', coordinates: [30.4, 27.4], color: 'rgba(148, 163, 184, 0.42)' },
  { text: 'SAUDI ARABIA', coordinates: [44.6, 23.6], color: 'rgba(249, 115, 22, 0.56)' },
  { text: 'IRAN', coordinates: [53.6, 31.5], color: 'rgba(34, 197, 94, 0.82)' },
  { text: 'YEMEN', coordinates: [47.4, 15.7], color: 'rgba(239, 68, 68, 0.6)' },
  { text: 'UAE', coordinates: [54.7, 24.2], color: 'rgba(249, 115, 22, 0.62)' },
  { text: 'OMAN', coordinates: [57.2, 21.2], color: 'rgba(148, 163, 184, 0.48)' },
  { text: 'PAKISTAN', coordinates: [67.0, 29.2], color: 'rgba(125, 211, 252, 0.66)' },
  { text: 'AFGHANISTAN', coordinates: [66.0, 35.2], color: 'rgba(148, 163, 184, 0.38)' },
  { text: 'KAZAKHSTAN', coordinates: [67.5, 48.2], color: 'rgba(148, 163, 184, 0.34)' },
  { text: 'UZBEKISTAN', coordinates: [63.5, 41.4], color: 'rgba(148, 163, 184, 0.34)' },
  { text: 'KYRGYZSTAN', coordinates: [74.6, 41.3], color: 'rgba(148, 163, 184, 0.32)' },
  { text: 'TAJIKISTAN', coordinates: [71.1, 38.8], color: 'rgba(148, 163, 184, 0.32)' },
  { text: 'BANGLADESH', coordinates: [90.1, 23.9], color: 'rgba(148, 163, 184, 0.4)' },
  { text: 'NEPAL', coordinates: [84.3, 28.2], color: 'rgba(148, 163, 184, 0.4)' },
  { text: 'BHUTAN', coordinates: [90.4, 27.4], color: 'rgba(148, 163, 184, 0.38)' },
  { text: 'RUSSIA', coordinates: [89.0, 57.0], color: 'rgba(196, 181, 253, 0.38)' },
  { text: 'CHINA', coordinates: [103.0, 34.0], color: 'rgba(253, 224, 71, 0.34)' },
  { text: 'MONGOLIA', coordinates: [103.0, 46.7], color: 'rgba(148, 163, 184, 0.3)' },
];

export const SEA_LABELS = [
  { text: 'MEDITERRANEAN SEA', coordinates: [27.8, 35.8], color: 'rgba(59, 130, 246, 0.26)' },
  { text: 'RED SEA', coordinates: [37.0, 20.6], color: 'rgba(59, 130, 246, 0.24)' },
  { text: 'PERSIAN GULF', coordinates: [52.4, 27.0], color: 'rgba(59, 130, 246, 0.28)' },
  { text: 'GULF OF OMAN', coordinates: [59.2, 24.7], color: 'rgba(59, 130, 246, 0.22)' },
  { text: 'CASPIAN SEA', coordinates: [52.3, 40.6], color: 'rgba(59, 130, 246, 0.18)' },
];

export const SMALL_COUNTRY_HOTSPOTS = [
  { name: 'Bangladesh', coordinates: { lon: 90.2, lat: 23.8 }, hitRadius: 18 },
  { name: 'Nepal', coordinates: { lon: 84.1, lat: 28.3 }, hitRadius: 20 },
  { name: 'Bhutan', coordinates: { lon: 90.5, lat: 27.4 }, hitRadius: 18 },
];

export const STRAIT_OF_HORMUZ = {
  start: { lon: 56.15, lat: 26.55 },
  end: { lon: 56.55, lat: 26.2 },
  label: 'STRAIT OF HORMUZ [BLOCKADED]',
  blockaded: true,
  detail: 'Iranian mining and interdiction activity continues to threaten commercial and naval transit.',
};

export const US_BASES = [
  { coordinates: { lon: 50.58, lat: 26.22 }, label: 'US 5th Fleet', detail: 'Primary US naval command presence supporting Gulf escort, strike, and missile-defense operations.' },
  { coordinates: { lon: 51.32, lat: 25.12 }, label: 'Al Udeid AB', detail: 'Regional air hub for ISR, refueling, command-and-control, and strike coordination.' },
  { coordinates: { lon: 30.8, lat: 34.9 }, label: 'USS Lincoln CSG', detail: 'Carrier strike group positioned to project airpower from the Eastern Mediterranean.' },
  { coordinates: { lon: 33.2, lat: 33.8 }, label: 'USS Ford CSG', detail: 'Second carrier group reinforcing deterrence and surge strike capacity.' },
  { coordinates: { lon: 39.3, lat: 18.8 }, label: 'USS Tripoli ARG', detail: 'Amphibious ready group supporting rapid response, Marines, and littoral operations.' },
];

export const CONFLICT_ZONES = [
  { coordinates: { lon: 35.8, lat: 33.5 }, label: 'HEZBOLLAH FRONT', color: [239, 68, 68], detail: 'Northern Israel and southern Lebanon remain the most active rocket, drone, and artillery exchange corridor.' },
  { coordinates: { lon: 56.35, lat: 26.35 }, label: 'HORMUZ MINEFIELD', color: [249, 115, 22], detail: 'Blockade pressure, naval maneuvering, and mine threats make this the most economically sensitive maritime flashpoint.' },
  { coordinates: { lon: 39.4, lat: 18.7 }, label: 'RED SEA OPS', color: [234, 179, 8], detail: 'Missile launches, drone activity, and escort operations continue to stress shipping lanes through the Red Sea corridor.' },
];

export const CITY_CORES = [
  { coordinates: { lon: 51.389, lat: 35.689 }, color: [34, 197, 94], label: 'Tehran', detail: 'Political center of gravity and strategic command node for Iran.' },
  { coordinates: { lon: 34.782, lat: 32.085 }, color: [59, 130, 246], label: 'Tel Aviv', detail: 'Israeli economic and military command hub with dense air-defense coverage.' },
  { coordinates: { lon: 35.502, lat: 33.894 }, color: [249, 115, 22], label: 'Beirut', detail: 'Lebanese capital and a key reference point for the northern escalation front.' },
  { coordinates: { lon: 44.366, lat: 33.315 }, color: [100, 100, 140], label: 'Baghdad', detail: 'Iraqi political center exposed to regional spillover and proxy pressure.' },
  { coordinates: { lon: 51.678, lat: 32.654 }, color: [200, 120, 80], label: 'Isfahan', detail: 'Strategic Iranian interior hub tied to military industry and logistics depth.' },
];

const REGIONAL_COUNTRY_NAMES = new Set([
  'Turkey',
  'Greece',
  'Cyprus',
  'Syria',
  'Lebanon',
  'Israel',
  'Palestine',
  'Jordan',
  'Iraq',
  'Iran',
  'Saudi Arabia',
  'Yemen',
  'Oman',
  'Qatar',
  'Bahrain',
  'Kuwait',
  'United Arab Emirates',
  'Egypt',
  'Libya',
  'Sudan',
  'Eritrea',
  'Djibouti',
  'Armenia',
  'Azerbaijan',
  'Georgia',
  'Turkmenistan',
  'Kazakhstan',
  'Uzbekistan',
  'Kyrgyzstan',
  'Tajikistan',
  'Afghanistan',
  'Pakistan',
  'India',
  'Bangladesh',
  'Nepal',
  'Bhutan',
  'Mongolia',
  'Russia',
  'Russian Federation',
  'China',
]);

export function getRegionFeatures() {
  const allFeatures = feature(countriesAtlas, countriesAtlas.objects.countries).features;
  return allFeatures.filter((mapFeature) => {
    const name = mapFeature.properties?.name;
    if (!REGIONAL_COUNTRY_NAMES.has(name)) return false;
    const bounds = geoBounds(mapFeature);
    const [[minLon, minLat], [maxLon, maxLat]] = bounds;
    const crossesAntimeridian = maxLon < minLon;
    const lonIntersects = crossesAntimeridian
      ? (
        VIEWPORT_BOUNDS.maxLon >= minLon
        || VIEWPORT_BOUNDS.minLon <= maxLon
      )
      : (
        maxLon >= VIEWPORT_BOUNDS.minLon
        && minLon <= VIEWPORT_BOUNDS.maxLon
      );
    return (
      lonIntersects
      && maxLat >= VIEWPORT_BOUNDS.minLat
      && minLat <= VIEWPORT_BOUNDS.maxLat
    );
  });
}

export function getCountryStyle(name) {
  return COUNTRY_STYLES[name] || DEFAULT_COUNTRY_STYLE;
}

export function isPointInViewportBounds(point) {
  if (!point) return false;
  const lon = Array.isArray(point) ? point[0] : point.lon;
  const lat = Array.isArray(point) ? point[1] : point.lat;
  if (!Number.isFinite(lon) || !Number.isFinite(lat)) return false;
  return (
    lon >= VIEWPORT_BOUNDS.minLon
    && lon <= VIEWPORT_BOUNDS.maxLon
    && lat >= VIEWPORT_BOUNDS.minLat
    && lat <= VIEWPORT_BOUNDS.maxLat
  );
}

export function projectWithView(projection, point, viewTransform) {
  if (!projection || !point) return null;
  const lon = Array.isArray(point) ? point[0] : point.lon;
  const lat = Array.isArray(point) ? point[1] : point.lat;
  if (!Number.isFinite(lon) || !Number.isFinite(lat)) return null;
  const projected = projection([lon, lat]);
  if (!projected || !Number.isFinite(projected[0]) || !Number.isFinite(projected[1])) return null;
  return {
    x: (projected[0] * viewTransform.scale) + viewTransform.x,
    y: (projected[1] * viewTransform.scale) + viewTransform.y,
  };
}

export function distanceToSegment(px, py, x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const lengthSq = (dx * dx) + (dy * dy);

  if (lengthSq === 0) {
    return Math.hypot(px - x1, py - y1);
  }

  const t = Math.max(0, Math.min(1, (((px - x1) * dx) + ((py - y1) * dy)) / lengthSq));
  const closestX = x1 + (t * dx);
  const closestY = y1 + (t * dy);
  return Math.hypot(px - closestX, py - closestY);
}

export function formatTooltipPosition(mouseX, mouseY, width, height) {
  return {
    x: Math.min(mouseX + 16, Math.max(16, width - 236)),
    y: Math.min(mouseY + 16, Math.max(16, height - 128)),
  };
}

export function getFeatureTooltip(mapFeature, mouseX, mouseY, width, height) {
  const name = mapFeature.properties?.name || 'Region';
  const style = getCountryStyle(name);
  return {
    id: `country-${name}`,
    title: style.label || name.toUpperCase(),
    subtitle: style.subtitle || 'Regional State',
    detail: style.detail || `${name} within the wider war theater.`,
    accent: (style.stroke || DEFAULT_COUNTRY_STYLE.stroke).replace(/[\d.]+\)$/u, '0.88)'),
    ...formatTooltipPosition(mouseX, mouseY, width, height),
  };
}
