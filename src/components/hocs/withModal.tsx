import React, { FC, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../modal/modal';
import { useModal } from '../../hooks/useModal';
import Error from '../modal/error/error';
import IngredientDetails from '../modal/ingredient-details/ingredient-details';
import OrderDetails from '../modal/order-details/order-details';
import Loading from '../loading/loading';
import { ViewOrder } from '../modal/order-view/order-view';
import { useSelector } from '../../hooks/useReducer';
import { useLocation } from 'react-router-dom';
import { Iingredient } from '../../types/ingredient';
import { IFeedItem } from '../../types/feed-item';
import { error } from 'console';



const withModal = (WrappedComponent: React.ElementType) => (props: {modalType?: string, item?: Iingredient | IFeedItem}) => {
    const navigate = useNavigate();

    const { modalType = 'error',  ...exProps } = props;
    const { modalState, openModal, closeModal } = useModal();
    const viewIngredient = useSelector((state) => state.modal.viewIngredient)
    const orderView = useSelector((state) => state.modal.orderToView)
    const order = useSelector((state) => state.order.order)
    const orderRequest = useSelector((state) => state.order.orderRequest)

    const location = useLocation();
    let from = location.state?.from || '/';

    // const type = (Object.keys(viewIngredient).length !== 0 && Object.keys(orderView).length === 0)
    //     ? 'ingredient'
    //     : (Object.keys(orderView).length !== 0 && Object.keys(viewIngredient).length === 0) 
    //     ? 'feed'
    //     : (order !== 0 && !orderRequest)
    //         ? 'order'
    //         : (orderRequest)
    //             ? 'loading'
    //             : 'ingredient';

  

    const title = (modalType === 'ingredient') ? 'Детали ингредиента' : ''



    if ( modalType === 'ingredient' && viewIngredient._id) {
        window.history.replaceState(null, viewIngredient.name, "/ingredients/" + viewIngredient._id)
        //navigate(-1);
    }

    if ( modalType === 'feed' && orderView._id) {
        window.history.replaceState(null, viewIngredient.name, '/feed/' + orderView._id)
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
                <Modal title={title} closeFunc={modalType === 'ingredient' ? closeIngModal : closeModal} >
                    {
                        {
                            'error': <Error error='' />,
                            'ingredient': <IngredientDetails item={viewIngredient} />,
                            'order': <OrderDetails />,
                            'loading': <Loading />,
                            'feed': <ViewOrder item={orderView}/>,
                        }[modalType]
                    }
                </Modal>
            }
        </>

    )
};




export default withModal