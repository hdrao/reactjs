import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react'
import InfoBox from './InfoBox';

function SearchBox({updInfo}) {

    let [Wcity, setCity] = useState('');
    function handleInput(event) {
        setCity(event.target.value);
    }
    let apiKey = "59e3560b854177173970e23df7b01d1b"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${Wcity}&appid=${apiKey}&units=metric`;
   
    let getWeather = async () => {
       let response = await fetch(apiUrl);
       let data = await response.json();
      console.log(data);
      
       let result = {
        city:Wcity,
        temperature:data.main.temp,
        tempmin:data.main.temp_min,
        tempmax:data.main.temp_max,
        humidity:data.main.humidity,
        feelsLike:data.main.feels_like,
        weather:data.weather[0].description
       }
      updInfo(result)
      console.log(result);
      
    }

    const onsbm = (event) => {
        event.preventDefault()
        console.log(Wcity)
        setCity('');
        getWeather();
    }


    return (
        <div className="search-box  h-full mt-2 mb-6 flex-wrap  flex justify-center">
            <form onSubmit={onsbm} className='flex flex-col gap-3 justify-center items-center' action="">
                <TextField id="outlined-basic" label="City Name"
                    value={Wcity}
                    onChange={handleInput}
                    variant="outlined" />
                <Button type="submit" variant="contained">Search</Button>
            </form>
        </div>
    )
}

export default SearchBox