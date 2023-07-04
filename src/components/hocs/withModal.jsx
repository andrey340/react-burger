import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../modal/modal';
import { useModal } from '../../hooks/useModal';
import Error from '../modal/error/error';
import IngredientDetails from '../modal/ingredient-details/ingredient-details';
import OrderDetails from '../modal/order-details/order-details';


const withModal = (WrappedComponent) => (props) => {
    const { modalType, ...exProps } = props;
    const { modalState, openModal, closeModal } = useModal();

    return (
        <>
            <WrappedComponent {...exProps} modalOpen={openModal} />
            {modalState.isOpen &&
                <Modal title={modalState.title} closeFunc={closeModal} >
                    {
                        {
                            'error': <Error error='' />,
                            'ingredient': Object.keys(modalState.item).length === 0 ? <Error error='Не получено данных о ингридиенте...' /> : <IngredientDetails item={modalState.item} />,
                            'order': <OrderDetails />,
                        }[modalState.type]
                    }
                </Modal>
            }
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