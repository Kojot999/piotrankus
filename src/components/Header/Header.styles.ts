import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-inline: 10px;
  height: 60px;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.img`
  width: 40px;
  margin-right: 5px;
`;

export const Title = styled.h1`
  font-size: 25px;
  margin: 0;
  color: ${({ theme }) => theme.colors.font};
`;

export const MenuButton = styled.button`
  background: none;
  color: ${({ theme }) => theme.colors.font};
  border: none;
  font-size: 25px;
`;
