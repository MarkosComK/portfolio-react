import styled from "styled-components"

export const RButton = styled.button`
    margin-right: 0.2rem;
	width: 1rem;
	height: 1rem;
	border: none;
	border-radius: 50%;
	line-height: 1;
	cursor: pointer;
    color: #000;
	background: var(--red-btn);

    &::before{
        content: "";
        margin-left: -1px;
        font-size: 1rem;
    }

    &:hover::before{
        font-size: 1rem;
        content: "×";
    }
`

export const YButton = styled(RButton)`
    background: var(--yellow-btn);
    &:hover::before{
        content: "−";
    }
`
export const GButton = styled(RButton)`
    background: var(--green-btn);
    &:hover::before{
        content: "⤢";
    }
`
