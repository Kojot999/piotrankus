import styled from "styled-components";

export const ResumeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-inline: 10vw;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  margin-bottom: 20px;
`;

export const Header = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin: 0;
  color: ${({ theme }) => theme.colors.font};
  width: 100%;
`;

export const Text = styled.h2`
  font-size: 16px;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.font};
  opacity: 70%;
`;

export const ResumeImage = styled.img`
  height: 60vh;
`;
