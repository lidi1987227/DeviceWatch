import React from 'react';
import { NavBar, Icon, WhiteSpace, List, Checkbox, WingBlank, Button,SearchBar } from 'antd-mobile';

let { CheckboxItem } = Checkbox;
let { Brief } = List.Item;
export default class DeviceDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelectAll: false,
      checkList: [
        { label: "设备一", value: "test1", isSelected: false },
        { label: "设备二", value: "test2", isSelected: false },
        { label: "设备三", value: "test3", isSelected: false },
      ],
    }
  }
  componentDidUpdate() {
    this._checkIsSelectAll();
  }

  render() {
    let { test } = this.props;

    return <div className="device-check-page">
      <NavBar mode="light" icon={<Icon type="left" />} onLeftClick={() => history.back()}>设备选择</NavBar>
      <SearchBar placeholder="请输入设备名称／使用登记代码" maxLength={100} />
      <WhiteSpace />
      <div className="produce-content">
        <div className="content-top">
          {this.state.checkList.map((chekcItem, index) => {
            return <CheckboxItem
              key={chekcItem.value}
              className="device-check"
              checked={chekcItem.isSelected}
              onClick={() => this._onChange(chekcItem.value, index)}>
              <Brief>
                <div className="device-check-name">设备名称</div>
                <div className="device-check-value">{chekcItem.label}</div>
              </Brief>
              <Brief>
                <div className="device-check-name">使用登记代码</div>
                <div className="device-check-value">{chekcItem.label}</div>
              </Brief>
            </CheckboxItem>
          })}
        </div>
        <div className="content-bottom">
          <WingBlank >
            <WhiteSpace />
            <Button type="primary">确定</Button><WhiteSpace />
          </WingBlank>
        </div>
      </div>
    </div>
  }
  _onChange = (value, index) => {
    this._toggleSelect(index);
    console.warn("checkBox change value is ", value, ";index is ", index);
  }
  _isSelectAll = (isSelect = true) => {
    this.setState((state) => {
      let { checkList } = state;
      for (let index = 0; index < checkList.length; index++) {
        checkList[index].isSelected = isSelect;
      }
      return { checkList }
    });
  }
  _toggleSelect = (index) => {
    this.setState((state) => {
      let { checkList } = state;
      checkList[index].isSelected = !checkList[index].isSelected;
      return { checkList }
    });
  }
  _checkIsSelectAll = () => {
    let { checkList, isSelectAll } = this.state;
    let flag = false;
    for (let index = 0; index < checkList.length; index++) {
      if (checkList[index].isSelected) {
        flag = true;
      }
    }
    if (isSelectAll === flag) {
      return;
    }
    this.setState({
      isSelectAll: flag
    });
  }
}
