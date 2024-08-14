import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({setLatitude, setLongitude}) => {

    const changeLocation = (latitude, longitude) => {
        setLatitude(latitude);
        setLongitude(longitude);
    }

    return (
        <div>
            <Button variant="warning" onClick={() => { changeLocation(); }}>Current Location</Button>{' '}
            <Button variant="primary" onClick={() => { changeLocation(48.8534, 2.3488); }}>Paris</Button>{' '}
            <Button variant="info" onClick={() => { changeLocation(43.0004, -75.4999); }}>NewYork</Button>{' '}
        </div>
    );
}

export default WeatherButton;