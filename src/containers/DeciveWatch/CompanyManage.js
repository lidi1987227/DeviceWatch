import { connect } from 'react-redux'
import CompanyManage from '../../components/DeciveWatch/CompanyManage'

const mapStateToProps = (state) => ({
  test: state.deviceWatch.test
});

const mapDispatchToProps = (state) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyManage)
