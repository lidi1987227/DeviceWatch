import * as deviceManage from './deviceManage';
import * as companyManage from './companyManage';
import * as checkManage from './checkManage';
import * as supervisoryReview from './supervisoryReview';
import * as common from './common';
import * as authority from './authority';

export const verify = authority.verify;
export const getCurrentUserInfo = authority.getCurrentUserInfo;

export const getCodeTable = common.getCodeTable;
export const getSysUserList = common.getSysUserList;

export const getAllDevice = deviceManage.getAllDevice;
export const getDeviceDetail = deviceManage.getDeviceDetail;
export const getDeviceCheckList = deviceManage.getDeviceCheckList;

export const getAllCompanyList = companyManage.getAllCompanyList;
export const getCompanyDetail = companyManage.getCompanyDetail;

export const getAllCheckList = checkManage.getAllCheckList;
export const getCheckDetail = checkManage.getCheckDetail;

export const getSupervisoryList = supervisoryReview.getSupervisoryList;
export const getSupervisoryDetail = supervisoryReview.getSupervisoryDetail;
export const getProduceCheckItemList = supervisoryReview.getProduceCheckItemList;
export const getUsedCheckItemList = supervisoryReview.getUsedCheckItemList;
