import Link from "next/link";
import Logo from "components/icons/Logo";
import * as S from "./styles";
import { useEffect, useState } from "react";
import Menu from "components/icons/Menu";
import Cart from "components/icons/Cart";
import NavList from "./NavList";
import Center from "components/common/Center";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [mobile, setMobile] = useState(false);

  const openMenu = () => setShowMenu(true);
  const closeMenu = () => setShowMenu(false);

  useEffect(() => {
    const resize = () => {
      if (window.innerWidth <= 768) {
        setMobile(true);
        setShowMenu(false);
      } else {
        setMobile(false);
        setShowMenu(true);
      }
    };
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <Center>
      <S.NavBar>
        <S.Nav>
          {mobile && (
            <S.MenuIcon onClick={openMenu}>
              <Menu />
            </S.MenuIcon>
          )}
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
          {showMenu && <NavList mobile={mobile} closeMenu={closeMenu} />}
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
