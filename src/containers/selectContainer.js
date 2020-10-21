import {connect} from 'react-redux'
import SelectCountry from '../components/SelectCountry'
import {setCountry} from '../actions'

const mapStateToProps = (state) => ({

    countries: state.countries.countries.map(country=>({
        name:country.country,
        value:country.countryInfo.iso2,
        id:country.countryInfo._id
    })),
    currentCountry:state.countries.currentCountry

})

const mapDispatchToProps = (dispatch) => ({
    setCountry: (data) => dispatch(setCountry(data)) 
})
export default connect(mapStateToProps,mapDispatchToProps)(SelectCountry)