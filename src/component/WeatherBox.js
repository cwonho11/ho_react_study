import React from "react";

const WeatherBox = ({ weather }) => {
    // ({ weather }) - {} - Destructuring
    // 섭씨를 화씨로 변환
    const convertToFahrenheit = (celsiusValue) => {
        const fahrenheitValue = (celsiusValue * 9 / 5) + 32;
        return fahrenheitValue.toFixed(2);  // 소수점 둘째 자리까지만 표시
    }

    return (
        <div className="weather-box">
            <div>{weather?.name}</div>
            <h2>{weather?.main.temp}C / {convertToFahrenheit(weather?.main.temp)}F</h2>
            <h3>{weather?.weather[0].description}</h3>
        </div>
    );
}

export default WeatherBox;