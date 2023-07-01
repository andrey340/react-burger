import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import ModalOverlay from './modal-overlay/modal-overlay';
import IngredientDetails from './ingredient-details/ingredient-details';
import OrderDetails from './order-details/order-details';
import Error from './error/error';

import styles from './modal.module.css';

function Modal({Close, type='error', item={}, title='', error='Непредвиденная'}) {

  console.log( Object.keys(item).length)

  const modalRoot = document.getElementById('modal-root');  

console.log(Object.keys(item).length)
  

  const handleKeyDown = (e) => {
    if(e.keyCode === 27) {
        Close();
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
                  <span className="text text_type_main-large mr-6">{title}</span>
                  <span className={`text text_type_main-medium ${styles.close}`} onClick={Close}>✖</span>
              </div>
              <div className={styles.content}>
                {
                  {
                    'error': <Error error={error} />,
                    'ingredient': Object.keys(item).length === 0 ? <Error error='Не получено данных о ингридиенте...' /> : <IngredientDetails item={item} /> ,
                    'order': <OrderDetails />,
                  }[type]
                }
              </div>
          </div>
        </div>
        <ModalOverlay onClose={Close} />
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
