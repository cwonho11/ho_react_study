import { useState, useEffect } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClipLoader from "react-spinners/ClipLoader";
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
  // const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const cities = ['paris', 'new york', 'tokyo', 'seoul'];
  const [activeIndex, setActiveIndex] = useState(null);   // 버튼 중 활성화된 index
  const [curVariant, setCurVariant] = useState("warning");      // current 버튼 상태 변경

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;

      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d9070ac6d07fab60c68b0192691cb753&units=metric`;
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();

      setWeather(data);
      setLoading(false);
    } catch(error){
  		console.error('api 호출 에러', error);
      setLoading(false);
    }    
  }

  const getWeatherByCity = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d9070ac6d07fab60c68b0192691cb753&units=metric`;
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();

      setWeather(data);
      setLoading(false);
    } catch (error) {
      console.error('api 호출 에러', error);
      setLoading(false);
    }
  }

  /* city 값이 변할 때마다 재렌더링되어서 click 이벤트에 영향을 미쳐 city에 대한 useEffect 주석
  useEffect(() => {
    if(city == "") {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [city]);
  */

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const clickHandler = (city) => {
    if(city == "") {
      getCurrentLocation();
    } else {
      getWeatherByCity(city);
    }
  }

  return (
    <div>
      {loading ? (
        <div className="container">
          <ClipLoader color="#f88c6b" loading={loading} size={150} />
        </div>
      ): (
        <div className="container">          
          <WeatherBox weather={weather} />
          <WeatherButton cities={cities} setCity={clickHandler} 
                         curVariant={curVariant} setCurVariant={setCurVariant}
                         activeIndex={activeIndex} setActiveIndex={setActiveIndex}
          />
        </div>
      )}    
    </div>
  );
}

export default App;
