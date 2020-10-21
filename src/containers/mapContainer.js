import {connect} from 'react-redux'
import Map from '../components/Map'

const mapStateToProps = (state) => ({
    center: [state.covidDetails.mapCenter.lat,state.covidDetails.mapCenter.lng],
    zoom:state.covidDetails.zoom,
    countries:state.countries.countries,
    caseType:state.covidDetails.caseType
}) 

export default connect(mapStateToProps)(Map)