import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
    color: ${({ theme }) => theme.color.white};
    font-size: 15px;
    margin: 20px;
    text-decoration: none;

    &:hover{
        text-decoration: underline;
    }

    &.active{
        font-weight: bold;
        font-size: 110%;
        transition: 1s;
    }
`;

export const StyledList = styled.ul`
    display: flex;
    height: 60px;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 20px;
    margin: 0;
    background-color: ${({ theme }) => theme.color.teal};
     box-shadow: 0px 10px 5px ${({ theme }) => theme.color.alto};
`