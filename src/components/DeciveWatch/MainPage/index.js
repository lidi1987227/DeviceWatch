import React from 'react';
import { NavBar, Icon, Carousel, Grid } from 'antd-mobile';

export default class MainPage extends React.Component {
  constructor(props){
    super(props);
    this.munuList=[
      {title:'统计分析',icon: '../resource/icon/统计分析.png',route:window.routeMap.statisticlAnalysis},
      {title:'企业管理',icon: '../resource/icon/企业查询.png',route:window.routeMap.companyManage},
      {title:'设备管理',icon: '../resource/icon/设备管理.png',route:window.routeMap.deviceManage},
      {title:'任务管理',icon: '../resource/icon/任务管理.png',route:window.routeMap.checkManage},
      {title:'监督检查',icon: '../resource/icon/检查计划.png',route:window.routeMap.supervisoryReview},
      {title:'隐患管理',icon: '../resource/icon/隐患管理.png',route:'companyManage'}
    ];
    this.banner = [
      "../resource/img/blue.jpg",
      "../resource/img/blue.jpg",
    ];
  }
  render() {
    let { test } = this.props;
    return <div className="main-page">
      <NavBar mode="light" className="main-top" icon={<Icon type="left" />} onLeftClick={() => console.log('onLeftClick')}>智慧市场监管</NavBar>
      <div className="main-middle">
        <Carousel className="my-carousel"
                  dots={false}
                  dragging={false}
                  swiping={false}
                  autoplay
                  infinite
                  speed={1000}
                  autoplayInterval={3000}
                  resetAutoplay={false}
        >
          {this.banner.map((banner,index) => (
            <div className="banner-container" key={index}>
              <img src={banner} alt={index} className="banner-img"/>
            </div>
          ))}
        </Carousel>
      </div>
      <Grid data={this.munuList}
        className="main-bottom"
            columnNum={3}
            renderItem={this._renderMenuItem}
      />
    </div>
  }
  _renderMenuItem=(dataItem)=>{
    return <div style={{ padding: '12.5px' }} onClick={()=>window.goRoute(dataItem.route)}>
      <img src={dataItem.icon} style={{ width: '75px', height: '75px' }} alt="" />
      <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
        <span>{dataItem.title}</span>
      </div>
    </div>
  }
}
