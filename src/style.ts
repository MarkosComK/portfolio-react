import styled from "styled-components";

export const SmallDevices = styled.div`
    display: none;
    position: absolute;
    top: 50%;
    color: white;
    font-size: 3em;
    @media (max-width: 768px) {
        display: block;
    }
`