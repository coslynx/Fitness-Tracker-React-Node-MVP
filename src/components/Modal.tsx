import React, { useState } from 'react';
import { Modal as MuiModal, ModalProps } from '@mui/material';
import { styled } from '@emotion/styled';

interface ModalProps extends ModalProps {
  title: string;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, title, children }) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleClose = () => {
    setIsOpen(false);
    onClose && onClose();
  };

  const StyledModal = styled(MuiModal)`
    .modal-container {
      position: relative;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      padding: 20px;
      width: 400px;
      max-width: 80%;
      margin: 20px auto;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .modal-title {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .modal-content {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `;

  return (
    <StyledModal
      open={isOpen}
      onClose={handleClose}
    >
      <div className="modal-container">
        <h2 className="modal-title">{title}</h2>
        <div className="modal-content">
          {children}
        </div>
      </div>
    </StyledModal>
  );
};

export default Modal;