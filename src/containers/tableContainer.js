import {connect} from 'react-redux'
import Table from '../components/Table'

const mapStatToProps = (state) => ({
    countries: state.countries.countries.map(country=>({
        name:country.country,
        cases:country.cases
    }))
})

export default connect(mapStatToProps)(Table)