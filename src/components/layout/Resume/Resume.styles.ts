import styled from "styled-components";

export const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-inline: 10vw;
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
