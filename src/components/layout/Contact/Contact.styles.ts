import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  margin-inline: 13vw;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.font};
  @media screen and (max-width: 920px) {
    display: flex;
    flex-direction: column-reverse;
    margin-bottom: 20px;
    @media screen and (max-width: 920px) {
      align-items: center;
      text-align: center;
    }
  }
  @media screen and (min-width: 1500px) {
    margin-inline: 18vw;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Header = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin: 0;
`;

export const Text = styled.h2`
  font-size: 18px;
  opacity: 70%;
  display: flex;
  font-weight: normal;
  margin: 0;
  max-width: 420px;
  @media screen and (max-width: 360px) {
    font-size: 16px;
  }
`;

export const TextMail = styled.h2`
  font-size: 18px;
  opacity: 70%;
  font-weight: normal;
  margin: 0;
  white-space: nowrap;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  gap: 5px;
  @media screen and (max-width: 920px) {
    align-items: center;
    text-align: center;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  margin: 0;
`;

export const ImgMail = styled.img`
  width: 22px;
  margin-inline: 10px;
`;

export const ImgArrow = styled.img`
  width: 22px;
  margin-inline: 10px;
  padding-top: 10px;
`;

export const Email = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

export const HireImage = styled.img`
  height: 60vh;
  @media screen and (max-width: 1200px) {
    height: 45vh;
  }
  @media screen and (max-width: 380px) {
    height: 40vh;
  }
`;
