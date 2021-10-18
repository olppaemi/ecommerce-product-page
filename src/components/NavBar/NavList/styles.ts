import styled from "styled-components";
import media from "styles/media";
import { rem } from "styles/utils";

export const Container = styled.div<{ $showMenu: boolean }>`
  margin-left: ${rem(56.5)};

  @media (max-width: ${media.md}) {
    display: ${({ $showMenu }) => ($showMenu ? "block" : "none")};
    margin-left: 0;
  }
`;

export const Background = styled.div`
  @media (max-width: ${media.md}) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.75);
  }
`;

export const CloseIcon = styled.div`
  display: none;

  @media (max-width: ${media.md}) {
    display: block;
    cursor: pointer;
  }
`;

export const NavContainer = styled.div`
  @media (max-width: ${media.md}) {
    margin: 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: ${rem(250)};
    background-color: white;

    padding-top: ${rem(25)};
    padding-left: ${rem(25)};
  }
`;

export const NavList = styled.ul`
  display: flex;

  & > * + * {
    margin-left: ${rem(32)};
  }

  @media (max-width: ${media.md}) {
    flex-direction: column;

    margin-top: ${rem(54)};
    & > * + * {
      margin-left: 0;
      margin-top: ${rem(20)};
    }
  }
`;

export const NavItem = styled.li`
  position: relative;

  &:hover {
    &:before {
      display: block;
      content: "";

      width: 100%;
      height: ${rem(4)};
      background-color: ${({ theme }) => theme.colors.orange};

      position: absolute;
      bottom: 0;
      left: 0;
      transform: translateY(${rem(51)});
    }
  }

  @media (max-width: ${media.md}) {
    &:hover {
      &:before {
        display: none;
      }
    }
  }
`;
