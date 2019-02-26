import _groupBy from "lodash/groupBy";
const SET_CODE_TABLE_LIST = "common/setCodeTableList";
const SET_SYS_USER_LIST = "common/setSysUserList";

const initState = {
  codeTable: [],
  sysUserList: []
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case SET_CODE_TABLE_LIST:
      const list = (action.data && _groupBy(action.data, "category")) || [];
      return Object.assign({}, state, { codeTable: list });
    case SET_SYS_USER_LIST:
      return Object.assign({}, state, { sysUserList: action.data || [] });
    default:
      return state;
  }
}

export const setCodeTable = data =>
  window.$dispatch({ type: SET_CODE_TABLE_LIST, data });

export const setSysUserList = data =>
  window.$dispatch({ type: SET_SYS_USER_LIST, data });
