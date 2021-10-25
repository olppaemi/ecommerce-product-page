import { FC, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

export default function useModal() {
  const [modalOpend, setModalOpend] = useState(false);

  const openModal = () => setModalOpend(true);
  const closeModal = () => setModalOpend(false);

  const ModalPortal: FC = ({ children }) => {
    const ref = useRef<Element | null>();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
      if (document) {
        const dom = document.querySelector("#root-modal");
        ref.current = dom;
      }
    }, []);

    if (ref.current && mounted && modalOpend) {
      return createPortal(
        <Modal>
          <Background />
          {children}
        </Modal>,
        ref.current
      );
    }
    return null;
  };

  return {
    openModal,
    closeModal,
    ModalPortal,
  };
}

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.75);
`;
