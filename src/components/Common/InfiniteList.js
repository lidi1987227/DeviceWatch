/* eslint no-dupe-keys: 0 */
import React from "react";

import { ListView } from 'antd-mobile';

function genData(list) {
  const dataBlob = {};
  for (let i = 0; i < list.length; i++) {
    dataBlob[`${i}`] = `row-${i}`;
  }
  return dataBlob;
}

export default class InfiniteList extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource,
      isLoading: true,
    };
  }

  componentDidMount() {
    // you can scroll to the specified position
    // setTimeout(() => this.lv.scrollTo(0, 120), 800);

    // simulate initial Ajax
    let {list} = this.props;
    setTimeout(() => {
      this.rData = genData(list);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    }, 600);
  }

  // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
  componentWillReceiveProps(nextProps) {
    if (nextProps.list !== this.props.list) {
      let newData = genData(nextProps.list);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(newData),
      });
    }
  }

  render() {
    let {
      renderHeader, //列表头部
      renderFooter, //列表底部
      renderRow,    //列表item生成函数
      pageSize=20,  //列表分页大小
      list,         //列表数据
      onEndReached, //滚动到底部触发
      className,    //
    } = this.props;

    return (
      <ListView
        ref={el => this.lv = el}
        dataSource={this.state.dataSource}
        renderHeader={renderHeader?renderHeader:null}
        renderFooter={renderFooter?renderFooter:() => (<div style={{ padding: 15, textAlign: 'center' }}>
          {'Loading...'}
        </div>)}
        renderRow={renderRow}
        className={"infinite-list " + className}
        pageSize={pageSize}
        useBodyScroll
        onScroll={() => { /*console.log('scroll');*/ }}
        scrollRenderAheadDistance={500}
        onEndReached={onEndReached}
        onEndReachedThreshold={10}
      />
    );
  }
}
