import {RESPONSE_COUNTRIES,REQUEST_COUNTRIES,SET_COUNTRY} from '../actions'

const countries = (state={
    isFetching:false,
    countries:[],
    currentCountry:"worldwide"
},action) => {
    //console.log(action.payload)
    switch(action.type){
        case REQUEST_COUNTRIES:
            return {...state,isFetching:true}
        case RESPONSE_COUNTRIES:
            return {...state,isFetching:false,countries:action.payload}
        case SET_COUNTRY:
            return {...state,currentCountry:action.payload}
        default:
            return state
    }
}

export default countries