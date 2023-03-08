import styled from "styled-components"

interface Props {
    display: boolean,
    zIndex: number
}

export const Calculator = styled.div<Props>`
    display: ${props => props.display ? "inline" :  "none"};
    position: absolute;

    background-color: var(--theme-bg-color);


    height: 400px;
    width: 270px;
    border-radius: 14px;
    z-index: ${props => props.zIndex};

    /* Glass effect */
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
`
export const Header = styled.header`
    display: flex;
    align-items: center;
    flex-shrink: 0;
    height: 38px;
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    padding: 0 10px;
    white-space: nowrap;
`


export const Calculus = styled.section`
    margin-top: 2rem;
	width: 100%;
	height: 5rem;
    div{
        margin: 0;
        padding-right: 1.5rem;
        color: white;
        font-size: 5rem;
        font-weight: 300;
        text-align: right;
        line-height: 0.5;
    }
    p{
        padding-right: 0.5rem;
        padding-top: 16px;
        text-align: right;
        font-size: 1.2rem;
        color: var(--font-color);
    }
`

export const Buttons = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2px;
    height: 250px;
    border-radius: 0 0 14px 14px;
    color: var(--font-color);
    button{
        background-color: #626065;
        /* spand the AC and the 0 */
        &:nth-child(1),
        &:nth-child(16){
            grid-column-start: 1;
            grid-column-end: 3;
        }
        /* change color of the [÷, x, -, +, =] buttons */
        &:nth-child(3),
        &:nth-child(7),
        &:nth-child(11),
        &:nth-child(15),
        &:nth-child(18){
            background-color: var(--yellow-btn);
        }
        /* add radius to the [0] */
        &:nth-child(16){
            border-radius: 0 0 0 14px;
        }
        /* add radius to the [=] */
        &:nth-child(18){
            border-radius: 0 0 14px 0;
        }
        &:hover{
            filter: brightness(110%);
        }
    }
`
