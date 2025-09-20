import './WeatherApp.css';
import sreach_icon from '../Assest/search.png';
import sun_icon from '../Assest/sun.png';
import cloud_icon from '../Assest/cloud.png';
import drizzle_icon from '../Assest/Drizzle.png';
import rain_icon from '../Assest/rain.png';
import snow_cion from '../Assest/snow.png';
import wind_icon from '../Assest/wind.png';
import humidity from '../Assest/humidity.png';
const WeatherApp = () => {
    return(
        <div className='Contianer'>
            <div className='top-bar'>
                <input type="text" placeholder='Search' className='cityinput'/>
                <div className='search-icon'>
                    <img src={sreach_icon} alt="" className=' w-[25px]'/>
                </div>
            </div>
            <div className='weather-image'>
                <img src={ cloud_icon} alt="" className='w-[100px] h-[100px]'/>
            </div>
            <div className='weather-temp'>24°C</div>
            <div className='weather-location'>London</div>

        </div>

    )
}

export default WeatherApp;