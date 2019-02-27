import { connect } from 'react-redux'
import ProduceCheckList from '../../components/DeciveWatch/ProduceCheckList'

const mapStateToProps = (state) => ({
    produceCheckItems: state.supervisory.produceCheckItems
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProduceCheckList)
