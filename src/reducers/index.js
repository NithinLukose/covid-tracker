import {combineReducers} from 'redux'
import countries from './countries'
import covidDetails from './covidDetails'

export default combineReducers({
    countries,
    covidDetails
})
