import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.font};
  background: linear-gradient(358.97deg, #12c6ff -76.06%, #031cff 177.92%);
  border-radius: 1000px;
  display: flex;
  font-size: 15px;
  padding: 5px 15px;
  text-decoration: none;
  filter: drop-shadow(0px 10px 30px rgba(18, 198, 255, 0.25));
  white-space: nowrap;
`;

export const Image = styled.img`
  margin-left: 20px;
  height: 20px;
  width: 20px;
`;
