import { Images } from "../../../assets";
import { useTranslation } from "../../../hooks/useTranslations";
import { NavLink } from "../../widgets";
import * as S from "./Home.styles";

export const Home = () => {
  const T = useTranslation();
  return (
    <S.HomeContainer>
      <S.TextContainer>
        <S.Header>{T.components.home.header}</S.Header>
        <S.Text>{T.components.home.text}</S.Text>
        <S.NavLinkContainer>
          <NavLink
            path="/projects"
            text={T.components.home.button}
            img={Images.arrow}
          ></NavLink>
        </S.NavLinkContainer>
      </S.TextContainer>
      <S.HomeImage src={Images.home} />
    </S.HomeContainer>
  );
};
