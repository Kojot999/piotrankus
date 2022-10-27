import { Images } from "../../assets";
import * as S from "./Footer.styles";

export const Footer = () => {
  const year = new Date().getFullYear();
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
        <S.StyledNavLink key="contact" to="/contact">
          Send message <S.MessageArrow src={Images.message} />
        </S.StyledNavLink>
      </S.MessageContainer>
    </S.FooterContainer>
  );
};
