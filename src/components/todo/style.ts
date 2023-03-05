import styled from "styled-components";

interface Props {
    display: boolean,
}

export const Todo = styled.div<Props>`
    display: ${props => props.display ? "grid" : "none"};
    grid-template-columns: 1fr;
    grid-template-rows: 38px 1fr 38px;
    position: absolute;
    width: 300px;
    height: 400px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--theme-bg-color);
    color: var(--font-color);
    
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
            list-style: none;
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