import React, { useState, useEffect } from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native';
import axios from 'axios'
import 'react-native-reanimated'

import * as Location from 'expo-location';
import Loading from './Components/Loading';
import Weather from './Components/Weather';

const WEATHER_API_KEY = "28400f1b8d865e440f536f0be8364bde";
const BASE_WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather?";

export default function App() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [currentWeatherDetails, setCurrentWeatherDetails] = useState(null);
  const [unitsSystem , setUnitsSystem] = useState('metric')
  useEffect(() => {
    load();
  }, [unitsSystem]);
  async function load() {
    setCurrentWeatherDetails(null)
    setCurrentWeather(null)
    setErrorMessage(null)
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status != "granted") {
        setErrorMessage("Access is needed to run the app");
        return;
      }
      const location = await Location.getCurrentPositionAsync();

      const { latitude, longitude } = location.coords;
      const weatherUrl = `${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&units=${unitsSystem}&appid=${WEATHER_API_KEY}`;
      const response = await fetch(weatherUrl)
      const result = await response.json()
      

      if(response.ok){
       setCurrentWeather(result.main.temp)
       setCurrentWeatherDetails(result)
      }
      else {
        setErrorMessage(result.message)
      }

    } catch (error) {
      setErrorMessage(error.message)
    }


  }
    //const  {main : temp} = currentWeather
    return (
        currentWeatherDetails ? <Weather data={currentWeatherDetails} condition={currentWeatherDetails.weather[0].main}/> : <Loading/>
    );
}