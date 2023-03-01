import styled from "styled-components";

interface Props {
    display: boolean
}

export const Todo = styled.div<Props>`
    display: ${props => props.display ? "grid" : "none"};
    grid-template-columns: 1fr;
    grid-template-rows: 38px 1fr 38px;
    position: absolute;
    width: 300px;
    height: 400px;
    border: 1px solid red;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    /* Glass effect */
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    input{
        border: 1px solid red;
        width: 90%;
        height: 100%;
        border: none;
        background-color: var(--search-bg);
        border-radius: 4px;
        font-family: var(--body-font);
        font-size: 15px;
        font-weight: 500;
        padding: 0 20px 0 40px;
        box-shadow: 0 0 0 2px rgb(134 140 160 / 2%);
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