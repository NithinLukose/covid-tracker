import React from 'react'
import '../styles/table.css'

function Table({countries}) {

    const sortCases = (countries) => {
        return(countries.sort((a,b)=>b.cases-a.cases))
    }
    return (
        <div className="table">
            <h3>Live Cases by Country</h3>
            <div className="table__conatiner">
                <table>
                <tbody>
                {sortCases(countries).map(country=><tr key={country.name}>
                    <td>{country.name}</td>
                    <td>{country.cases}</td>
                </tr>)}
                </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table
