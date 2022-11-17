import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 20px 70px 0px 70px;
  @media screen and (max-width: 460px) {
    margin: 20px 30px 0px 30px;
  }
  @media screen and (max-width: 370px) {
    margin: 20px 10px 0px 10px;
  }
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

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
export const WrapperDesktop = styled.div`
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const WrapperMobile = styled.div`
  @media screen and (min-width: 1201px) {
    display: none;
  }
`;
