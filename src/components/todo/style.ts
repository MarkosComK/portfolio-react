import styled from "styled-components";

interface Props {
    display: boolean,
    zIndex: number,
    isMobile: boolean
}

export const Todo = styled.div<Props>`
    display: ${props => props.display ? "grid" : "none"};
    grid-template-columns: 1fr;
    grid-template-rows: 38px 1fr 38px;
    position: absolute;
    width: ${props => props.isMobile ? `${100}vw` : `${300}px`};
    height: ${props => props.isMobile ? `${70}vh` : `${400}px`};

    margin-top: ${props => props.isMobile ? `${40}px` : `${0}`};

    
    background-color: var(--theme-bg-color);
    color: var(--font-color);
    z-index: ${props => props.zIndex};

    /* Glass effect */
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 14px;
    section{
        margin: 10px 10px;
        overflow: auto;
        height: 96%;
        li{
            display: flex;
            justify-content: space-between;
            align-items: center;

            width: 100%;
            height: 30px;
            list-style: none;

            /* Glass effect */
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);

            border-radius: 5px;
            margin-top: 3px;
            padding: 5px;
            div{
                display: flex;
                align-items: center;
                justify-content: center;
                button{
                    width: 20px;
                    height: 20px;
                    &:nth-child(2){
                        position: relative;
                        top: -1px;
                    }
                }
            }
            span{
                text-decoration: line-through;
            }
        }
        ::-webkit-scrollbar {
            width: 6px;
            border-radius: 10px;
        }
    
        ::-webkit-scrollbar-thumb {
            background: var(--scrollbar-bg);
            border-radius: 10px;
        }
    }
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

interface HProps {
    isMobile: boolean
}

export const Header = styled.header<HProps>`
    display: flex;
    align-items: center;
    flex-shrink: 0;
    height: 38px;
    width: 100%;
    border-bottom: ${props => props.isMobile ? "none" : `${1}px solid var(--border-color)`};
    padding: 0 10px;
    white-space: nowrap;
    div{
        display: ${props => props.isMobile ? `none` : `block`};
    }
`