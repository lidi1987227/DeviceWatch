import { connect } from 'react-redux'
import TaskManage from '../../components/DeciveWatch/TaskManage'

const mapStateToProps = (state) => ({
  test: state.deviceWatch.test
});

const mapDispatchToProps = (state) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TaskManage)
