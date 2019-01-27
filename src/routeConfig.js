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
  [routeMap.deviceWatch]:MainPage,//智慧市场监管
  [routeMap.statisticlAnalysis]:StatisticlAnalysis,//统计分析
  [routeMap.companyManage]:CompanyManage,//企业管理
  [routeMap.companyDetail]:CompanyDetail,//企业详情
  [routeMap.deviceManage]:DeviceManage,//设备管理
  [routeMap.deviceDetail]:DeviceDetail,//设备详情
  [routeMap.taskManage]:TaskManage,//任务管理
  [routeMap.taskDetail]:TaskDetail,//任务详情
  [routeMap.supervisoryReview]:SupervisoryReview,//监督检查
};

export default routeConfig;
