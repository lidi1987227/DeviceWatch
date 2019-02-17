import React from 'react';
import { NavBar, Icon, WhiteSpace, WingBlank, Button, List, Grid } from 'antd-mobile';
import PrintViewLeft from "./PrintViewLeft";
import PrintViewRight from "./PrintViewRight";

export default class PrintPreView extends React.Component {
  constructor(props) {
    super(props);
    this.useList = [
      { title: '现场安全监督检查记录表', icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png', tab: "left" },
      { title: '安全监察指令书', icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png', tab: "right" },
    ];
    this.state = {
      showPrint: "left",
    };
  }
  render() {
    let { test } = this.props;
    return <div className="print-preview-page">
      <NavBar mode="light" icon={<Icon type="left" />} onLeftClick={() => history.back()}>文书打印预览</NavBar>
      <WhiteSpace />
      <div className="print-top">
        <Grid data={this.useList}
          className="print-grid"
          columnNum={2}
          square={false}
          hasLine={false}
          renderItem={this._renderMenuItem}
        />
      </div>
      <div className="print-bottom">
        <List.Item >文书预览</List.Item>
        {this.state.showPrint === "left" ?
          <PrintViewLeft />
          : <PrintViewRight />}
      </div>
      <div className="bottom-button">
        <WingBlank >
          <WhiteSpace />
          <Button type="primary">确定</Button>
          <WhiteSpace />
        </WingBlank>
      </div>

      <WhiteSpace />
    </div>
  }
  _renderMenuItem = (dataItem) => {
    return <div onClick={() => this._changeTabPage(dataItem.tab)}>
      <img src={dataItem.icon} style={{ width: '70px', height: '70px' }} alt="" />
      <div style={{ color: '#888', fontSize: '16px', marginTop: '18px' }}>
        <span>{dataItem.title}</span>
      </div>
    </div>
  }
  _changeTabPage = (page) => {
    this.setState({
      showPrint: page
    });
  }
}