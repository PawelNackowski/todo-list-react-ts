import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Button = styled.button`
    background: transparent;
    color: ${({ theme }) => theme.color.teal};
    border: none;
    cursor: pointer;
    outline: inherit;
    transition: 0.5s;
    margin-left: 20px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        flex-basis: 100%;
        margin: 10px;
    }

    &:hover{
        filter:brightness(110%);
    }

    &:active{
        filter:brightness(130%);
    }

    &:disabled{
        color: ${({ theme }) => theme.color.silver};
        cursor: default;
        pointer-events: none;
    }
    `;