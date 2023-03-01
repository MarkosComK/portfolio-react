import styled from "styled-components";

interface Props {
    display: boolean
}

export const Todo = styled.div<Props>`
    display: ${props => props.display ? "block" : "none"};
    width: 400px;
    height: 600px;
    border: 1px solid red;

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