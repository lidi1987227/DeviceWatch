import { connect } from "react-redux";
import SupervisoryDetail from "../../components/DeciveWatch/SupervisoryDetail";

const mapStateToProps = state => ({
  codeTable: state.common.codeTable,
  sysUserList: state.common.sysUserList,
  supervisoryDetail: state.supervisory.supervisoryDetail,
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SupervisoryDetail);
