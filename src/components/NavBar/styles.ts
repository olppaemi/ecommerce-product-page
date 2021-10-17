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
  border-bottom: none;

  @media (min-width: ${media.lg}) {
    border-bottom: 1px solid #e4e9f2;
  }
`;

export const Nav = styled.nav`
  display: flex;
`;

export const Cart = styled.div`
  cursor: pointer;
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
`;
