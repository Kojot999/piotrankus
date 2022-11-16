import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 5px 80px;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.img`
  width: 40px;
  margin-right: 5px;
  margin-right: 10px;
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: normal;
  margin: 0;
  color: #1a1a1a;
`;

export const RightsContainer = styled.div`
  color: #1a1a1a;
  opacity: 60%;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 10px;
  margin-left: 10px;
`;

export const MessageContainer = styled.div``;
