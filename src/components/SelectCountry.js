import React from 'react'
import { FormControl, MenuItem,Select } from '@material-ui/core'

function SelectCountry({countries,currentCountry,setCountry}) {

    //console.log(countries)
    const handleChange = (e) => {
        //console.log(e.target.value)
        setCountry(e.target.value)
    }
    return (
        
            <FormControl>
                <Select variant="outlined"
                    value={currentCountry}
                    onChange={handleChange}
                >
                    <MenuItem value="worldwide">Worldwide</MenuItem>
                    {countries.map(country=><MenuItem value={country.value} key={country.name}>{country.name}</MenuItem>)}
                </Select>
            </FormControl>
        
    )
}

export default SelectCountry
