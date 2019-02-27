import React from "react";
import {
  NavBar,
  Icon,
  WhiteSpace,
  InputItem,
  Picker,
  List,
  Grid
} from "antd-mobile";
import { getSysUserList, getUsedCheckItemList } from "../../../sdk";

const isIPhone = new RegExp("\\biPhone\\b|\\biPod\\b", "i").test(
  window.navigator.userAgent
);
let moneyKeyboardWrapProps;
if (isIPhone) {
  moneyKeyboardWrapProps = {
    onTouchStart: e => e.preventDefault()
  };
}

export default class SupervisoryDetail extends React.Component {
  constructor(props) {
    super(props);
    this.produceList = [
      {
        type: 'produce',
        title: "生产单位",
        icon:
          "https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png",
        route: routeMap.produceCheckList
      }
    ];
    this.state = {
      colorValue: ["#00FF00"]
    };
  }

  componentWillMount() {
    getSysUserList();
  }

  render() {
    const { sysUserList, codeTable } = this.props;
    const userList =
      (sysUserList &&
        sysUserList.map(item => ({ label: item.name, value: item.id }))) ||
      [];
    const tempDeviceTypeList = (codeTable && codeTable["设备类型"]) || [];
    const useDeviceTypeList = tempDeviceTypeList.map(item => ({
      type: 'used',
      title: item.code,
      id: item.id,
      icon:
        "https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png",
      route: routeMap.useCheckList
    }));

    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => history.back()}
        >
          监督检查
        </NavBar>
        <WhiteSpace />
        <InputItem
          type="text"
          className="supervisory-input"
          placeholder="张三"
          clear
          onChange={v => {
            console.log("onChange", v);
          }}
          onBlur={v => {
            console.log("onBlur", v);
          }}
          moneyKeyboardWrapProps={moneyKeyboardWrapProps}
        >
          监察人员
        </InputItem>

        <Picker data={userList} cols={1}>
          <List.Item arrow="horizontal">协同人员</List.Item>
        </Picker>

        <Picker data={userList} cols={1}>
          <List.Item arrow="horizontal">其他人员</List.Item>
        </Picker>
        <WhiteSpace style={{ backgroundColor: "#f5f5f9" }} />
        <div className="supervisory-check-title">检查项目</div>
        <div className="supervisory-check-content">
          <div className="supervisory-check-produce">
            <div className="check-produce-title">生产单位</div>
            <Grid
              data={this.produceList}
              className="produce-grid"
              columnNum={4}
              square={false}
              hasLine={false}
              renderItem={this._renderMenuItem}
            />
          </div>
          <div className="supervisory-check-use">
            <div className="check-use-title">使用单位</div>
            <Grid
              data={useDeviceTypeList}
              className="user-grid"
              columnNum={4}
              square={false}
              hasLine={false}
              renderItem={this._renderMenuItem}
            />
          </div>
        </div>
        <WhiteSpace />
      </div>
    );
  }
  _renderMenuItem = dataItem => {
    return (
      <div onClick={() => {this.handleMenuItemClick(dataItem)}}>
        <img
          src={dataItem.icon}
          style={{ width: "50px", height: "50px" }}
          alt=""
        />
        <div style={{ color: "#888", fontSize: "14px", marginTop: "5px" }}>
          <span>{dataItem.title}</span>
        </div>
      </div>
    );
  };
  handleMenuItemClick = dataItem => {
    if(dataItem.type === 'used' && dataItem.id){
      getUsedCheckItemList(dataItem.id);
    }
    window.goRoute(dataItem.route)
  }

}
