import * as S from "./Header.styles";
import { Images } from "../../assets/index";
import { ROUTES } from "../../constants/routes";

export const Header = () => {
  return (
    <S.HeaderContainer>
      <S.LogoContainer>
        <S.Logo src={Images.logo} />
        <S.Title>
          <p>
            piotr<strong>ankus</strong>.pl
          </p>
        </S.Title>
      </S.LogoContainer>
      <S.MenuContainer>
        {ROUTES.map(({ name, path }) => {
          return (
            <S.StyledNavLink key={name} to={path}>
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
