import { connect } from 'react-redux'
import MainPage from '../../components/DeciveWatch/MainPage'

const mapStateToProps = (state) => ({
  test: state.deviceWatch.test
});

const mapDispatchToProps = (state) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
