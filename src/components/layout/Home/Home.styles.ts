import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-inline: 10vw;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.h1`
  font-size: 70px;
  font-weight: bold;
  margin: 0;
  color: ${({ theme }) => theme.colors.font};
  width: 100%;
`;

export const Text = styled.h2`
  font-size: 40px;
  font-weight: bold;
  margin: 0;
  color: ${({ theme }) => theme.colors.font};
  margin-left: 30px;
`;

export const NavLinkContainer = styled.div`
  margin-top: 30px;
  margin-left: 250px;
`;

export const HomeImage = styled.img`
  height: 60vh;
`;
