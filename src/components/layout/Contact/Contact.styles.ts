import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  margin-inline: 10vw;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.font};
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
  width: 100%;
`;

export const Text = styled.h2`
  font-size: 18px;
  opacity: 70%;
  display: flex;
  font-weight: normal;
  margin: 0;
  max-width: 420px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  gap: 5px;
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
`;
