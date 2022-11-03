import styled from "styled-components";

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-inline: 10vw;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.font};
  opacity: 70%;
`;
export const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
