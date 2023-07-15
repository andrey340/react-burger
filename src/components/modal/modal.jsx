import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import ModalOverlay from './modal-overlay/modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './modal.module.css';

const modalRoot = document.getElementById('modal-root');
function Modal(props) {

  React.useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        props.closeFunc();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, [props])

  return createPortal((
    <>
      <div className={styles.wrapper}>
        <div className={`pt-10 pb-10 pr-10 pl-10 ${styles.modal}`}>
          <div className={styles.head}>
            <span className="text text_type_main-large mr-6">{props.title}</span>
            <span className={`text text_type_main-medium ${styles.close}`} onClick={props.closeFunc}><CloseIcon type="primary" /></span>
          </div>
          <div className={styles.content}>
            {props.children}
          </div>
        </div>
      </div>
      <ModalOverlay onClose={props.closeFunc} />
    </>
  ),
    modalRoot)
}

Modal.propTypes = {
  title: PropTypes.string,
  closeFunc: PropTypes.func.isRequired
}

export default Modal;
