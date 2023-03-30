import { useEffect, useState } from "react";
import Style from '../styles/Header/Header.module.css';
import {Outlet} from "react-router-dom";

const Header = () => {
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(false);
    const apiWeather = async () => {
        await fetch('https://api.openweathermap.org/data/2.5/weather?q=Karagandy,kz&APPID=83c6c6096bcd52922051aa1bd675876c&units=metric')
        .then((res) => res.json())
        .then(res => {
            setData(prev => prev = res);
            setLoad(prev => prev = true);
        })

    }
    useEffect(()=>{
        apiWeather()
    },[])

    return (
        <>
        <header>
            <section>
               {load && 
                <div className={Style.weather}>
                <p className={Style.weather_city}>{data.name}</p>
                    <div className={Style.weather_block}>
                        <div>
                            <p className={Style.weather_c}>
                                {Math.round(data.main.temp)}&deg;
                            </p>
                        </div>
                        <div className={Style.weather_icon}>
                                <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt='weather'/>
                        </div>
                    </div>
                <p className={Style.weather_state}>{`Now is ${data.weather[0].description}`}</p>
            </div>
               }
            </section>
        </header>
        <Outlet />
        </>
    );
};

export default Header;