import { connect } from 'react-redux'
import MainPage from '../../components/DeciveWatch/MainPage'

const mapStateToProps = (state) => ({
  codeTable: state.common.codeTable
});

const mapDispatchToProps = (state) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
