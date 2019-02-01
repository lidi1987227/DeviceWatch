import {setDeviceList} from '../ducks/device';
export const getAllDevice = ()=>{
  let url="/api/device/register/info/list?page=0&size=20";
  try {
    ajaxGet(url).then((data) => {
      setDeviceList(data.list)
    });
  } catch (error) {
    console.log("getAllDevice error",error);
  }
};
