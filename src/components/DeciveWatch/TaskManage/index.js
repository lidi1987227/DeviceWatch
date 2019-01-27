import React from 'react';
import { NavBar, Icon, WhiteSpace, Tabs, SearchBar,List,Brief } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';

export default class TaskManage extends React.Component {
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
      <NavBar mode="light" icon={<Icon type="left" />} onLeftClick={() => history.back()}>任务管理</NavBar>
      <WhiteSpace />
      <List renderHeader={() => ''} className="my-list">
            <List.Item multipleLine extra="extra content" onClick={()=>window.goRoute(window.routeMap.taskDetail)}>
              Title <List.Item.Brief>subtitle</List.Item.Brief>
            </List.Item>
          </List>
      <WhiteSpace />
    </div>
  }
}
