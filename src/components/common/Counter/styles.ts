import styled from "styled-components";
import { rem } from "styles/utils";

export const Counter = styled.div`
  width: 100%;
  height: ${rem(56)};
  background-color: hsl(220, 59%, 98%);
  border-radius: ${rem(10)};
  font-weight: bold;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Number = styled.span`
  color: ${({ theme }) => theme.colors.veryVarkBlue};
`;

export const Minus = styled.button`
  color: ${({ theme }) => theme.colors.orange};
`;

export const Plus = styled.button`
  color: ${({ theme }) => theme.colors.orange};
`;
