import { setCompanyList,setCompanyMore,setCompanyDetail } from '../ducks/company';
/**
 * 获取所有企业列表
 * conditions ＝ { name = "", contact = "", companyType = "", page = 0, size = 0 }；
 */
export const getAllCompanyList = (conditions={},isMore=false) => {
  let { name = "", contact = "", companyType = 0, page = 1, size = 20 } = conditions;
  let url = "/api/device/company/list?" + "page=" + page + "&size=" + size;
  name !== "" ? url += `&name=${name}` : null;
  contact !== "" ? url += `&contact=${contact}` : null;
  companyType !== "" && companyType !== 0 ? url += `&companyType=${companyType}` : null;
  console.log("getAllCompanyList current page is ",page,"current type is ",companyType);
  try {
    return ajaxGet(url).then((data) => {
      isMore?setCompanyMore(data.list,companyType):
      setCompanyList(data.list,companyType);
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
