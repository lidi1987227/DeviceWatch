import { Modal } from "antd-mobile";

//Modal.alert(title, message, btnArray:[{text, onPress, style},{text:btnText}], platform?)
export const Confirm = (message, title = "提示") => {
  return new Promise((resolve) => {
    const defaultBtnArray = [
      {
        text: "取消",
        onPress: () => {resolve({result:false})},
      },
      {
        text: "确定",
        onPress: () => {resolve({result:true})},
      },
    ];
    Modal.alert(title, message, defaultBtnArray, "ios")
  });
};