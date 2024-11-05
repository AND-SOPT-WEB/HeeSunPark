// src/components/Modal.js
import React from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';

const Modal = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;
  console.log(message);

  return ReactDOM.createPortal(
    <Overlay>
      <ModalContainer>
        <p>✨ 1 to 50 ✨</p>
        <Message>{message}</Message>
        <Button onClick={onClose}>확인</Button>
      </ModalContainer>
    </Overlay>,
    document.getElementById('modal-root') // `index.html`에 모달을 렌더링할 DOM 요소 추가 필요
  );
};

export default Modal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 2rem;
  border-radius: 8px;
  text-align: center;

  & p {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const Message = styled.p`
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

const Button = styled.button`
  background: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.darkblue};
  }
`;
