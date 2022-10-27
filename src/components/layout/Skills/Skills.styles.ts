import styled from "styled-components";

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-inline: 10vw;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const H1 = styled.h1`
  font-size: 70px;
  font-weight: bold;
  margin: 0;
  color: ${({ theme }) => theme.colors.font};
  width: 100%;
`;

export const H2 = styled.h2`
  font-size: 40px;
  font-weight: bold;
  margin: 0;
  color: ${({ theme }) => theme.colors.font};
  margin-left: 30px;
`;
