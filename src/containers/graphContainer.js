import {connect} from 'react-redux'
import LineGraph from '../components/LineGraph'
import {fetchHistoricalDetails} from '../actions'

const mapStateToProps = (state) => ({
    caseType:state.covidDetails.caseType,
    details:state.covidDetails.historicalDetails
})

const mapDispatchToProps = (dispatch) => ({
    fetchdetails : () => dispatch(fetchHistoricalDetails())
})

export default connect(mapStateToProps,mapDispatchToProps)(LineGraph)