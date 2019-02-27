import React from "react";
import { List, Tag, TextareaItem } from "antd-mobile";

const Item = List.Item;
export default class useSafetyCheckTab extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { supervisorTypeList } = this.props;
    return (
      <div className="use-check-tab-left">
        <List>
          <List.Item wrap>
            类别：
            {supervisorTypeList &&
              supervisorTypeList.map(item => (
                <Tag
                  style={{ margin: 5 }}
                  key={item.id}
                  onChange={this.handleTypeTagChange(item.id)}
                >
                  {item.code}
                </Tag>
              ))}
          </List.Item>
          <List.Item>
            主要问题：
            <TextareaItem rows={3} />
          </List.Item>
        </List>
      </div>
    );
  }
  handleTypeTagChange = typeId => value => {};
}
