import { Background } from './style';

function VideoBackground(){
    return(
        <Background>
            <video width="320" height="240" loop autoPlay muted src={"https://assets.codepen.io/3364143/7btrrd.mp4"}></video>
        </Background>
    )
}

export default VideoBackground