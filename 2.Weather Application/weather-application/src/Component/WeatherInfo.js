import React from 'react'
import '../css/weather-icons-wind.css'
import '../css/weather-icons-wind.min.css'
import '../css/weather-icons.css'
import '../css/weather-icons.min.css'
//Fonts
import '../font/weathericons-regular-webfont.eot'
import '../font/weathericons-regular-webfont.svg'
import '../font/weathericons-regular-webfont.ttf'
import '../font/weathericons-regular-webfont.woff'
import '../font/weathericons-regular-webfont.woff2'




export default function WeatherInfo(props) {

    const sunset = props.sendWeatherInfo.sunset;
    const sunsetDate = new Date(sunset);
    const sunsetHour = sunsetDate.getHours().toString().length == 1? `0${sunsetDate.getHours()}`: sunsetDate.getHours();
    const sunsetMinutes = sunsetDate.getMinutes().toString().length==1? `0${sunsetDate.getMinutes()}`: sunsetDate.getMinutes();
    const sunsetTime = `${sunsetHour}:${sunsetMinutes}`;
    // console.log(sunsetDate.getHours().length);
    // console.log(sunsetDate.getMinutes().length);
    return (
        <div className='weatherInfo'>
            <div className='weatherImg'>
                {/* <i className="wi wi-night-sleet"></i> */}
                <img src={`http://openweathermap.org/img/wn/${props.sendWeatherInfo.icon}@2x.png`}/>
            </div>
            <div className='infoTemp'>
                <div className='temp'>{props.sendWeatherInfo.temp}&deg;</div>
                <div className='condition'>
                    <p>{props.sendWeatherInfo.weather}</p>
                    <p>{props.sendWeatherInfo.cityName}, {props.sendWeatherInfo.country}</p>
                </div>
                <div className='time'>
                    {new Date().toDateString()}
                </div>
            </div>

            <div className='infoHumidSpeed'>
                <div className='sunset d-flex'>
                    <i className="wi wi-sunset"></i>
                    <div>
                        <p>{sunsetTime} PM</p>
                        <p>Sunset</p>
                    </div>
                </div>
                <div className='humidity d-flex'>
                    <i className="wi wi-humidity"></i>
                    <div>
                        <p>{props.sendWeatherInfo.humidity}</p>
                        <p>Humidity</p>
                    </div>
                </div>
                <div className='pressure d-flex'>
                    <i className="wi wi-night-sleet"></i>
                    <div>
                        <p>{props.sendWeatherInfo.pressure}</p>
                        <p>Pressure</p>
                    </div>
                </div>
                <div className='speed d-flex'>
                    <i className="wi wi-strong-wind"></i>
                    <div>
                        <p>{props.sendWeatherInfo.speed}</p>
                        <p>Speed</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
