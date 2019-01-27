import MainPage from './containers/DeciveWatch/MainPage';
import StatisticlAnalysis from './containers/DeciveWatch/StatisticlAnalysis';
import CompanyManage from './containers/DeciveWatch/CompanyManage';
import CompanyDetail from './containers/DeciveWatch/CompanyDetail';
import DeviceManage from './containers/DeciveWatch/DeviceManage';
import DeviceDetail from './containers/DeciveWatch/DeviceDetail';
import TaskManage from './containers/DeciveWatch/TaskManage';
import TaskDetail from './containers/DeciveWatch/TaskDetail';
import SupervisoryReview from './containers/DeciveWatch/SupervisoryReview';


export const routeMap = {
  deviceWatch:'/deviceWatch',
  statisticlAnalysis:'/statisticlAnalysis',
  companyManage:'/companyManage',
  companyDetail:'/companyDetail',
  deviceManage:'/deviceManage',
  deviceDetail:'/deviceDetail',
  taskManage:'/taskManage',
  taskDetail:'/taskDetail',
  supervisoryReview:'/supervisoryReview',
};
const routeConfig = {
  [routeMap.deviceWatch]:MainPage,
  [routeMap.statisticlAnalysis]:StatisticlAnalysis,
  [routeMap.companyManage]:CompanyManage,
  [routeMap.companyDetail]:CompanyDetail,
  [routeMap.deviceManage]:DeviceManage,
  [routeMap.deviceDetail]:DeviceDetail,
  [routeMap.taskManage]:TaskManage,
  [routeMap.taskDetail]:TaskDetail,
  [routeMap.supervisoryReview]:SupervisoryReview,
};

export default routeConfig;
