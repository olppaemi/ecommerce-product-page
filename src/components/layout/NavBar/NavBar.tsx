import Link from "next/link";
import Logo from "components/icons/Logo";
import * as S from "./styles";
import { useState } from "react";
import Menu from "components/icons/Menu";
import CartIcon from "components/icons/Cart";
import Center from "components/common/Center";
import Cart from "components/layout/Cart";
import NavList from "./NavList";
import useMobile from "hooks/useMobile";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const isMobile = useMobile();

  const openMenu = () => setShowMenu(true);
  const closeMenu = () => setShowMenu(false);

  return (
    <Center>
      <S.NavBar>
        <S.Nav>
          {isMobile && (
            <S.MenuIcon onClick={openMenu}>
              <Menu />
            </S.MenuIcon>
          )}

          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
          <NavList showMenu={showMenu} closeMenu={closeMenu} />
        </S.Nav>
        <S.Status>
          <S.Cart onClick={() => setShowCart((show) => !show)}>
            <CartIcon />
          </S.Cart>
          <S.Profile>
            <img src="/images/image-avatar.png" alt="avatar" />
          </S.Profile>
        </S.Status>
      </S.NavBar>
      {showCart && <Cart />}
    </Center>
  );
};

export default NavBar;
