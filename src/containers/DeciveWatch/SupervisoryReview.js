import { connect } from 'react-redux'
import SupervisoryReview from '../../components/DeciveWatch/SupervisoryReview'

const mapStateToProps = (state) => ({
  test: state.deviceWatch.test
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SupervisoryReview)
