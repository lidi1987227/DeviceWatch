import React from 'react';
import { Icon, WhiteSpace,List,Picker } from 'antd-mobile';

const Item = List.Item;
export default class useSafetyCheckTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkList: []
    }
  }

  componentWillReceiveProps(props){
    const { usedCheckItems } = props;
    if(usedCheckItems && usedCheckItems.length > 0){
      this.setState({
        checkList: usedCheckItems
      });
    }
  }

  render() {
    const { usedCheckItems, checkResultList } = this.props;
    const usedSafetyCheckList = usedCheckItems && usedCheckItems.filter(item=>item.categoryId === 1) || [];
    const deviceCheckList = usedCheckItems && usedCheckItems.filter(item=>item.categoryId !== 1) || [];
    const targetCheckResultList = checkResultList.map(item=>({label: <div key={item.id}>{item.code}</div>, value: item.id}));
    return <div className="use-check-tab-left">
      <List renderHeader={() => '使用单位安全管理情况监察项目'} className="my-list">
        {usedSafetyCheckList.map(checkItem=>{
          return <Picker
            key={checkItem.contentId}
            data={targetCheckResultList}
            cols={1}
            onChange={this._checkSelectValue(checkItem.contentId)}
            value={checkItem.selectValue}
          >
            <Item key={checkItem.contentId} wrap>
              {`${checkItem.number}.${checkItem.contentDesc}`}
            </Item>
          </Picker>
        })}
      </List>
      <List renderHeader={() => '设备使用情况检查项目'} className="my-list">
        {deviceCheckList.map((checkItem,index)=>{
          return <Picker
            key={checkItem.contentId}
            data={targetCheckResultList}
            cols={1}
            onChange={this._checkSelectValue(checkItem.contentId)}
            value={checkItem.selectValue}
          >
            <Item key={checkItem.contentId} wrap>
              {`${checkItem.number}.${checkItem.contentDesc}`}
            </Item>
          </Picker>
        })}
      </List>
    </div>
  }
  _checkSelectValue = contentId => value => {
    const { checkList } = this.state;
    const index = checkList.findIndex(item=>item.contentId === contentId);
    if(index > -1){
      checkList[index].selectValue = value;
    }
    this.setState(
      checkList
    );
  }
}
