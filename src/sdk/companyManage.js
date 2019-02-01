import { setCompanyList,setCompanyDetail } from '../ducks/company';
/**
 * 获取所有企业列表
 * conditions ＝ { name = "", contact = "", companyType = "", page = 0, size = 0 }；
 */
export const getAllCompanyList = (conditions={}) => {
  let { name = "", contact = "", companyType = "", page = 0, size = 20 } = conditions;
  let url = "/api/device/company/list?" + "page=" + page + "&size=" + size;
  name !== "" ? url += `&name=${name}` : null;
  contact !== "" ? url += `&contact=${contact}` : null;
  companyType !== "" ? url += `&companyType=${companyType}` : null;
  try {
    ajaxGet(url).then((data) => {
      setCompanyList(data.list)
    });
  } catch (error) {
    console.log("getAllCompanyList error",error);
  }
};

/**
 * 获取企业详情
 * id - 企业主键id
 */
export const getCompanyDetail = async (id) => {
  let url = "/api/device/company/detail/"+id;
  try {
    await ajaxGet(url).then((data) => {
      setCompanyDetail(data)
    });
  } catch (error) {
    console.log("getCompanyDetail error",error);
  }
};
