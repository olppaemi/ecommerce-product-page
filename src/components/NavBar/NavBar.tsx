import Link from "next/link";
import Logo from "components/icons/Logo";
import * as S from "./styles";
import { useState } from "react";
import Menu from "components/icons/Menu";
import Cart from "components/icons/Cart";
import NavList from "./NavList";
import Center from "components/common/Center";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const openMenu = () => setShowMenu(true);
  const closeMenu = () => setShowMenu(false);

  return (
    <Center>
      <S.NavBar>
        <S.Nav>
          <S.MenuIcon onClick={openMenu}>
            <Menu />
          </S.MenuIcon>

          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
          <NavList showMenu={showMenu} closeMenu={closeMenu} />
        </S.Nav>
        <S.Status>
          <S.Cart>
            <Cart />
          </S.Cart>
          <S.Profile>
            <img src="/images/image-avatar.png" alt="avatar" />
          </S.Profile>
        </S.Status>
      </S.NavBar>
    </Center>
  );
};

export default NavBar;
