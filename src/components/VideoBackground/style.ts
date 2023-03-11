import styled from 'styled-components'

interface Props {
    display: boolean
}

export const Background = styled.div<Props>`
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1000;
    
    video {
    display: ${props => props.display ? "block" : "none"};
    width: 100%;
    height: 100%;
    object-fit: cover;
    }
    img{
        width: 100vw;
        height: 100vh;
        object-fit: cover;
    }
    
`