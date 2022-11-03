import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 20px 70px 0px 70px;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.img`
  width: 40px;
  margin-right: 5px;
  margin-right: 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: normal;
  margin: 0;
  color: ${({ theme }) => theme.colors.font};
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledNavLink = styled(NavLink)`
  background: none;
  color: ${({ theme }) => theme.colors.font};
  border: none;
  font-size: 25px;
  margin-inline: 10px;
  cursor: pointer;
  text-decoration: none;
  :hover {
    text-shadow: 0px 10px 30px #12c6ff;
    color: ${({ theme }) => theme.colors.primary};
  }
  &.active {
    color: ${({ theme }) => theme.colors.primary};
    text-shadow: 0px 10px 30px #12c6ff;
  }
`;

export const Git = styled.img`
  width: 18px;
  margin-inline: 20px;
`;

export const Linked = styled.img`
  width: 18px;
`;

export const Link = styled.a``;
