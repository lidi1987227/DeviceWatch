import React, { Component } from 'react';
import { NavBar, Icon, WhiteSpace, Tabs, SearchBar, List, Brief } from 'antd-mobile';
import { deviceRegInfo } from "../../../logic/device";
let { Item } = List;
let TOP_ITEM_NUM = 2;
export default class BasicDetail extends Component {
  constructor(props) {
    super(props);
  }
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