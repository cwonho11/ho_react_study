import { useState, useEffect } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";

// 1. 앱이 실행되자마자 현재 위치 기반의 날씨가 보인다.
// 2. 날시 정보에는 도시, 섭씨, 화씨, 날씨상태
// 3. 5개의 버튼(1개는 현재위치, 4개는 다른 도시)
// 4. 도시 버튼을 클릭할 때마다 도시별 날씨가 나온다.
// 5. 현재 위치 버튼을 누르면 다시 현재 위치 기반의 날씨가 나온다.
// 6. 데이터를 들고오는 동안 로딩 스피너가 돈다.

function App() {
  const [weather, setWeather] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;

      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d9070ac6d07fab60c68b0192691cb753&units=metric`;
    const response = await fetch(url);
    const data = await response.json();

    setWeather(data);
  }

  useEffect(() => {
    if(latitude == null && longitude == null) {
      getCurrentLocation();
    } else {
      getWeatherByCurrentLocation(latitude, longitude);
    }
    
  }, [latitude, longitude]);

  return (
    <div>
      <div className="container">
        <WeatherBox weather={weather} />
        <WeatherButton setLatitude={setLatitude} setLongitude={setLongitude} />
      </div>      
    </div>
  );
}

export default App;
