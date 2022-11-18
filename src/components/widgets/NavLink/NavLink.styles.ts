import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.font};
  background: linear-gradient(358.97deg, #12c6ff -76.06%, #031cff 177.92%);
  border-radius: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  padding: 5px 20px;
  padding-right: 15px;
  text-decoration: none;
  height: 30px;
  filter: drop-shadow(0px 10px 30px rgba(18, 198, 255, 0.25));
  white-space: nowrap;
  transition: 0.3s all ease-out;
  :hover {
    transform: translateX(5px);
  }
`;

export const Image = styled.img`
  margin-left: 15px;
  height: 100%;
`;
