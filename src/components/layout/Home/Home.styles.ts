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

export const H1 = styled.h1`
  font-size: 70px;
  font-weight: bold;
  margin: 0;
  color: ${({ theme }) => theme.colors.font};
  width: 100%;
`;

export const H2 = styled.h2`
  font-size: 40px;
  font-weight: bold;
  margin: 0;
  color: ${({ theme }) => theme.colors.font};
  margin-left: 30px;
`;

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.font};
  background: linear-gradient(358.97deg, #12c6ff -76.06%, #031cff 177.92%);
  border-radius: 1000px;
  display: flex;
  align-items: center;
  font-size: 18px;
  padding: 2px 10px;
  text-decoration: none;
  margin-top: 40px;
  margin-left: 250px;
`;

export const ProjectsArrow = styled.img`
  margin-left: 20px;
  padding-top: 1px;
  height: 26px;
  width: 26px;
`;

export const HomeImage = styled.img`
  height: 60vh;
`;
