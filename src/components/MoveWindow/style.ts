import styled from "styled-components"

interface Props {
    top: number,
    left: number,
}
interface Area {
    width: number,
    zIndex: number
}
export const MovableWindow = styled.div<Props>`
    position: absolute;
    top: ${props => `${props.top}px`};
    left: ${props => `${props.left}px`};


    `

export const Header = styled.header<Area>`
    width: ${props => `${props.width}px`};
    border: 1px solid red;
    position: relative;
    cursor: pointer;
    height: 35px;
    top: 35px;
    left: 64px;
    z-index: ${props => props.zIndex+1};
`