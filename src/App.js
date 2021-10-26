import React,{ useState } from 'react';

import { fetchWeather} from './api/fetchWeather';
import './App.css'


const App = () => {

  const [city_query, setQuery] = useState('');
  const [weather, setWeather] = useState('');
  const search = async (e) => {

    if(e.key === 'Enter'){
      const data = await fetchWeather(city_query);


      setWeather(data);
      setQuery('');  // to reset the input field after we search the entered city
    }
  }

  return (
    <div className="main-container">
      {/* the input field that we are gonna use to accept city names from the user  */}
      <input 
        type = "text"
        className = "search"
        placeholder = "search"
        value = {city_query}
        onChange = {(e)=> setQuery(e.target.value)}
        onKeyPress = {search}
      />
      {/* here we check if weather.main exist and run the code in the bracket if it exists
      if it doesn't exist it will return nothing */}

      {weather.main && (
        <div className = "city"> 
          <h2 className = "city-name">
            <span> {weather.name} </span>
            <sup> { weather.sys.country } </sup>
          </h2>
          <div className = "city-temp"> 
            {Math.round(weather.main.temp)}
            <sup> &deg;C </sup>
          </div>
          <div className = "info">
            <img className = "city-icon" src = {`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png` } alt={weather.weather[0].description}/>
          </div>
          <p>
            {weather.weather[0].description}
          </p>
        </div>

      )}
    </div>
  );
}

export default App;
