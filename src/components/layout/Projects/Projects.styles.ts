import styled from "styled-components";

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-inline: 10vw;
  color: ${({ theme }) => theme.colors.font};
  gap: 40px;
  margin-bottom: 30px;
  @media screen and (max-width: 990px) {
    align-items: center;
  }
  @media screen and (min-width: 1500px) {
    margin-inline: 18vw;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media screen and (max-width: 990px) {
    align-items: center;
  }
`;

export const Header = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin: 0;
`;

export const Text = styled.h2`
  font-size: 18px;
  font-weight: normal;
  opacity: 70%;
  margin: 0;
  max-width: 420px;
  @media screen and (max-width: 990px) {
    text-align: center;
  }
`;

export const Projects = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  @media screen and (max-width: 990px) {
    flex-direction: column;
  }
`;
