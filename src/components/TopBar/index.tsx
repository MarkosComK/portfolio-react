import { useState, useEffect } from 'react'
import * as S from './style'
import kIcon from './icons/favicon.png'
import profileIcon from './icons/profile-icon.png'
import batteryIcon from './icons/battery-icon.png'
import bgBlue from './backgrounds/background-blue-button.jpg'
import bgBrown from './backgrounds/background-brown-button.jpg'
import bgGreen from './backgrounds/background-green-button.jpg'
import bgOrange from './backgrounds/background-orange-button.jpg'
import bgRed from './backgrounds/background-red-button.jpg'
import bgMain from './backgrounds/background-main-button.jpg'
import bgBlueFS from './backgrounds/background-blue.jpg'
import bgBrownFS from './backgrounds/background-brown.jpg'
import bgGreenFS from './backgrounds/background-green.jpg'
import bgOrangeFS from './backgrounds/background-orange.jpg'
import bgRedFS from './backgrounds/background-red.jpg'
import bgMainFS from './backgrounds/background-main.jpg'

interface Props {
    handleBgChange: (value: string) => void
}

function TopBar({handleBgChange}: Props) {
    const date = new Date
    const [ hours, setHours ] = useState(date.getHours())
    const [ minutes, setMinutes ] = useState(date.getMinutes())
    const [dropDisplay, setDropDisplay] = useState(false)
    const [settingsDisplay, setSettingsDisplay] = useState(false)

    // display real time user Clock on the screen
    useEffect(() => {
        if (hours == 24){
            setHours(0)
        }
        const intervalId = setInterval(tick, 60000)
        return () => clearInterval(intervalId)

        function tick(){
            if(minutes < 59){
                setMinutes(minutes+1)
            } else {
                setMinutes(0)
                setHours(hours+1)
            }
        }
    }, [minutes])


    const handleChangeDisplay = () => {
        setDropDisplay(!dropDisplay)
    }

    const handleSettingsDisplay = () => {
        setSettingsDisplay(!settingsDisplay)
    }

  return (
    <S.TopBar display={dropDisplay} settingsDisplay={settingsDisplay}>
        <ul>
            <li><S.kIcon src={kIcon} alt="" /></li>
            <li onClick={handleSettingsDisplay}>Settings
                <div onMouseLeave={handleSettingsDisplay}>
                    <header>Change Background</header>
                    <main>
                        <img src={bgBlue} onClick={() => handleBgChange(bgBlueFS)} alt="" />
                        <img src={bgBrown} onClick={() => handleBgChange(bgBrownFS)} alt="" />
                        <img src={bgGreen} onClick={() => handleBgChange(bgGreenFS)} alt="" />
                        <img src={bgOrange} onClick={() => handleBgChange(bgOrangeFS)} alt="" />
                        <img src={bgRed} onClick={() => handleBgChange(bgRedFS)} alt="" />
                        <img src={bgMain} onClick={() => handleBgChange(bgMainFS)} alt="" />
                    </main>
                </div>
            </li>
            
        </ul>
        <ul>
            <li>
                <img src={profileIcon} onClick={handleChangeDisplay}/>
            </li>
            <div onMouseLeave={handleChangeDisplay}>
                <a target='_blank' href='https://www.linkedin.com/in/markos-soares/'>Linkedin</a>
                <a target='_blank' href='https://github.com/MarkosComK'>Github</a>
                <a target='_blank' href='https://www.instagram.com/markoscomk/?hl=en'>Instagram</a>
            </div>
            <li>
                <img src={batteryIcon} title="100%" />
            </li>
            <S.Hours>{hours < 10 ? `0${hours}` : hours} : {minutes < 10 ? `0${minutes}` : minutes}</S.Hours>
        </ul>
    </S.TopBar>
  )
}

export default TopBar
