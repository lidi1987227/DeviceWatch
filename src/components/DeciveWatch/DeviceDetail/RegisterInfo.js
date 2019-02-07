import React, { Component } from 'react';
import { List } from 'antd-mobile';
import { deviceRegInfo } from "../../../logic/device";

const { Item } = List;
const TOP_ITEM_NUM = 2;
export default class BasicDetail extends Component {
  render() {
    let { deviceInfo } = this.props;
    return <List className="device-reg-list">
      {deviceRegInfo.map((item,index)=>{
        if (index+1 === TOP_ITEM_NUM) {
          return <Item className="white-top" key={`${item.serKey}-${index}`} extra={deviceInfo[item.serKey]}>{item.name}</Item>;
        }
        return <Item key={`${item.serKey}-${index}`} extra={deviceInfo[item.serKey]}>{item.name}</Item>;
      })}
    </List>
  }
}