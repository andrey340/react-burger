import React, { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import ModalOverlay from './modal-overlay/modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './modal.module.css';

const modalRoot = document.getElementById('modal-root')!;

interface IModal {
  title: string;
  closeFunc: () => void;
  children?: ReactNode;
}

export const Modal: FC<IModal> = ({ title, closeFunc, children }) => {

  React.useEffect(() => {
    function handleKeyDown(e: KeyboardEvent ) {
      if (e.key === 'Escape') {
        closeFunc();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, [title, closeFunc])

  return createPortal((
    <>
      <div className={styles.wrapper}>
        <div className={`pt-10 pb-10 pr-10 pl-10 ${styles.modal}`}>
          <div className={styles.head}>
            <span className="text text_type_main-large mr-6">{title}</span>
            <span className={`text text_type_main-medium ${styles.close}`} onClick={closeFunc}><CloseIcon type="primary" /></span>
          </div>
          <div className={styles.content}>
            {children}
          </div>
        </div>
      </div>
      <ModalOverlay onClose={closeFunc} />
    </>
  ),
    modalRoot)
}


export default Modal;
