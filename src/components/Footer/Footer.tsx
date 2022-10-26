import * as S from "./Footer.styles";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <S.FooterContainer>
      <S.EmesTransContainer>
        &copy; {year} <p>piotr</p>
      </S.EmesTransContainer>
    </S.FooterContainer>
  );
};
