import React from 'react';
import { NavBar, Icon, WhiteSpace, Tabs, SearchBar,List,Brief } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';

import {getAllDevice} from '../../../sdk'

export default class DeviceManage extends React.Component {
  constructor(props) {
    super(props);
    this.menuList = [
      { title: '全部' },
      { title: 'Second Tab' },
      { title: 'Third Tab' },
    ];
    getAllDevice();
  }
  render() {
    let { deviceList } = this.props;
    return <div>
      <NavBar mode="light" icon={<Icon type="left" />} onLeftClick={() => history.back()}>设备管理</NavBar>
      <SearchBar placeholder="请输入设备名称、注册代码" maxLength={100} />
      <WhiteSpace />
      <StickyContainer>
        <Tabs tabs={this.menuList}
          renderTabBar={this._renderTabBar}
        >
          <List renderHeader={() => ''} className="my-list">
            {deviceList.map((device,index)=>{
              return  <List.Item key={index} multipleLine onClick={()=>window.goRoute(window.routeMap.deviceDetail)}>
                <div>
                  {device.devCategory}
                </div>
              </List.Item>
            })}
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
