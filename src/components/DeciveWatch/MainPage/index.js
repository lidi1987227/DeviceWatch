import React from 'react';
import {NavBar,Icon,WingBlank,Carousel,Grid} from 'antd-mobile';

export default class MainPage extends React.Component{
    render() {
        let {test} = this.props;
        const data1 = Array.from(new Array(4)).map(() => ({
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
        }));
        return <div>
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => console.log('onLeftClick')}

            >智慧市场监管</NavBar>
            <WingBlank>
                <Carousel className="my-carousel"
                          vertical
                          dots={false}
                          dragging={false}
                          swiping={false}
                          autoplay
                          infinite
                          speed={5000}
                          autoplayInterval={1000}
                          resetAutoplay={false}
                >
                    {['ring', 'ruby', 'iPhone', 'iPod', 'sorry', 'tourism', 'coke', 'ticket', 'note'].map(type => (
                        <div className="v-item" key={type}>{type}</div>
                    ))}
                </Carousel>
            </WingBlank>
            <Grid data={data1}
                  columnNum={2}
                  renderItem={dataItem => (
                      <div style={{ padding: '12.5px' }}>
                          <img src={dataItem.icon} style={{ width: '75px', height: '75px' }} alt="" />
                          <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                              <span>I am title..</span>
                          </div>
                      </div>
                  )}
            />
        </div>
    }
}