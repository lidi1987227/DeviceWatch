import React from 'react';
import { NavBar, Icon, WhiteSpace, Tabs, } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import RegisterInfo from "./RegisterInfo";
export default class DeviceDetail extends React.Component {
  constructor(props) {
    super(props);
    this.munuList = [
      { title: '登记信息' },
      { title: '技术参数' },
      { title: '设备检验信息' },
    ];
  }
  render() {
    let { deviceDetail } = this.props;
    let { deviceInfo } = deviceDetail;

    return <div>
      <NavBar mode="light" icon={<Icon type="left" />} onLeftClick={() => history.back()}>设备详情</NavBar>
      <WhiteSpace />
      <StickyContainer>
        <Tabs tabs={this.munuList}
          initalPage={'t2'}
          renderTabBar={this._renderTabBar}
        >
          <RegisterInfo deviceInfo={deviceInfo} />
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
            暂时不做！
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
            没找到接口
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
