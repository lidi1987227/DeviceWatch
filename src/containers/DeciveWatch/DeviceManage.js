import { connect } from 'react-redux'
import DeviceManage from '../../components/DeciveWatch/DeviceManage'

const mapStateToProps = (state) => ({
  test: state.deviceWatch.test
});

const mapDispatchToProps = (state) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DeviceManage)
