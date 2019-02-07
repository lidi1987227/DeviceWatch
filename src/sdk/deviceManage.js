import {setDeviceList,setDeviceMore,setDeviceDetail} from '../ducks/device';

export const getAllDevice = (conditions={},isMore=false)=>{
  let { devTypeId = 0, page = 1, size = 10 } = conditions;
  let url = "/api/device/register/info/list?" + "page=" + page + "&size=" + size;
  devTypeId !== "" && devTypeId !== 0 ? url += `&devTypeId=${devTypeId}` : null;
  console.log("getAllDevice the url is ",url);
  try {
    return ajaxGet(url).then((data) => {
      isMore?setDeviceMore(data,devTypeId):
      setDeviceList(data,devTypeId);
    });
  } catch (error) {
    console.log("getAllDevice error",error);
  }
};

/**
 * 获取设备详情
 * id - 企业主键id
 */
export const getDeviceDetail = async (id) => {
  let url = "/api/device/register/info/findDetail/"+id;
  try {
    await ajaxGet(url).then((data) => {
      setDeviceDetail(data)
    });
  } catch (error) {
    console.log("getCompanyDetail error",error);
  }
};
