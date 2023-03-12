import { useState, useEffect } from 'react'
import axios from 'axios'
import * as S from './style'
import * as B from '../styles/styledButtons'
import pinIcon from './icons/pin-icon.png'
import sunIcon from './icons/sun.png'
import cloudyIcon from './icons/cloudy-day.png'
import heavyShowers from './icons/heavy-showers.png'
import heavySnow from './icons/heavy-snow.png'

interface Props {
    display: boolean,
    zIndex: number,
    handleChangeDisplay: (value: number) => void,
    isMobile: boolean
}

interface Data {
    name: string,
    sys: {
        country: string,
    }
    wind: {
        speed: number
    }
    weather: [
        {
            icon: string
        }
    ]
    main: {
        temp: number,
        temp_min: number,
        temp_max: number,
        humidity: number
    }
}

function Weather({display, zIndex, handleChangeDisplay, isMobile}: Props) {
    const [city, setCity] = useState<string>('')
    const [data, setData] = useState<Data>({name: 'Patos', sys: {country: 'BR'}, wind: {speed: 0}, weather: [{icon: ''}], main: {temp: 310, temp_min: 305, temp_max: 313, humidity: 0}})
    const [icon, setIcon] = useState(sunIcon)

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=605c647f9e40a43c6d6cf6d190f6e417`


    const handleData = (e: React.FormEvent) => {
        e.preventDefault()
        e.stopPropagation()
        axios.get(url).then((response) => {
            setData(response.data)
        })
        if(data.weather[0].icon === "01d" || data.weather[0].icon === "01n"){
            setIcon(sunIcon)
        } else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n"){
            setIcon(cloudyIcon)
        }  else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n"){
            setIcon(cloudyIcon)
        }  else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n"){
            setIcon(cloudyIcon)
        }  else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n"){
            setIcon(heavyShowers)
        }  else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n"){
            setIcon(heavyShowers)
        }  else if (data.weather[0].icon === "11d" || data.weather[0].icon === "11n"){
            setIcon(heavyShowers)
        }  else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n"){
            setIcon(heavySnow)
        }  else if (data.weather[0].icon === "50d" || data.weather[0].icon === "50n"){
            setIcon(heavySnow)
        }
        setCity('')
    }

  return (
    <S.Weather isMobile={isMobile} display={display} zIndex={zIndex}>
        <S.Header>
            <div>
                <B.RButton onClick={() => {handleChangeDisplay(4)}}></B.RButton>
            </div>
            <p><img src={pinIcon} alt="" /> {data.name}, {data.sys.country}</p>
        </S.Header>
        <S.Main>
            <div>
                <img src={icon} alt="" />
            </div>
            <h1>{Math.floor(data.main.temp-273.15)} C°</h1>
            <S.Cards>
                <div>
                    <div>{Math.floor(data.main.temp_max-273.15)} C° <p>Max</p></div>
                </div>
                <div>
                    <div>{Math.floor(data.wind.speed*3.6)}<p>Km/h</p></div>
                </div>
                <div>
                    <div>{data.main.humidity}<p>Humidity</p></div>
                </div>
            </S.Cards>
        </S.Main>
        <S.Input>
            <form onSubmit={handleData}>
                <input type="text" placeholder='City or Country' maxLength={27}
                value={city}
                onChange={(e) => setCity(e.target.value)}
                />
                <button type='submit'>Go</button>
            </form>
        </S.Input>
    </S.Weather>
  )
}

export default Weather
