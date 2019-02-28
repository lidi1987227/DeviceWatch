
const SET_SUPERVISORY_LIST = 'supervisory/setSupervisoryList';
const SET_SUPERVISORY_DETAIL = 'supervisory/setSupervisoryDetail';
const SET_MORE_SUPERVISORY_LIST = 'supervisory/setSupervisoryMore';
const SET_PRODUCE_CHECK_ITEM_LIST = 'supervisory/setProduceCheckItemList';
const SET_USED_CHECK_ITEM_LIST = 'supervisory/setUsedCheckItemList';
const SET_SUPERVISOR_INFO = 'supervisory/setSupervisorInfo';

const initState = {
  supervisoryList: {},
  supervisoryDetail:{},
  produceCheckItems: [],
  usedCheckItems: [],
  produceSupervisorInfo: {}
};

export default function reducer(state = initState, action) {
  let listName="",newState={},newList=[];
  switch (action.type) {
    case SET_SUPERVISORY_LIST:
      listName = action.supervisoryType === 0 ? "supervisoryList" : "supervisoryList" + action.supervisoryType;
      newState ={};
      newState[listName] = action.list;
      return Object.assign({}, state, newState);
    case SET_MORE_SUPERVISORY_LIST:
      listName = action.supervisoryType === 0 ? "supervisoryList" : "supervisoryList" + action.supervisoryType;
      newList = state[listName]?state[listName].list.concat(action.list.list):[];
      newState[listName] = Object.assign({},action.list,{list:newList});
      return Object.assign({}, state, newState);
    case SET_SUPERVISORY_DETAIL:
      const supDetail = action.supervisoryDetail;
      const produceSupInfo = {...supDetail};
      return Object.assign({}, state, { supervisoryDetail: supDetail,produceSupervisorInfo: produceSupInfo});
    case SET_PRODUCE_CHECK_ITEM_LIST:
      return Object.assign({}, state, { produceCheckItems: action.data || [] });
    case SET_USED_CHECK_ITEM_LIST:
      return Object.assign({}, state, { usedCheckItems: action.data || [] });
    case SET_SUPERVISOR_INFO:
      const { produceSupervisorInfo } = state;
      const targetInfo = Object.assign({}, produceSupervisorInfo, { ...action.data });
      return Object.assign({}, state, { produceSupervisorInfo: targetInfo });
    default:
      return state;

  }
}

export const setSupervisoryList = (list,supervisoryType) => window.$dispatch({ type: SET_SUPERVISORY_LIST, list, supervisoryType });
export const setSupervisoryMore = (list,supervisoryType) => window.$dispatch({ type: SET_MORE_SUPERVISORY_LIST, list, supervisoryType });
export const setSupervisoryDetail = (supervisoryDetail) => window.$dispatch({ type: SET_SUPERVISORY_DETAIL, supervisoryDetail });
export const setProduceCheckItemList = (data) => window.$dispatch({ type: SET_PRODUCE_CHECK_ITEM_LIST, data });
export const setUsedCheckItemList = (data) => window.$dispatch({ type: SET_USED_CHECK_ITEM_LIST, data });
export const setSupervisorInfo = (data) => window.$dispatch({ type: SET_SUPERVISOR_INFO, data });
