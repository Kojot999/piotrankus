import * as S from "./Header.styles";
import { Images } from "../../assets/index";
import { DictionaryLanguage } from "../../types/locale";
import { NavDesktop } from "./NavDesktop/NavDesktop";
import { NavBurger } from "./NavMobile/NavBurger";

export const Header = ({
  setLanguage,
}: {
  setLanguage: React.Dispatch<React.SetStateAction<DictionaryLanguage>>;
}) => {
  return (
    <S.HeaderContainer>
      <S.LogoContainer>
        <S.Logo src={Images.logo} />
        <S.Title>
          <p>
            piotr<strong>ankus</strong>.pl
          </p>
        </S.Title>
        <S.Button onClick={() => setLanguage(DictionaryLanguage.PL)}>
          🇵🇱
        </S.Button>
        <S.Button onClick={() => setLanguage(DictionaryLanguage.EN)}>
          🇬🇧
        </S.Button>
      </S.LogoContainer>
      <S.WrapperDesktop>
        <NavDesktop />
      </S.WrapperDesktop>
      <S.WrapperMobile>
        <NavBurger />
      </S.WrapperMobile>
    </S.HeaderContainer>
  );
};
