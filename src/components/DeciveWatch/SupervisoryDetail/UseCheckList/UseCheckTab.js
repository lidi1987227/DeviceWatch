import React from 'react';
import { NavBar, Icon, WhiteSpace, Tabs } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import UseCheckTabLeft from "./UseCheckTabLeft";

export default class CompanyManage extends React.Component {
  constructor(props) {
    super(props);
    this.munuList = [
      { title: '现场安全监督检查项目表' },
      { title: '现场监督检查记录表' },
    ];
  }
  render() {
    let { companyDetail } = this.props;
    return <div>
      <StickyContainer>
        <Tabs tabs={this.munuList}
          initalPage={'t2'}
          renderTabBar={this._renderTabBar}
        >
          <UseCheckTabLeft />
          <div className="use-check-tab-right" style={{width:"100%",height:"40px"}}>
            现场监督检查记录表
          </div>
        </Tabs>
      </StickyContainer>
      <WhiteSpace />
    </div>
  }
  _renderTabBar = (props) => {
    return (<Sticky>
      {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
    </Sticky>);
  }
}
