import React from 'react';
import { NavBar, Icon, WhiteSpace, List, Tag, Checkbox, WingBlank, Button } from 'antd-mobile';
import { getProduceCheckItemList } from "../../../sdk";

let { CheckboxItem } = Checkbox;
export default class DeviceDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelectAll: false,
      checkList: [],
    }
  }

  componentWillMount(){
    getProduceCheckItemList();
  }

  componentWillReceiveProps(props){
    const { produceCheckItems } = props; 
    if(produceCheckItems && produceCheckItems.length > 0){
        this.setState({
            checkList: produceCheckItems
        });
    }
  }

  componentDidUpdate() {
    this._checkIsSelectAll();
  }

  render() {
    let { test } = this.props;
    const tagElement = (<Tag closable onChange={() => { this._isSelectAll(!this.state.isSelectAll) }}>
      {!this.state.isSelectAll ? "全选" : "取消全选"}
    </Tag>);
    return <div className="produce-check-list">
      <NavBar mode="light" icon={<Icon type="left" />} onLeftClick={() => history.back()}>生产单位现场安全监督检查项目表</NavBar>
      <WhiteSpace />
      <div className="produce-content">
        <div className="content-top">
          <List.Item extra={tagElement}>检查内容</List.Item>
          {this.state.checkList.map((chekcItem, index) => {
            return <CheckboxItem
              key={chekcItem.id}
              wrap
              checked={chekcItem.isSelected}
              onClick={() => this._onChange(chekcItem.id, index)}>
              {`${chekcItem.number}.${chekcItem.content}`}
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
