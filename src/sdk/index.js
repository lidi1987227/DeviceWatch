import * as deviceManage from './deviceManage';
import * as companyManage from './companyManage';

export const getAllDevice = deviceManage.getAllDevice;
export const getDeviceDetail = deviceManage.getDeviceDetail;

export const getAllCompanyList = companyManage.getAllCompanyList;
export const getCompanyDetail = companyManage.getCompanyDetail;

window.getAllDevice=getAllDevice;
