
const SET_COMPANY_LIST = 'company/setCompanyList';
const SET_COMPANY_DETAIL = 'company/setCompanyDetail';

const initState = {
  companyList: [],
  companyDetail:{},
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case SET_COMPANY_LIST:
      return Object.assign({}, state, { companyList: action.list });
    case SET_COMPANY_DETAIL:
      return Object.assign({}, state, { companyDetail: action.companyDetail });
    default:
      return state;

  }
}

export const setCompanyList = (list) => window.$dispatch({ type: SET_COMPANY_LIST, list });
export const setCompanyDetail = (companyDetail) => window.$dispatch({ type: SET_COMPANY_DETAIL, companyDetail });
