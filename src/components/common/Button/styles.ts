import styled from "styled-components";
import media from "styles/media";
import { rem } from "styles/utils";

export const Button = styled.button`
  width: 100%;
  height: ${rem(56)};
  background-color: ${({ theme }) => theme.colors.orange};
  border-radius: ${rem(10)};
  font-weight: bold;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: hsl(26, 100%, 71%);
  }

  & > * + * {
    margin-left: ${rem(15.54)};
  }

  @media (max-width: ${media.md}) {
    box-shadow: 0 ${rem(20)} ${rem(50)} ${rem(-20)}
      ${({ theme }) => theme.colors.orange};
  }
`;
