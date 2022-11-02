import * as S from "./NavLink.styles";

export const NavLink: React.FC<{ path: string; text: string; img: any }> = ({
  path,
  text,
  img,
}) => {
  return (
    <S.StyledNavLink key={path} to={path}>
      {text}
      <S.Image src={img} />
    </S.StyledNavLink>
  );
};
