import * as S from "./NavMobile.styles";
import { Images } from "../../../../assets";
import { useRouteDef } from "../../../../hooks";

export const NavMobile = ({ closeMenu }: any) => {
  const { ROUTES } = useRouteDef();
  return (
    <S.MenuContainer>
      {ROUTES.map(({ name, path }) => {
        return (
          <S.StyledNavLink key={name} end to={path} onClick={closeMenu}>
            {name}
          </S.StyledNavLink>
        );
      })}
      <S.Wrapper>
        <S.Link href="https://github.com/Kojot999" target="blank">
          <S.Git src={Images.gitBlack} />
        </S.Link>
        <S.Link href="https://github.com/Kojot999" target="blank">
          <S.Linked src={Images.linkedBlack} />
        </S.Link>
      </S.Wrapper>
    </S.MenuContainer>
  );
};
