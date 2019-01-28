import { connect } from 'react-redux'
import CompanyDetail from '../../components/DeciveWatch/CompanyDetail'

const mapStateToProps = (state) => ({
  test: state.deviceWatch.test
});

const mapDispatchToProps = (state) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyDetail)
