import { setCompanyList } from '../ducks/company';
export const getAllCompanyList = () => {
  ajax({
    type: "get",
    url:"/api/device/company/list?page=0&size=0", 
    timeOut: 5000,
    before: function () {
      console.log("before");
    },
    success: function (str) {
      let data = JSON.parse(str);
      if (data.code === 200) {
        setCompanyList(data.data.list)
      }else{
        window.alert(data.message);
      }
    },
    error: function () {
      window.alert("请求失败，请稍后重试。");
    }
  });

};
