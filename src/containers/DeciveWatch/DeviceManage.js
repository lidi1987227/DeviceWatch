import { connect } from 'react-redux'
import DeviceManage from '../../components/DeciveWatch/DeviceManage'

const mapStateToProps = (state) => ({
  deviceList: state.device.deviceList
});

const mapDispatchToProps = (state) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DeviceManage)
