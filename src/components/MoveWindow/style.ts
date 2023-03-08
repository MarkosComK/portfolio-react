import styled from "styled-components"

interface Props {
    top: number,
    left: number,
}
interface Area {
    width: number
}
export const MovableWindow = styled.div<Props>`
    position: absolute;
    top: ${props => `${props.top}px`};
    left: ${props => `${props.left}px`};

    height: 400px;
    width: 270px;
    `

export const Header = styled.header<Area>`
    width: ${props => `${props.width}px`};

    position: relative;
    cursor: pointer;
    height: 35px;
    top: 35px;
    left: 64px;
    z-index: 2;
`