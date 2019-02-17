import React from 'react';
import { Icon, WhiteSpace,List,Picker } from 'antd-mobile';

let Item = List.Item;
export default class CompanyManage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkList: [
        { title: "是否设置安全管理机构或配备专职管理人员", value: "test1", selectValue: ["0"] },
        { title: "是否设置安全管理机构或配备专职管理人员", value: "test2", selectValue: ["1"] },
        { title: "是否设置安全管理机构或配备专职管理人员", value: "test3", selectValue: ["1"] },
        { title: "是否设置安全管理机构或配备专职管理人员", value: "test4", selectValue: ["2"] },
        { title: "是否设置安全管理机构或配备专职管理人员", value: "test5", selectValue: ["1"] },
        { title: "是否设置安全管理机构或配备专职管理人员", value: "test6", selectValue: ["1"] },
        { title: "是否设置安全管理机构或配备专职管理人员", value: "test7", selectValue: ["1"] },
        { title: "是否设置安全管理机构或配备专职管理人员", value: "test8", selectValue: ["1"] },
        { title: "是否设置安全管理机构或配备专职管理人员", value: "test9", selectValue: ["1"] },
        { title: "是否设置安全管理机构或配备专职管理人员", value: "test10", selectValue: ["1"] },
        { title: "是否设置安全管理机构或配备专职管理人员", value: "test11", selectValue: ["1"] },
        { title: "是否设置安全管理机构或配备专职管理人员", value: "test12", selectValue: ["1"] },
        { title: "是否设置安全管理机构或配备专职管理人员", value: "test13", selectValue: ["1"] },
        { title: "是否设置安全管理机构或配备专职管理人员", value: "test14", selectValue: ["1"] },
        { title: "是否设置安全管理机构或配备专职管理人员", value: "test15", selectValue: ["1"] },
        { title: "是否设置安全管理机构或配备专职管理人员", value: "test16", selectValue: ["1"] },
        { title: "是否设置安全管理机构或配备专职管理人员", value: "test17", selectValue: ["1"] },
        { title: "是否设置安全管理机构或配备专职管理人员", value: "test18", selectValue: ["1"] },
      ],
      selectList: [
        { label: <div key="2013">符合</div>, value: '0', },
        { label: <div key="2014">不符合</div>, value: '1', },
        { label: <div key="2015">缺项</div>, value: '2', },
      ]
    }
  }
  render() {
    let { companyDetail } = this.props;
    return <div className="use-check-tab-left">
      {this.state.checkList.map((checkItem,index)=>{
        return <Picker
        data={this.state.selectList}
        cols={1}
        onChange={this._checkSelectValue(index)}
        value={checkItem.selectValue}
      >
        <Item key={checkItem.value}>
          {`${index+1}.${checkItem.title}`}
        </Item>
      </Picker>
    })}
    </div>
  }
  _checkSelectValue = (index) => (value) => {
    let {checkList} = this.state;
    checkList[index].selectValue = value;
    this.setState(
      checkList
    );
  }
}
