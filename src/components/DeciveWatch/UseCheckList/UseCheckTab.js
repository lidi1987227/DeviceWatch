import React from 'react';
import { NavBar, Icon, WhiteSpace, Tabs } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import UseSafetyCheckTab from "./UseSafetyCheckTab";
import UseCheckRecordTab from "./UseCheckRecordTab";

export default class CompanyManage extends React.Component {
  constructor(props) {
    super(props);
    this.munuList = [
      { title: '现场安全监督检查项目表' },
      { title: '现场监督检查记录表' },
    ];
  }
  render() {
    let { usedCheckItems, checkResultList, supervisorTypeList } = this.props;
    return <div>
      <StickyContainer>
        <Tabs tabs={this.munuList}
          initalPage={'t2'}
          renderTabBar={this._renderTabBar}
        >
          <UseSafetyCheckTab usedCheckItems={usedCheckItems} checkResultList={checkResultList} />
          <UseCheckRecordTab supervisorTypeList={supervisorTypeList} />
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
