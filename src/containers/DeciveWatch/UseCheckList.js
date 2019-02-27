import { connect } from 'react-redux'
import UseCheckList from '../../components/DeciveWatch/UseCheckList'

const mapStateToProps = (state) => ({
    codeTable: state.common.codeTable,
    usedCheckItems: state.supervisory.usedCheckItems
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(UseCheckList)
