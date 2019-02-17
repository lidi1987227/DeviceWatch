import React from 'react';
import { NavBar, Icon, WhiteSpace, List, WingBlank, Button, Picker, DatePicker,Tag } from 'antd-mobile';
import UseCheckTab from "./UseCheckTab";

var now = new Date();
var nextDay = new Date();
nextDay.setDate(nextDay.getDate() + 1);
export default class DeviceDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: now,
      endDate: nextDay,
      selectList: [
        { label: <div key="2013">日常监督检查</div>, value: 'test1', },
        { label: <div key="2014">专项监督检查</div>, value: 'test2', },
      ],
      resultList: [
        { label: "下达监察指令书", value: 'result1', },
        { label: "实施查封", value: 'result2', },
        { label: "实施扣押", value: 'result3', },
        { label: "其他", value: 'result4', },
      ]
    }
  }
  componentDidUpdate() {

  }

  render() {
    let { test } = this.props;

    console.warn("state,",this.state.startDate,this.state.endDate);

    const tagElement = (<Tag closable onChange={() => {}}>
      {"选择"}
    </Tag>);

    return <div className="use-check-list">
      <NavBar mode="light" icon={<Icon type="left" />} onLeftClick={() => history.back()}>使用单位现场安全监督检查</NavBar>
      <WhiteSpace />
      <div className="use-content">
        <div className="content-top">
          <Picker
            data={this.state.selectList}
            cols={1}
            value={["test1"]}
          >
            <List.Item arrow="horizontal">检查类别</List.Item>
          </Picker>

          <DatePicker
            mode="date"
            title="Select Date"
            extra={this.state.startDate}
            value={this.state.startDate}
            format={(value)=>this._formatDate(value)}
            onChange={startDate => this.setState({ startDate })}
          >
            <List.Item arrow="horizontal">检查日期</List.Item>
          </DatePicker>

          <DatePicker
            mode="date"
            title="Select Date"
            extra="end date"
            format={(value)=>this._formatDate(value)}
            value={this.state.endDate}
            onChange={endDate => this.setState({ endDate })}
          >
            <List.Item className="align-right" arrow="horizontal">至</List.Item>
          </DatePicker>
          <WhiteSpace style={{backgroundColor:"#f5f5f9"}} />
          <List.Item>被检查单位情况</List.Item>
          <List.Item extra="上海某公司">单位名称</List.Item>
          <List.Item extra="张三">法定代表人</List.Item>
          <List.Item extra="江苏省苏州市">地址</List.Item>
          <List.Item extra="请输入">联系人</List.Item>
          <List.Item extra="请输入">职务</List.Item>
          <List.Item extra="请输入">联系电话</List.Item>

          <WhiteSpace style={{backgroundColor:"#f5f5f9"}} />
          <List.Item extra={tagElement}>抽查设备</List.Item>
          <List.Item extra="请输入">设备名称</List.Item>
          <List.Item extra="请输入">设备注册代码</List.Item>
          <WhiteSpace style={{backgroundColor:"#f5f5f9"}} />

          <UseCheckTab />

          <WhiteSpace style={{backgroundColor:"#f5f5f9"}} />
          <Picker
            data={this.state.resultList}
            cols={1}
            value={[""]}
          >
            <List.Item arrow="horizontal">处理措施</List.Item>
          </Picker>
        </div>
        <div className="content-bottom">
          <WingBlank >
            <WhiteSpace />
            <Button type="primary">确定</Button>
            <WhiteSpace />
          </WingBlank>
        </div>
      </div>
    </div>
  }
  _onChange = (value, index) => {
    this._toggleSelect(index);
    console.warn("checkBox change value is ", value, ";index is ", index);
  }
  _formatDate = (date) => {
    if (date&&date.getFullYear) {
      return `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`;
    } 
  }
}
