import styled from "styled-components";
import { NavLink } from "react-router-dom";

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
    color: ${({ theme }) => theme.colors.hover};
  }
  &.active {
    color: ${({ theme }) => theme.colors.primary};
    text-shadow: 0px 10px 30px #12c6ff;
  }
  :nth-child(5) {
    background: linear-gradient(358.97deg, #12c6ff -76.06%, #031cff 177.92%);
    border-radius: 10px;
    padding: 1px 8px;
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

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
