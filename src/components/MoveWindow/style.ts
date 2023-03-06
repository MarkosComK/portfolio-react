import styled from "styled-components"

interface Props {
    top: number,
    left: number
}

export const MovableWindow = styled.div<Props>`
    position: absolute;
    top: ${props => `${props.top}px`};
    left: ${props => `${props.left}px`};

    height: 400px;
    width: 270px;
`

export const Header = styled.header`
    position: relative;
    cursor: pointer;
    height: 35px;
    top: 35px;
    z-index: 2;
`