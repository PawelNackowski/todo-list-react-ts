import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li<{ hidden?: boolean}>`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  align-items: center;
  border-bottom: solid 1px ${({ theme }) => theme.color.alto};
  padding: 10px;

  ${({ hidden }) => hidden !== undefined && hidden && css`
    display: none;
  `}
`;

export const Content = styled.span<{ done?: boolean }>`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button<{ toggleDone?: boolean; remove?: boolean }>`
  width: 30px;
  height: 30px;
  font-size: 20px;
  cursor: pointer;
  color: ${({ theme }) => theme.color.white};
  padding: 0;
  border: none;

  ${({ toggleDone }) =>
    toggleDone &&
    css`
      background-color: ${({ theme }) => theme.color.forestGreen};
      transition: 0.5s;
      
      &:hover{
        filter:brightness(115%);
      };
        
      &:active{
        filter:brightness(130%);
      `};

  ${({ remove }) =>
    remove &&
    css`
      background-color: ${({ theme }) => theme.color.crimson};
      transition: 0.5s;

      &:hover{
        filter:brightness(115%);
      };
        
      &:active{
        filter:brightness(130%);
    `}
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.black};

  &:hover {
    text-decoration: underline;
  }
`;
