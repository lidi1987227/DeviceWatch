import React from 'react';
import { NavBar, Icon, WhiteSpace, List, Grid } from 'antd-mobile';

export default class PrintViewRight extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { test } = this.props;
    return <div className="print-preview-left">
      <List.Item >安全监察指令书</List.Item>
    </div>
  }
}