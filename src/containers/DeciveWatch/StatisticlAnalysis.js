import { connect } from 'react-redux'
import StatisticlAnalysis from '../../components/DeciveWatch/StatisticlAnalysis'

const mapStateToProps = (state) => ({
  test: state.deviceWatch.test
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(StatisticlAnalysis)
