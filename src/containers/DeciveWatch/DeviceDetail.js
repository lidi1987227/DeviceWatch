import { connect } from 'react-redux'
import DeviceDetail from '../../components/DeciveWatch/DeviceDetail'

const mapStateToProps = (state) => ({
  test: state.deviceWatch.test
});

const mapDispatchToProps = (state) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DeviceDetail)
