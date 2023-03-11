import { Background } from './style';
import img from '../TopBar/backgrounds//background-blue.jpg'

interface Props {
    display: boolean,
    background: string
}

function VideoBackground({display, background}: Props){
    return(
        <Background display={display}>
            <video width="320" height="240" loop autoPlay muted src={"https://assets.codepen.io/3364143/7btrrd.mp4"}></video>
            <div><img src={background} alt="" /></div>
        </Background>
    )
}

export default VideoBackground