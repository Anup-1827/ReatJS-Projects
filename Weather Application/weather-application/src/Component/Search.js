import React from 'react'
import { useState, useEffect } from 'react'
import WeatherInfo from './WeatherInfo'
import '../css/Search.css'

export default function Search() {

    const [searchValue, updateSearchValue] = useState('mumbai');
    const [sendWeatherInfo,StateWeatherInfo ] = useState({});

    // console.log(searchValue);
    const getWeatherInfo = async () => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=548f5feca4742e112a916e58745424e7`
            const res = await fetch(url);
            const resData = await res.json();
            // console.log(resData);
            const {main: weather, icon} = resData.weather[0];
            const {name: cityName} = resData;
            const {country, sunset} = resData.sys;
            const {temp, humidity, pressure} =resData.main;
            const {speed} = resData.wind

            const uiWeatherInfo = {weather, icon, cityName, country, sunset, temp, humidity, pressure, speed}
            // console.log(uiWeatherInfo)
            StateWeatherInfo(uiWeatherInfo)
        }
        catch(err){
            console.log(err)
        }
        
    }

    useEffect(() => {
        getWeatherInfo();
    }, [])


    return (
        <div className='wrap'>
            <div className='searchBox'>
                <input type="text" placeholder='Please Enter City'  id='inputBox' className='box' onChange={(e) => updateSearchValue(e.target.value)} />
                <button className='searchBtn' onClick={getWeatherInfo}>Search</button>
            </div>
            <WeatherInfo  sendWeatherInfo={sendWeatherInfo}/>
        </div>
    )
}
