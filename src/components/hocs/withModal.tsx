import React, { FC, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Modal from '../modal/modal';
import { useModal } from '../../hooks/useModal';
import Error from '../modal/error/error';
import IngredientDetails from '../modal/ingredient-details/ingredient-details';
import OrderDetails from '../modal/order-details/order-details';
import Loading from '../loading/loading';
import { useSelector } from 'react-redux/es/hooks/useSelector';



const withModal = (WrappedComponent: any) => (props: any) => {
    const navigate = useNavigate();

    const { modalType, ...exProps } = props;
    const { modalState, openModal, closeModal } = useModal();
    const viewIngredient = useSelector((state: any) => state.modal.viewIngredient)
    const order = useSelector((state: any) => state.order.order)
    const orderRequest = useSelector((state: any) => state.order.orderRequest)


    const type = (Object.keys(viewIngredient).length !== 0)
        ? 'ingredient'
        : (order.number !== 0 && !orderRequest)
            ? 'order'
            : (orderRequest)
                ? 'loading'
                : 'error';
    const title = (type === 'ingredient') ? 'Детали ингредиента' : ''

    if (type === 'ingredient') {
        window.history.replaceState(null, viewIngredient.name, "/ingredients/" + viewIngredient._id)
        //navigate(-1);
    }

    const closeIngModal = () => {
        navigate('/')
        closeModal();
    }

    return (
        <>
            <WrappedComponent {...exProps} modalOpen={openModal} />
            {modalState.isOpen &&
                <Modal title={title} closeFunc={type === 'ingredient' ? closeIngModal : closeModal} >
                    {
                        {
                            'error': <Error error='' />,
                            'ingredient': <IngredientDetails item={viewIngredient} />,
                            'order': <OrderDetails />,
                            'loading': <Loading />,
                        }[type]
                    }
                </Modal>
            }
        </>

    )
};




export default withModal