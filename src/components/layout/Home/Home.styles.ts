import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-inline: 13vw;
  gap: 10px;
  @media screen and (max-width: 920px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 920px) {
    margin-top: 20px;
  }
`;

export const Header = styled.h1`
  font-size: 70px;
  font-weight: bold;
  margin: 0;
  color: ${({ theme }) => theme.colors.font};

  @media screen and (max-width: 1200px) {
    font-size: 55px;
  }
  @media screen and (max-width: 380px) {
    font-size: 40px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const HeaderGradient = styled.h1`
  font-size: 70px;
  font-weight: bold;
  margin: 0;
  color: ${({ theme }) => theme.colors.gradient};
  @media screen and (max-width: 1200px) {
    font-size: 55px;
  }
  @media screen and (max-width: 380px) {
    font-size: 40px;
  }
`;

export const Text = styled.h2`
  font-size: 40px;
  font-weight: bold;
  margin: 0;
  color: ${({ theme }) => theme.colors.font};
  margin-left: 30px;
  white-space: nowrap;
  @media screen and (max-width: 1200px) {
    font-size: 25px;
  }
  @media screen and (max-width: 920px) {
    margin-left: 50px;
  }
  @media screen and (max-width: 380px) {
    font-size: 20px;
  }
`;

export const NavLinkContainer = styled.div`
  margin-top: 30px;
  margin-left: 250px;
  @media screen and (max-width: 1200px) {
    margin-left: 150px;
  }
  @media screen and (max-width: 920px) {
    margin-left: 0px;
  }
`;

export const HomeImage = styled.img`
  height: 60vh;
  @media screen and (max-width: 1200px) {
    height: 50vh;
  }
  @media screen and (max-width: 380px) {
    height: 40vh;
  }
`;
