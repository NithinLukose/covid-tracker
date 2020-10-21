import {connect} from 'react-redux'
import Main from '../components/Main'
import {fetchCountries,setCaseType,
    fetchAllCovidDetails,fetchCountrySpecificCovidDetails} from '../actions'

const mapStateToProps = (state) => ({
    currentCountry:state.countries.currentCountry,
    details:state.covidDetails.details,
    caseType:state.covidDetails.caseType
})

const mapDispatchToProps = (dispatch) => ({
    fetchCountries: () => dispatch(fetchCountries()),
    fetchAllCovidDetails: () => dispatch(fetchAllCovidDetails()),
    changeCaseType:(caseType)=> dispatch(setCaseType(caseType)),
    fetchCountrySpecificCovidDetails: (country) => dispatch(fetchCountrySpecificCovidDetails(country))
})

export default connect(mapStateToProps,mapDispatchToProps)(Main)