import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities, setCity}) => {
    const [buttonVariant, setButtonVariant] = useState(
        Array(cities.length).fill("info")    
    );
    const [changeVariant, setChangeVariant] = useState("info");

    const button_toggle = (index) => {
        console.log("index", index);
        
        // 클릭하면 버튼 variant 변경(info -> primary)
        setChangeVariant(changeVariant === "info" ? "primary" : "info");
    }

    return (
        <div>
            <Button variant="warning" onClick={() => setCity("")}>Current Location</Button>{' '}
            {cities.map((item, index) => (
                <Button variant={changeVariant} key={index} 
                    onClick={() => {setCity(item); button_toggle(index); }}>{item}</Button>
            ))}
        </div>
    );
}

export default WeatherButton;