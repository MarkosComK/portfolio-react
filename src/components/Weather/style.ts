import styled from "styled-components";

interface Props {
    display: boolean,
    zIndex: number,
    isMobile: boolean
}

export const Weather = styled.div<Props>`
    display: ${props => props.display ? "grid" : "none"};
    width: ${props => props.isMobile ? `${100}vw` : `${300}px`};
    height: ${props => props.isMobile ? `${70}vh` : `${500}px`};

    margin-top:  ${props => props.isMobile ? `${40}px` : `${0}`};

    grid-template-columns: 1fr;
    grid-template-rows: 40px 1fr 40px;

    position: absolute;
    background-color: var(--dark-blue);
    color: var(--font-color);

    z-index: ${props => props.zIndex};

    /* Glass effect */
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 14px;

`
export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    height: 38px;
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    padding: 0 10px;
    white-space: nowrap;

    img{
        width: 15px;
        height: 15px;
    }
`

export const Main = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
    div img:nth-child(1){
        margin-top: 20px;
    }
    h1{
        margin-top: 15px;
    }
`

export const Cards = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 40px;

    width: 100%;

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        height: 100px;
        width: 80px;

        background-color: var(--light-blue);
        border-radius: 14px;
        /* Glass effect */
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border-radius: 14px;
        &:hover{
            background-color: rgba(29,147,235,0.6);
        }
    }
`

export const Input  = styled.div`
    form{
            display: flex;
            justify-content: center;
            align-items: center;
            input{
                position: relative;
                border: 1px solid red;
                width: 100%;
                height: 30px;
                border: none;
                background-color: var(--search-bg);
                border-radius: 4px;
                font-family: var(--body-font);
                font-size: 15px;
                font-weight: 500;
                padding: 0 20px 0 40px;
                margin: 0 10px;
                box-shadow: 0 0 0 2px rgb(134 140 160 / 2%);
                color: var(--font-color);

                &:focus{
                    outline: none;
                }
            }
            button{
                position: absolute;
                right: 25px;
            }
        }
`