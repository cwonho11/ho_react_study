import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities, setCity, curVariant, setCurVariant, activeIndex, setActiveIndex}) => {
   
        return (
        <div>
            <Button variant={curVariant}
                    onClick={() => {
                                setCity(""); 
                                setActiveIndex(null);
                                curVariant === "warning" ? setCurVariant("success") : setCurVariant("warning");
                            }}>Current Location</Button>{' '}
            {cities.map((item, index) => (
                <Button variant={`${index === activeIndex ? "primary" : "info"}`} 
                        key={index}
                        onClick={() => {
                            setCurVariant("warning");
                            setCity(item); 
                            setActiveIndex(index); 
                        }}>{item}</Button>
            ))}
        </div>
    );
}

export default WeatherButton;