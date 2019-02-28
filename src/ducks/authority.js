const SET_CURRENT_USER_INFO = "authority/setCurrentUserInfo";

const initState = {};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case SET_CURRENT_USER_INFO:
      const { data } = action;
      localStorage.setItem("user-info", JSON.stringify(data));
      return state;
    default:
      return state;
  }
}

export const setCurrentUserInfo = data =>
  window.$dispatch({ type: SET_CURRENT_USER_INFO, data });
