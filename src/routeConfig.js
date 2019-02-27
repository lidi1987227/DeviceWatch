import MainPage from './containers/DeciveWatch/MainPage';
import StatisticlAnalysis from './containers/DeciveWatch/StatisticlAnalysis';
import CompanyManage from './containers/DeciveWatch/CompanyManage';
import CompanyDetail from './containers/DeciveWatch/CompanyDetail';
import DeviceManage from './containers/DeciveWatch/DeviceManage';
import DeviceDetail from './containers/DeciveWatch/DeviceDetail';
import CheckManage from './containers/DeciveWatch/CheckManage';
import CheckDetail from './containers/DeciveWatch/CheckDetail';
import SupervisoryReview from './containers/DeciveWatch/SupervisoryReview';
import SupervisoryDetail from "./containers/DeciveWatch/SupervisoryDetail";
import ProduceCheckList from "./containers/DeciveWatch/ProduceCheckList";
import UseCheckList from "./containers/DeciveWatch/UseCheckList";
import Example from "./components/DeciveWatch/SupervisoryDetail/PrintPreView";


export const routeMap = {
  deviceWatch:'/deviceWatch',
  statisticlAnalysis:'/statisticlAnalysis',
  companyManage:'/companyManage',
  companyDetail:'/companyDetail',
  deviceManage:'/deviceManage',
  deviceDetail:'/deviceDetail',
  checkManage:'/checkManage',
  checkDetail:'/checkDetail',
  supervisoryReview:'/supervisoryReview',
  supervisoryDetail:'/supervisoryDetail',
  produceCheckList:'/produceCheckList',
  useCheckList:'/useCheckList',
  example:'/example',
};
const routeConfig = {
  [routeMap.deviceWatch]:MainPage,//智慧市场监管
  [routeMap.statisticlAnalysis]:StatisticlAnalysis,//统计分析
  [routeMap.companyManage]:CompanyManage,//企业管理
  [routeMap.companyDetail]:CompanyDetail,//企业详情
  [routeMap.deviceManage]:DeviceManage,//设备管理
  [routeMap.deviceDetail]:DeviceDetail,//设备详情
  [routeMap.checkManage]:CheckManage,//任务管理
  [routeMap.checkDetail]:CheckDetail,//任务详情
  [routeMap.supervisoryReview]:SupervisoryReview,//监督检查
  [routeMap.supervisoryDetail]:SupervisoryDetail,//监督详情
  [routeMap.produceCheckList]:ProduceCheckList,//监督详情生产单位检查列表
  [routeMap.useCheckList]:UseCheckList,//监督详情使用单位检查列表
  [routeMap.example]:Example,//example调试页
};

export default routeConfig;
