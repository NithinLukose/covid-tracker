import {REQUEST_COVID_DETAILS,
    RESPONSE_COVID_DETAILS,
    REQUEST_HISTORICAL_DATA,
    RESPONSE_HISTORICAL_DATA,
    SET_CASE_TYPE} from '../actions'

const covidDetails = (state={
    details:{},
    isFetching:false,
    caseType:'cases',
    historicalDetails:{},
    mapCenter:{ lat: 34.80746, lng: -40.4796 },
    zoom:3
},action) => {
    switch(action.type){
        case REQUEST_COVID_DETAILS:
            return {...state,isFetching:true}
        case RESPONSE_COVID_DETAILS:
            let center = state.mapCenter
            
            if(action.payload.countryInfo){
                center.lat = action.payload.countryInfo.lat
                center.lng = action.payload.countryInfo.long
            }
            return {...state,isFetching:false,details:action.payload,
                mapCenter:{...center},zoom:3
            }
        case SET_CASE_TYPE:
            return {...state,caseType:action.payload}
        case REQUEST_HISTORICAL_DATA:
            return {...state,isFetching:true}
        case RESPONSE_HISTORICAL_DATA:
            return {...state,isFetching:false,historicalDetails:action.payload}
        default:
            return state
    }
} 

export default covidDetails