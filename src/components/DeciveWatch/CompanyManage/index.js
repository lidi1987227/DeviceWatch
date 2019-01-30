import React from 'react';
import { NavBar, Icon, WhiteSpace, Tabs, SearchBar,List,Brief } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import { getAllCompanyList } from "../../../sdk";

export default class CompanyManage extends React.Component {
  constructor(props) {
    super(props);
    this.munuList = [
      { title: '全部' },
      { title: 'Second Tab' },
      { title: 'Third Tab' },
    ];
    getAllCompanyList();
  }
  render() {
    let { companyList=[] } = this.props;
    return <div>
      <NavBar mode="light" icon={<Icon type="left" />} onLeftClick={() => history.back()}>企业管理</NavBar>
      <SearchBar placeholder="请输入企业名称、联系人名称、关键词" maxLength={100} />
      <WhiteSpace />
      <StickyContainer>
        <Tabs tabs={this.munuList}
          initalPage={'t2'}
          renderTabBar={this._renderTabBar}
        >
          <List renderHeader={() => ''} className="my-list">
            {companyList.map((company) => {
              return <List.Item multipleLine key={company.id} onClick={() => window.goRoute(window.routeMap.companyDetail)}>
                {company.name} 
                <List.Item.Brief>{`${company.contact} ${company.contactNo}`}</List.Item.Brief>
                <List.Item.Brief>{`${company.province}省${company.city}市${company.district}区${company.street}街道${company.detailAddress}`}</List.Item.Brief>
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
