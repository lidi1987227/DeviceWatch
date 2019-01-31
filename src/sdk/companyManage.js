import { setCompanyList,setCompanyDetail } from '../ducks/company';
/**
 * 获取所有企业列表
 * conditions ＝ { name = "", contact = "", companyType = "", page = 0, size = 0 }；
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

/**
 * 获取企业详情
 * id - 企业主键id
 */
export const getCompanyDetail = (id) => {
  return new Promise((resolve,reject)=>{
    ajax({
      type: "get",
      url: "/api/device/company/detail/"+id,
      timeOut: 5000,
      before: function () {
        console.log("before");
      },
      success: function (str) {
        let data = JSON.parse(str);
        if (data.code === 200) {
          resolve(data.data); //!111111
          setCompanyDetail(data.data);
        } else {
          window.alert(data.message);
        }
      },
      error: function () {
        window.alert("请求失败，请稍后重试。");
        reject("getCompanyDetail error");  //!11111111
      }
    });
  });
};
