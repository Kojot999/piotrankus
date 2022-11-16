import { Images } from "../../assets";
import { useLanguageContext } from "../../context/useLanguageContext";

import { NavLink } from "../widgets";
import * as S from "./Footer.styles";

export const Footer = () => {
  const year = new Date().getFullYear();
  const T = useLanguageContext();
  return (
    <S.FooterContainer>
      <S.LogoContainer>
        <S.Logo src={Images.logo} />
        <S.Title>
          <p>
            piotr<strong>ankus</strong>.pl
          </p>
        </S.Title>
        <S.RightsContainer>
          <p> &copy; All rights reserved | Piotr Ankus | {year} </p>
        </S.RightsContainer>
      </S.LogoContainer>
      <S.MessageContainer>
        <NavLink
          path="/contact"
          text={T.components.footer.message}
          img={Images.message}
        ></NavLink>
      </S.MessageContainer>
    </S.FooterContainer>
  );
};
