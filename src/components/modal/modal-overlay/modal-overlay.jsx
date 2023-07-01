import React from 'react';
import PropTypes from 'prop-types';
import styles from './modal-overlay.module.css';

function ModalOverlay({children, onClose}) {
  return (
    <div className={styles.overlay} onClick={onClose}></div>
  );
}

ModalOverlay.propTypes = {
  error: PropTypes.func.isRequired
}

export default ModalOverlay;
