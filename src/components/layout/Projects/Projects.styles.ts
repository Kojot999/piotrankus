import styled from "styled-components";

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-inline: 10vw;
  color: ${({ theme }) => theme.colors.font};
  gap: 40px;
  margin-bottom: 30px;
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
  font-weight: normal;
  opacity: 70%;
  margin: 0;
  max-width: 420px;
`;

export const Projects = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;
