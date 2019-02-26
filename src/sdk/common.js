import { setCodeTable, setSysUserList } from "../ducks/common";

/**
 * 获取CodeTable
 * @returns array
 */
export const getCodeTable = async () => {
  let url = "/api/sys/code/table/getAllCode";
  try {
    await ajaxGet(url).then(data => {
      setCodeTable(data);
    });
  } catch (error) {
    console.log("getCodeTable error", error);
  }
};

export const getSysUserList = async () => {
  let url = "/api/sys/user/userList";
  try {
    await ajaxGet(url).then(data => {
      setSysUserList(data);
    });
  } catch (error) {
    console.log("getSysUserList error", error);
  }
};
