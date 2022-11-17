import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 10vw;
  background-color: white;
  width: 100%;
  height: 100%;
  z-index: 1;
  transition: 2s;
`;

export const StyledNavLink = styled(NavLink)`
  background: none;
  color: ${({ theme }) => theme.colors.menu};
  border: none;
  font-size: 25px;
  margin-right: 10vw;
  margin-bottom: 10px;
  cursor: pointer;
  text-decoration: none;
  :hover {
    text-shadow: 0px 10px 30px #12c6ff;
    color: ${({ theme }) => theme.colors.hover};
  }
  &.active {
    color: ${({ theme }) => theme.colors.primary};
    text-shadow: 0px 10px 30px #12c6ff;
  }
`;

export const Git = styled.img`
  width: 18px;
  margin-inline: 10px;
`;

export const Wrapper = styled.div`
  display: flex;
  margin-right: 10vw;
  margin-top: 30px;
`;

export const Linked = styled.img`
  width: 18px;
  margin-inline: 10px;
`;

export const Link = styled.a``;
