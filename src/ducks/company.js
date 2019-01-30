
const SET_COMPANY_LIST = 'company/setCompanyList';

const initState = {
  companyList: []
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case SET_COMPANY_LIST:
      return Object.assign({}, state, { companyList: action.list });
    default:
      return state;

  }
}

export const setCompanyList = (list) => window.$dispatch({ type: SET_COMPANY_LIST, list });
