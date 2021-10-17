import Close from "components/icons/Close";
import Link from "next/link";
import * as S from "./styles";

const NavList = ({
  mobile,
  closeMenu,
}: {
  mobile: boolean;
  closeMenu(): void;
}) => {
  return (
    <S.Container>
      <S.Background onClick={closeMenu} />
      <S.NavContainer>
        {mobile && (
          <S.CloseIcon onClick={closeMenu}>
            <Close />
          </S.CloseIcon>
        )}
        <S.NavList>
          <S.NavItem onClick={closeMenu}>
            <Link href="/">
              <a>Collections</a>
            </Link>
          </S.NavItem>
          <S.NavItem onClick={closeMenu}>
            <Link href="/">
              <a>Men</a>
            </Link>
          </S.NavItem>
          <S.NavItem onClick={closeMenu}>
            <Link href="/">
              <a>Women</a>
            </Link>
          </S.NavItem>
          <S.NavItem onClick={closeMenu}>
            <Link href="/">
              <a>About</a>
            </Link>
          </S.NavItem>
          <S.NavItem onClick={closeMenu}>
            <Link href="/">
              <a>Contact</a>
            </Link>
          </S.NavItem>
        </S.NavList>
      </S.NavContainer>
    </S.Container>
  );
};

export default NavList;
