import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 20px;
    
    @media (max-width: ${({theme}) => theme.breakpoint.mobile}px) {
    grid-template-columns: 1fr;
    }
`;

export const Button = styled.button`
    background-color: ${({theme}) => theme.color.teal};
    cursor: pointer;  
    color: ${({theme}) => theme.color.white};
    border: none;
    padding: 10px;
    transition: 0.5s;

    &:hover {
        filter:brightness(120%);
        transform:scale(1.1);
    }

    &:active {
        filter:brightness(135%);
    }
`;