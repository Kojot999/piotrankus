import * as S from "./NavBurger.style";
import { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import { NavMobile } from "./Menu/NavMobile";

export const NavBurger = () => {
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    if (showMenu === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [showMenu]);
  const closeMenu = (value: boolean) => setShowMenu(value);

  return (
    <S.BurgerContainer>
      <Hamburger toggled={showMenu} toggle={setShowMenu} color="white" />
      {showMenu && <NavMobile closeMenu={closeMenu} />}
    </S.BurgerContainer>
  );
};
