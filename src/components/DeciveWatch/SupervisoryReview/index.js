import React from "react";
import { NavBar, Icon, WhiteSpace, Tabs, SearchBar, List } from "antd-mobile";
import { StickyContainer, Sticky } from "react-sticky";
import { getSupervisoryList, getSupervisoryDetail } from "../../../sdk";
import InfiniteList from "../../Common/InfiniteList";

export default class SupervisoryManage extends React.Component {
  constructor(props) {
    super(props);
    const { codeTable } = props;
    const companyTypeList = (codeTable && codeTable["企业类型"]) || [];
    const targetList = companyTypeList.map(item => ({
      title: item.code,
      companyType: item.id,
      pageIndex: 1
    }));
    this.menuList = [
      { title: "全部", companyType: 0, pageIndex: 1 },
      ...targetList
    ];
    this.isRequesting = false;
  }
  componentDidMount() {
    getSupervisoryList();
  }

  render() {
    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => history.back()}
        >
          监督检查
        </NavBar>
        <SearchBar placeholder="请输入企业名称、联系人名称" maxLength={100} />
        <WhiteSpace />
        <StickyContainer>
          <Tabs
            tabs={this.menuList}
            initalPage={0}
            onTabClick={this._onTabChange}
            renderTabBar={this._renderTabBar}
          >
            {this.menuList &&
              this.menuList.map((item, index) => this._renderTabContent(item,index))}
          </Tabs>
        </StickyContainer>
        <WhiteSpace />
      </div>
    );
  }
  _renderTabBar = props => {
    return (
      <Sticky>
        {({ style }) => (
          <div style={{ ...style, zIndex: 1 }}>
            <Tabs.DefaultTabBar {...props} />
          </div>
        )}
      </Sticky>
    );
  };
  _renderTabContent = (item,index) => {
    const type = item.companyType;
    const listName = type === 0 ? "supervisoryList" : "supervisoryList" + type;
    const supervList = (this.props[listName] && this.props[listName].list) || [];
    const maxPage = (this.props[listName] && this.props[listName].pages) || 1;
    const hasNoMore = this.props[listName] && this.props[listName].list?this.props[listName].pageNum >= maxPage:true;
    return (
      <InfiniteList
        key={index}
        className="supervisory-list"
        list={supervList}
        renderRow={this._renderRowItem}
        pageSize={20}
        hasNoMore={hasNoMore}
        onEndReached={this._getNewList(index)}
      />
    );
  };
  _renderRowItem = (rowData, sectionID, rowID) => {
    let { supervisoryList } = this.props;
    let supervisory =
      supervisoryList && supervisoryList.list && supervisoryList.list[rowID];
    return (
      <List.Item
        multipleLine
        key={supervisory.id}
        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
        onClick={() => this._openSupervisoryDetail(supervisory.id)}
      >
        {supervisory.companyName}
        <List.Item.Brief>{`${supervisory.companyContact}  ${supervisory.companyContactNo}`}</List.Item.Brief>
        <List.Item.Brief>{`${supervisory.companyAddress}`}</List.Item.Brief>
      </List.Item>
    );
  };
  _onTabChange = item => {
    getSupervisoryList({ companyTypeId: item.companyType });
  };
  _getNewList = index => () => {
    let type = this.menuList[index].companyType;
    console.log(
      "Supervisory _getNewList begin isRequesting is",
      this.isRequesting,
      "the type is ",
      type
    );
    if (!this.isRequesting) {
      this.isRequesting = true;
      this.menuList[index].pageIndex++;
      getSupervisoryList(
        { page: this.menuList[index].pageIndex, companyTypeId: type },
        true
      ).then(() => {
        console.log(
          "Supervisory _getNewList end isRequesting",
          this.isRequesting
        );
        this.isRequesting = false;
      });
    }
  };
  _openSupervisoryDetail = id => {
    getSupervisoryDetail(id).then(() => {
      window.goRoute(window.routeMap.supervisoryDetail);
    });
  };
}
