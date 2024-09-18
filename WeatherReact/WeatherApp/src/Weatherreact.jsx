import InfoBox from "./InfoBox";
import SearchBox from "./Weather.jsx";
import { useState } from "react";


function WeatherApp () {
    let [weatherInfo,setweatherInfo] = useState(
        {
            city:"Karachi",
            temperature:24.84,
            humidity: 60,
            tempmin:24,
            tempmax:25,
            feelsLike:23.65,
            weather:"haze"
        }
    )

    let updateWeather = (result) => {
        setweatherInfo(result)
    }

    return (
        <div className="weather justify-center flex flex-col items-center w-screen">

                 <SearchBox updInfo={updateWeather} />
                 <InfoBox infoofweather={weatherInfo} />
                 
        </div>
    )
}


export default WeatherApp