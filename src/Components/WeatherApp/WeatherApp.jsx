import './WeatherApp.css';
import sreach_icon from '../Assest/search.png';
import sun_icon from '../Assest/sun.png';
import cloud_icon from '../Assest/cloud.png';
import drizzle_icon from '../Assest/Drizzle.png';
import rain_icon from '../Assest/rain.png';
import snow_cion from '../Assest/snow.png';
import wind_icon from '../Assest/wind.png';
import humidity_icon from '../Assest/humidity.png';
const WeatherApp = () => {
    let api_key ="dd94f859a0e52d6e4767fddf735f04a7";
    const Search = async () => {
        const element = document.getElementsByClassName("cityinput");
        if(element[0].value==="")
        {
            return 0;
        }
        let url =`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;


    }
}
    return(
        <div className='Contianer'>
            <div className='top-bar'>
                <input type="text" placeholder='Search' className='cityinput'/>
                <div className='search-icon' onClick={() =>{Search()}}>
                    <img src={sreach_icon} alt="" className=' w-[25px]'/>
                </div>
            </div>
            <div className='weather-image'>
                <img src={ cloud_icon} alt="" className='w-[100px] h-[100px]'/>
            </div>
            <div className='weather-temp'>24°C</div>
            <div className='weather-location'>London</div>
            <div className='data-contianer'>
                <div className='element'>
                    <img src={humidity_icon} alt=""  className='icon w-[40px]' />
                    <div className='data'>
                        <div className='himudity-precent'>64%</div>
                        <div className='text'>Humidity</div>
                    </div>
                </div>
                <div className='element'>
                    <img src={wind_icon} alt=""  className='icon w-[50px]' />
                    <div className='data'>
                        <div className='himudity-precent'>18 km/h</div>
                        <div className='text'>Wind speed</div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default WeatherApp;