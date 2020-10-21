import React from 'react'
import '../styles/infobox.css'

function InfoBox({title,cases,todayCases,active,onClick}) {
    return (
        <div className={`card ${active && 'card--selected'}`}
            onClick={onClick}
        >
            <h3 className="card__title">{title}</h3>
            <p className={`card__todayCases ${title==='Recovered'?'green':'red'}`} >+{todayCases}</p>
            <h3 className="card__totalCases">{cases} Total</h3>
        </div>
    )
}

export default InfoBox
