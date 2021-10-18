import { useState } from "react";
import * as S from "./styles";

const Couter = () => {
  const [number, setNumber] = useState(0);

  const minus = () => setNumber(number > 0 ? number - 1 : 0);
  const plus = () => setNumber(number + 1);

  return (
    <S.Counter>
      <S.Minus onClick={minus}>-</S.Minus>
      <S.Number>{number}</S.Number>
      <S.Plus onClick={plus}>+</S.Plus>
    </S.Counter>
  );
};

export default Couter;
