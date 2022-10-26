import * as S from "./Header.styles";
import { Images } from "../../assets/index";
import { MenuIdEnum } from "../../constants/index";

export const Header = () => {
  const NavigationItems = [
    {
      text: "home",
      to: MenuIdEnum.intro,
    },
    {
      text: "projects",
      to: MenuIdEnum.projects,
    },
    {
      text: "skills",
      to: MenuIdEnum.skills,
    },
    {
      text: "resume",
      to: MenuIdEnum.resume,
    },
    {
      text: "hire me",
      to: MenuIdEnum.contact,
    },
  ];

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
        {NavigationItems.map(({ to, text }) => {
          return <S.MenuButton key={to}>{text}</S.MenuButton>;
        })}
        <S.MenuButton />
      </S.MenuContainer>
    </S.HeaderContainer>
  );
};
