import * as S from "./Header.styles";
import { Images } from "../../assets/index";
import { DictionaryLanguage } from "../../types/locale";
import { useRouteDef } from "../../hooks/useRouteDef";

export const Header = ({
  setLanguage,
}: {
  setLanguage: React.Dispatch<React.SetStateAction<DictionaryLanguage>>;
}) => {
  const { ROUTES } = useRouteDef();
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
      <S.MenuContainer>
        {ROUTES.map(({ name, path }) => {
          return (
            <S.StyledNavLink key={name} end to={path}>
              {name}
            </S.StyledNavLink>
          );
        })}
        <S.Link href="https://github.com/Kojot999" target="blank">
          <S.Git src={Images.git} />
        </S.Link>
        <S.Link href="https://github.com/Kojot999" target="blank">
          <S.Linked src={Images.linked} />
        </S.Link>
      </S.MenuContainer>
    </S.HeaderContainer>
  );
};
