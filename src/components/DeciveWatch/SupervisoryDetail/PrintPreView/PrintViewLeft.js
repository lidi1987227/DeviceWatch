import React from 'react';
import { NavBar, Icon, WhiteSpace, List, Grid } from 'antd-mobile';

export default class PrintViewLeft extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { test } = this.props;
    return <div className="print-preview-left">
      <List.Item >现场安全监督检查记录表</List.Item>
    </div>
  }
}