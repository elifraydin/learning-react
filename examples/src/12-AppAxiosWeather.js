import React from 'react'
import { usePosition } from 'use-position';
import { useState, useEffect } from 'react'
import axios from 'axios';


function AppAxiosWeather() {


  const [weather, setWeather] = useState()
  const { latitude, longitude } = usePosition()

  // console.log(latitude)
  // console.log(longitude)

  const getWeatherData = async (lat, lon) => {

    const lang=navigator.language.split("-")[0]
    console.log(lang)

    const key = process.env.REACT_APP_WEATHER_DATA
    //   console.log(key)

    try {
      const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&lang=${lang}`)
      //    console.log(data)
      setWeather(data)
    }
    catch {
      console.log("Veri Alınamadı")
    }


  }

  useEffect(() => {

    latitude && longitude && getWeatherData(latitude, longitude)
  }, [latitude, longitude])

  if (!weather) {
    return <p>Yükleniyor...</p>
  }

  return (

    <div>
      <h1>Hava Durumu</h1>
      <h3>Enlem koordinat : {latitude}</h3>
      <h3>Boylam koordinat : {longitude}</h3>
      <h3>koordinat bölgesi :{weather.name} </h3>
      <h4>Hava sıcaklığı : {Math.ceil(weather.main.temp - 273.15)}</h4>
      <h4>Durumu :{weather.weather.map(data => data.main)}</h4>
      <h4>Özelliği : {weather.weather.map(data => data.description)}</h4>
    </div>
  )
}

export default AppAxiosWeather
