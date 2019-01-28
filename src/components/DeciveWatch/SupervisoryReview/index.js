import React from 'react';
import { NavBar, Icon, WhiteSpace, Tabs } from 'antd-mobile';
import { StickyContainer, Sticky} from 'react-sticky';

export default class SupervisoryReview extends React.Component {
  constructor(props){
    super(props);
    this.munuList=[
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
      <NavBar mode="light" icon={<Icon type="left" />} onLeftClick={() => history.back()}>监督检查</NavBar>
      <div><span>条件查询</span><input/></div>
      <WhiteSpace />
    <StickyContainer>
      <Tabs tabs={this.munuList}
        initalPage={'t2'}
        renderTabBar={this._renderTabBar}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
          Content of first tab
        </div>
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
  _renderTabBar = (props)=> {
    return (<Sticky>
      {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
    </Sticky>);
  }
}
