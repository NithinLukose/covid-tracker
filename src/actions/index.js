export const REQUEST_COUNTRIES = "REQUEST_COUNTRIES"
export const RESPONSE_COUNTRIES = "RESPONSE_COUNTRIES"
export const SET_COUNTRY = "SET_COUNTRY"

export const REQUEST_COVID_DETAILS = "REQUEST_COVID_DETAILS"
export const RESPONSE_COVID_DETAILS = "RESPONSE_COVID_DETAILS"

export const SET_CASE_TYPE = "SET_CASE_TYPE"

export const REQUEST_HISTORICAL_DATA = "REQUEST_HISTORICAL_DATA"
export const RESPONSE_HISTORICAL_DATA = "RESPONSE_HISTORICAL_DATA"

const requestHistoricalData = () => ({
    type:REQUEST_HISTORICAL_DATA
})

const responseHistoricalData = (data) => ({
    type:RESPONSE_HISTORICAL_DATA,
    payload:data
})



export const setCaseType = (data) => ({
    type:SET_CASE_TYPE,
    payload:data
})


const requestCountries = () => ({
    type:REQUEST_COUNTRIES
})

const responseCountries = (data) => ({
    type:RESPONSE_COUNTRIES,
    payload:data
})

export const setCountry = (data) => ({
    type:SET_COUNTRY,
    payload:data
})

const requestCovidDetails = () => ({
    type:REQUEST_COVID_DETAILS
})

const responseCovidDetails = (data) => ({
    type:RESPONSE_COVID_DETAILS,
    payload:data
})

export const fetchAllCovidDetails = () => {
    return async dispatch => {
        dispatch(requestCovidDetails())
        let response = await fetch('https://disease.sh/v3/covid-19/all')
                        .then(res=>res.json())
        return dispatch(responseCovidDetails(response))
    }
}

export const fetchHistoricalDetails = () => {
    return async dispatch => {
        dispatch(requestHistoricalData())
        let response = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=120')
                        .then(res=>res.json())
        return dispatch(responseHistoricalData(response))
    }
}


export const fetchCountrySpecificCovidDetails = (country) => {
    //console.log(country)
    return async dispatch => {
        dispatch(requestCovidDetails())
        let response = await fetch(`https://disease.sh/v3/covid-19/countries/${country}`)
                        .then(res=>res.json())
        return dispatch(responseCovidDetails(response))
    }
}


export const fetchCountries = () => {
    return async dispatch => {
        dispatch(requestCountries)
        let response = await fetch('https://disease.sh/v3/covid-19/countries')
                        .then(res=>res.json())
        //console.log(response)
        return dispatch(responseCountries(response))
    }
} 