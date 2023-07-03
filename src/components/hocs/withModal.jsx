import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../modal/modal';
import Error from '../modal/error/error';
import IngredientDetails from '../modal/ingredient-details/ingredient-details';
import OrderDetails from '../modal/order-details/order-details';

// Представим withToggle в виде обычного функционального компонента.
const withModal = (WrappedComponent) => (props) => {
    const { modalType = 'error', modalTitle = '', modalItem = {}, ...exProps } = props;

    const [showModal, setShowModal] = React.useState(false);

    const openModal = React.useCallback(() => setShowModal(true), [])
    const closeModal = React.useCallback(() => setShowModal(false), [])

    return (
        <>
            <WrappedComponent {...exProps} onClick={openModal} />
            {showModal &&
                <Modal type={modalType} title={modalTitle} item={modalItem} close={closeModal} >
                    {
                        {
                            'error': <Error error='' />,
                            'ingredient': Object.keys(modalItem).length === 0 ? <Error error='Не получено данных о ингридиенте...' /> : <IngredientDetails item={modalItem} />,
                            'order': <OrderDetails />,
                        }[modalType]
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