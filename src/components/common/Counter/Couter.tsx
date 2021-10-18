import Minus from "components/icons/Minus";
import Plus from "components/icons/Plus";
import { useState } from "react";
import * as S from "./styles";

const Couter = () => {
  const [number, setNumber] = useState(0);

  const minus = () => setNumber(number > 0 ? number - 1 : 0);
  const plus = () => setNumber(number + 1);

  return (
    <S.Counter>
      <S.Minus onClick={minus}>
        <span className="a11y-hidden">-</span>
        <Minus />
      </S.Minus>
      <S.Number>{number}</S.Number>
      <S.Plus onClick={plus}>
        <span className="a11y-hidden">+</span>
        <Plus />
      </S.Plus>
    </S.Counter>
  );
};

export default Couter;
