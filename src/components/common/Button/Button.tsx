import { ButtonHTMLAttributes, FC } from "react";
import * as S from "./styles";

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  return <S.Button {...props}>{children}</S.Button>;
};

export default Button;
