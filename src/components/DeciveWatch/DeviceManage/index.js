import React from 'react';
import { NavBar, Icon, WhiteSpace, Tabs, SearchBar,List,Brief } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';

export default class DeviceManage extends React.Component {
  constructor(props) {
    super(props);
    this.munuList = [
      { title: 'First Tab' },
      { title: 'Second Tab' },
      { title: 'Third Tab' },
    ];
  }
  render() {
    let { test } = this.props;
    const data1 = Array.from(new Array(6)).map(() => ({
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
    }));
    return <div>
      <NavBar mode="light" icon={<Icon type="left" />} onLeftClick={() => history.back()}>设备管理</NavBar>
      <SearchBar placeholder="请输入设备名称、注册代码" maxLength={100} />
      <WhiteSpace />
      <StickyContainer>
        <Tabs tabs={this.munuList}
          initalPage={'t2'}
          renderTabBar={this._renderTabBar}
        >
          <List renderHeader={() => ''} className="my-list">
            <List.Item multipleLine extra="extra content" onClick={()=>window.goRoute('deviceDetail')}>
              Title <List.Item.Brief>subtitle</List.Item.Brief>
            </List.Item>
          </List>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
            Content of second tab
        </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
            Content of third tab
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
