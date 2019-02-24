import { Modal } from "antd-mobile";

export const Alert = (message, title="提示",btnTxt="确定") => {
  return Modal.alert(title, message,[{text:btnTxt}]);
};