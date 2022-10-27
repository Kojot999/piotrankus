import { Images } from "../../../assets";
import * as S from "./Home.styles";

export const Home = () => {
  return (
    <S.HomeContainer>
      <S.TextContainer>
        <S.H1>Your next</S.H1>

        <S.H2>Front-end Developer</S.H2>
        <S.StyledNavLink key="projects" to="/projects">
          check my projects <S.ProjectsArrow src={Images.arrow} />
        </S.StyledNavLink>
      </S.TextContainer>
      <S.HomeImage src={Images.home} />
    </S.HomeContainer>
  );
};
