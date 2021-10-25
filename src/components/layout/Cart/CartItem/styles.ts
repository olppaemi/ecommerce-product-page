import styled from "styled-components";
import { rem } from "styles/utils";

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductImage = styled.div`
  img {
    width: ${rem(50)};
    height: ${rem(50)};
    border-radius: ${rem(4)};
  }
`;

export const Product = styled.div`
  strong {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.veryVarkBlue};
  }
`;

export const DeleteIcon = styled.div`
  cursor: pointer;
`;
