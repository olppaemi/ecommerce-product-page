import styled from "styled-components";
import media from "styles/media";
import { rem } from "styles/utils";

export const NavBar = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: ${rem(28)};
  padding-bottom: ${rem(34)};
  border-bottom: 1px solid #e4e9f2;

  @media (max-width: ${media.md}) {
    border-bottom: none;
    padding-top: ${rem(20)};
    padding-bottom: ${rem(28)};
  }
`;

export const Nav = styled.nav`
  display: flex;
`;

export const Cart = styled.div`
  cursor: pointer;
  position: relative;
`;

export const MenuIcon = styled.div`
  margin-right: ${rem(16)};
  cursor: pointer;
`;

export const Status = styled.div`
  display: flex;
  align-items: center;

  & > * + * {
    margin-left: ${rem(46.18)};
  }

  @media (max-width: ${media.lg}) {
    & > * + * {
      margin-left: ${rem(32)};
    }
  }

  @media (max-width: ${media.md}) {
    & > * + * {
      margin-left: ${rem(22)};
    }
  }
`;

export const Profile = styled.div`
  cursor: pointer;
  img {
    width: ${rem(50)};
    height: ${rem(50)};
    border-radius: 50%;

    &:hover {
      border: 2px solid ${({ theme }) => theme.colors.orange};
    }
  }

  @media (max-width: ${media.md}) {
    img {
      width: ${rem(28)};
      height: ${rem(28)};
    }
  }
`;
