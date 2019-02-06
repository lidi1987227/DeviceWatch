import React from 'react';
import { NavBar, Icon, WhiteSpace, Tabs, SearchBar, List, Brief } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import BasicDetail from "./BasicDetail";
import CredentialDetail from "./CredentialDetail";
import EquipmentDetail from "./EquipmentDetail";

export default class CompanyManage extends React.Component {
  constructor(props) {
    super(props);
    this.munuList = [
      { title: '基本信息' },
      { title: '单位资质' },
      { title: '设备信息' },
    ];
  }
  render() {
    let { companyDetail } = this.props;
    let { deviceList } = companyDetail;
    console.warn("companyDetail",companyDetail);
    const data1 = Array.from(new Array(6)).map(() => ({
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
    }));
    return <div>
      <NavBar mode="light" icon={<Icon type="left" />} onLeftClick={() => history.back()}>企业详情</NavBar>

      <WhiteSpace />
      <StickyContainer>
        <Tabs tabs={this.munuList}
          initalPage={'t2'}
          renderTabBar={this._renderTabBar}
        >
          <BasicDetail companyDetail={companyDetail} />
          <CredentialDetail companyDetail={companyDetail} />
          <EquipmentDetail deviceList={deviceList} />
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
