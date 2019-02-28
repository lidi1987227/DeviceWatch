import { setCurrentUserInfo } from "../ducks/authority";

/**
 * params {token}
 */
export const verify = async code => {
  let url = `/api/auth/verify?code=${code}`;
  try {
    let data = await ajaxGet(url)
    window.token = "Bearer " + data.token;
  } catch (error) {
    console.log("verify error", error);
  }
};

export const getCurrentUserInfo = async () => {
    let url = '/api/user/me';
    try {
      await ajaxGet(url).then(data => {
        setCurrentUserInfo(data);
      });
    } catch (error) {
      console.log("getCurrentUserInfo error", error);
    }
  };