import './AgeForm.css'
import { useContext, useState } from 'react'
import { convertTextToInt } from '../utils/common'
import AgeContext from "../contexts/AgeContext";


function AgeForm() {
    const [ageInputValue, setAgeInputValue] = useState("")
    const {setAge} = useContext(AgeContext);

    const handleAgeInputChange = (event : React.FormEvent) => {
        const target = event.target as HTMLInputElement
        setAgeInputValue(target.value)
        console.log(target.value)
    }

    const handleCalculateButtonClick = (event: React.FormEvent) => {
        event.preventDefault(); 
        console.log("submitting form...")
        const ageValue = convertTextToInt(ageInputValue)
        if (!Number.isNaN(ageValue)) {
            console.log("setting age as: " + ageValue)
            setAge(ageValue)
        } else {
            console.log(ageValue)
            console.error(`${ageValue} is not a number!`)
        }
    }


    return (
        <form name="age-form" className="age-form" onSubmit={handleCalculateButtonClick}>
            <label htmlFor="age-form-input" className="age-form-label">Enter your age:</label>
            <input 
            type="number" 
            id="age-input" 
            name="age-form-input" 
            className="age-form-input" 
            value = {ageInputValue}
            onChange={handleAgeInputChange}>
            </input>
            <button type="submit" className="age-form-button">Calculate</button>
        </form>
    )
}

export default AgeForm