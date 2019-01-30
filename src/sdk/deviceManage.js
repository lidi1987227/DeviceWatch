import {setDeviceList} from '../ducks/device';
export const getAllDevice = ()=>{
    ajax({
        type:"get",
        url:"/api/device/register/info/list?page=0&size=0", //添加自己的接口链接
        timeOut:5000,
        before:function(){
            console.log("before");
        },
        success:function(str){

            let data = JSON.parse(str);
            console.log(data);
            setDeviceList(data.data.list)
        },
        error:function(){
            console.log("error");
        }
    });

};
