import React, { useEffect, useState } from 'react'
import Search from '../search/Search'

const Weather = () => {
    const[search,setSearch] = useState('');
    const [weatherData,setWeatherData] = useState(null);
    const [loading,setLoading] = useState(false);

    async function fetchWeatherdata(param) {
         setLoading(true);
        try{
           const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=aebb82f920edf4c4ae5168049820b8ef`)
           
           const data = await response.json();

           console.log(data,'data');
           if(data){
            setWeatherData(data);
            setLoading(false);
           }

        }catch(e){
          setLoading(true)
          console.log(e);
        }
    }

    const handleSearch = ()=>{
        fetchWeatherdata(search);
    }

    const getCurrentDate=()=>{
        return new Date().toLocaleDateString('en-us',{
            weekday: "long",
            month:"long",
            day:"numeric",
            year:"numeric"
        })
    }

    useEffect(()=>{
        fetchWeatherdata("Bengaluru");
    },[])
    console.log(fetchWeatherdata);
  return (
    <div>
        <Search search={search} setSearch={setSearch} handleSearch={handleSearch}/>

        {loading ?( <div>loading</div>):(
          <div>
            <div className='city-name'>
                <h2>{weatherData?.name},<span>{weatherData?.sys?.country}</span></h2>
            </div>
            <div className='date'>
                <span>{getCurrentDate()}</span>
            </div>
            <div>{weatherData?.main?.temp}</div>
            <p className='decription'>
                {weatherData && weatherData.weather && weatherData.weather[0] ? weatherData.weather[0].description: ''}
            </p>
            
            <div className='weather-info'>
                <div>
                    <div>
                        <p className='wind'>{weatherData?.wind?.speed}</p>
                        <p>Wind speed:</p>
                    </div>
                </div>
            </div>
          </div>
        )}
    </div>
  )
}

export default Weather