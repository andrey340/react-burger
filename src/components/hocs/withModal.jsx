import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../modal/modal';

// Представим withToggle в виде обычного функционального компонента.
const withModal = (WrappedComponent) => (props) => {
    const {modalType, modalTitle, modalItem, ...exProps} = props;

    const [showModal, setShowModal] = React.useState(false);

    const openModal = React.useCallback(() => setShowModal(true), [])
    const closeModal = React.useCallback(() => setShowModal(false), [])

    return (
        <>
            <WrappedComponent {...exProps} onClick={ openModal } />
            {showModal  && <Modal type={modalType} title={modalTitle} item={modalItem} Close={ closeModal } />}
        </>
        
    )
};



withModal.propTypes = {
    WrappedComponent: PropTypes.elementType.isRequired,
    modalType: PropTypes.string.isRequired,
    modalTitle: PropTypes.string,
    modalItem: PropTypes.object
}
  

export default withModal