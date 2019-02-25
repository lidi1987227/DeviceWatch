import React from 'react';
import {NavBar, Icon, WhiteSpace, Tabs, SearchBar} from 'antd-mobile';
import { StickyContainer, Sticky} from 'react-sticky';
import DailyCheckCharts from "./DailyCheckCharts";

export default class StatisticlAnalysis extends React.Component {
  constructor(props){
    super(props);
    this.munuList=[
      { title: '日常监督' },
  { title: '隐患分析' },
  { title: '单位分布' },
      { title: '设备分布' },
    ];
  }
  render() {
    let { test } = this.props;
    const data1 = Array.from(new Array(6)).map(() => ({
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
    }));
    return <div>
      <NavBar mode="light" icon={<Icon type="left" />} onLeftClick={() => history.back()}>统计分析</NavBar>
      <SearchBar placeholder="请输入" maxLength={100} />
      <WhiteSpace />
    <StickyContainer>
      <Tabs tabs={this.munuList}
        initalPage={'t2'}
        renderTabBar={this._renderTabBar}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
          <DailyCheckCharts />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
          隐患分析
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
          单位分布
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
          设备分布
        </div>
      </Tabs>
    </StickyContainer>
    <WhiteSpace />
    </div>
  }
  _renderTabBar = (props)=> {
    return (<Sticky>
      {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
    </Sticky>);
  }
}
