import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import ModalOverlay from './modal-overlay/modal-overlay';

import styles from './modal.module.css';

function Modal(props) {

  const modalRoot = document.getElementById('modal-root');  
  
  const handleKeyDown = (e) => {
    if(e.keyCode === 27) {
      props.Close();
    }
  }

  React.useEffect( () => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
        window.removeEventListener('keydown', handleKeyDown);
    }
  }, [handleKeyDown])

  return createPortal( (
        <>
        <div className={styles.wrapper}>
          <div className={`pt-10 pb-10 pr-10 pl-10 ${styles.modal}`}>
              <div className={styles.head}>
                  <span className="text text_type_main-large mr-6">{props.title}</span>
                  <span className={`text text_type_main-medium ${styles.close}`} onClick={props.Close}>✖</span>
              </div>
              <div className={styles.content}>
                {props.children}
              </div>
          </div>
        </div>
        <ModalOverlay onClose={props.Close} />
        </>
  ),
  modalRoot)
}

Modal.defaultProps = {
  type: 'error',
  item: {},
  title: '',
  error: 'Непредвиденная ошибка'
}

Error.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string,
  error: PropTypes.string,
  item: PropTypes.object,

}

export default Modal;
