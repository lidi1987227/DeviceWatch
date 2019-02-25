import React from "react";
import { NavBar, Icon, WhiteSpace, List, SegmentedControl } from "antd-mobile";

let { Item } = List;
let { Brief } = Item;
export default class CheckDetail extends React.Component {
  constructor(props) {
    super(props);
    let { checkDetail } = this.props;
    let { checkDetailList } = checkDetail;
    this.state = {
      targetDetailList: checkDetailList,
      selectedIndex: 0,
    };
  }

  render() {
    let { checkDetail } = this.props;
    const { targetDetailList, selectedIndex } = this.state;
    
    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => history.back()}
        >
          任务详情
        </NavBar>
        <WhiteSpace />
        <List className="check-detail-list">
          <Item
            className="check-detail-date"
            extra={`${checkDetail.startDate} 至 ${checkDetail.endDate}`}
          >
            检查日期：
          </Item>
          <Item multipleLine wrap>
            检查内容描述： <Brief>{checkDetail.content}</Brief>
          </Item>
          <Item multipleLine wrap>
            检查设备类型： <Brief>subtitle</Brief>
          </Item>
          <Item multipleLine className="check-detail-item">
            受检单位：
            <SegmentedControl
              selectedIndex={selectedIndex}
              values={["全部", "已检查", "未检查"]}
              className="check-detail-segment"
              onChange={this._onChange}
              onValueChange={this._onValueChange}
            />
          </Item>
          <WhiteSpace size="sm" style={{ backgroundColor: "#f5f5f9" }} />
          {targetDetailList.map((checkItem, index) => {
            let { deviceCompany } = checkItem;
            return (
              <Item
                key={`${checkItem.id}-${index}`}
                multipleLine
                extra={this.getCheckStatusDesc(checkItem.checkStatus)}
                onClick={() => this._onCheckItemClick(checkItem)}
              >
                <Brief>{deviceCompany.name}</Brief>
                <Brief>{deviceCompany.companyTypeDesc}</Brief>
                <Brief>{deviceCompany.detailAddress}</Brief>
              </Item>
            );
          })}
        </List>
        <WhiteSpace />
      </div>
    );
  }
  _onChange = e => {
    this.setState({
      selectedIndex: e.nativeEvent.selectedSegmentIndex
    });
    console.log(`selectedIndex:${e.nativeEvent.selectedSegmentIndex}`);
  };
  _onValueChange = value => {
    let { checkDetail } = this.props;
    let { checkDetailList = [] } = checkDetail;
    let tempList = [];
    switch(value){
      case '全部': tempList = checkDetailList; break;
      case '已检查': tempList = checkDetailList.filter(item=>item.checkStatus === 1); break;
      case '未检查': tempList = checkDetailList.filter(item=>item.checkStatus === 0); break;
      default : tempList = []; break;
    }
    this.setState({
      targetDetailList: tempList
    });
  };
  _onCheckItemClick = checkItem => {
    if (!checkItem.checkStatus) {
      window.goRoute(window.routeMap.supervisoryDetail);
    }
  };

  getCheckStatusDesc = checkStatus => {
    let statusDesc = "";
    switch (checkStatus) {
      case 0:
        statusDesc = "未检查";
        break;
      case 1:
        statusDesc = "已检查";
        break;
      default:
        break;
    }
    return statusDesc;
  };
}
