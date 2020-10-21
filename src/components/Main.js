import React,{useEffect} from 'react'
import SelectCountry from '../containers/selectContainer'
import InfoBox from './InfoBox'
import Map from '../containers/mapContainer'
import Table from '../containers/tableContainer'
import LineGraph from '../containers/graphContainer'

function Main({currentCountry,caseType,
    fetchCountries,details,changeCaseType
    ,fetchAllCovidDetails,fetchCountrySpecificCovidDetails}) {
    
    useEffect(()=>{
        if(currentCountry === "worldwide"){
            console.log(currentCountry)
            fetchAllCovidDetails()
        }
        else{
            console.log(currentCountry)
            fetchCountrySpecificCovidDetails(currentCountry)
        }
    },[currentCountry,fetchAllCovidDetails,fetchCountrySpecificCovidDetails])

    useEffect(()=>{
        fetchCountries()
    },[fetchCountries])
    return (
        <div className="app">
        <div className="app__left">
            <div className="app__header">
                <h1>COVID 19 Tracker</h1>
                <div>
                    <SelectCountry />
                </div>
            </div>
            
            <div className="card__conatiner">
                <InfoBox title="Coronavirus Cases" onClick={()=>changeCaseType("cases")}
                 active={caseType==="cases"}
                cases={details?.cases} todayCases={details?.todayCases} />

                <InfoBox title="Recovered" onClick={()=>changeCaseType("recovered")}
                active={caseType==="recovered"}
                cases={details?.recovered} todayCases={details?.todayRecovered} />

                <InfoBox title="Deaths" onClick={()=>changeCaseType("deaths")}
                cases={details?.deaths} active={caseType==="deaths"}
                todayCases={details?.todayCases} />
            </div>
            <Map />
        </div>
        <div className="app__right">
            <Table />
            <div><LineGraph /></div>
        </div>

        </div>
    )
}

export default Main
