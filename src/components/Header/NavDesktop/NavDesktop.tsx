import * as S from "./NavDeskTop.style";
import { Images } from "../../../assets";
import { useRouteDef } from "../../../hooks";

export const NavDesktop = () => {
  const { ROUTES } = useRouteDef();
  return (
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
      <S.Link
        href="https://www.linkedin.com/in/piotr-ankus-2b5731257/"
        target="blank"
      >
        <S.Linked src={Images.linked} />
      </S.Link>
    </S.MenuContainer>
  );
};
