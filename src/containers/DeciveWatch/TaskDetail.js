import { connect } from 'react-redux'
import TaskDetail from '../../components/DeciveWatch/TaskDetail'

const mapStateToProps = (state) => ({
  test: state.deviceWatch.test
});

const mapDispatchToProps = (state) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetail)
