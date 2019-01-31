import { setCompanyList } from '../ducks/company';
/**
 * 获取所有企业列表
 */
export const getAllCompanyList = (conditions={}) => {
  let { name = "", contact = "", companyType = "", page = 0, size = 0 } = conditions;
  let url = "/api/device/company/list?" + "page=" + page + "&size=" + size;
  name !== "" ? url += `&name=${name}` : null;
  contact !== "" ? url += `&contact=${contact}` : null;
  companyType !== "" ? url += `&companyType=${companyType}` : null;
  ajax({
    type: "get",
    url: url,
    timeOut: 5000,
    before: function () {
      console.log("before");
    },
    success: function (str) {
      let data = JSON.parse(str);
      if (data.code === 200) {
        setCompanyList(data.data.list)
      } else {
        window.alert(data.message);
      }
    },
    error: function () {
      window.alert("请求失败，请稍后重试。");
    }
  });

};


export const getCompanyDetail = () => {
  ajax({
    type: "get",
    url: "/api/device/company/list?page=0&size=0",
    timeOut: 5000,
    before: function () {
      console.log("before");
    },
    success: function (str) {
      let data = JSON.parse(str);
      if (data.code === 200) {
        setCompanyList(data.data.list)
      } else {
        window.alert(data.message);
      }
    },
    error: function () {
      window.alert("请求失败，请稍后重试。");
    }
  });

};
