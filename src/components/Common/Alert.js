import React, { Component } from "react";
import { Modal } from "antd-mobile";

//Modal.alert(title, message, actions?, platform?)
export const Alert = (title, message, btnTxt) => (
  Modal.alert(title, message,[{text:btnTxt}],"ios")
);