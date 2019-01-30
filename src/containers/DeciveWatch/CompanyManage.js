import { connect } from 'react-redux'
import CompanyManage from '../../components/DeciveWatch/CompanyManage'

const mapStateToProps = (state) => ({
  companyList: state.company.companyList
});

const mapDispatchToProps = (state) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyManage)
