import MainPage from './containers/DeciveWatch/MainPage';
import StatisticlAnalysis from './containers/DeciveWatch/StatisticlAnalysis';

export const routeMap = {
  deviceWatch:'/deviceWatch',
  statisticlAnalysis:'/statisticlAnalysis'
};
const routeConfig = {
  [routeMap.deviceWatch]:MainPage,
  [routeMap.statisticlAnalysis]:StatisticlAnalysis,
};

export default routeConfig;
