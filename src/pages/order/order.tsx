import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from '../../hooks/useReducer';
import { ViewOrder } from '../../components/modal/order-view/order-view';
import { WS_FEED_START, WS_CONNECTION_CLOSED } from '../../services/actions/ws';
import styles from './order.module.css';



export const ViewOrderPage:FC = () => {

    const orders = useSelector((state) => state.ws.orders)
    const dispatch = useDispatch();
    useEffect(
        () => {
            
                dispatch({ type: WS_FEED_START, payload: 'orders/all' });
                return () => {
                    dispatch({ type: WS_CONNECTION_CLOSED });
                }
            
        }, [dispatch]
    );

    const { id } = useParams();
    const item = orders!.find((item) => item._id === id)
    
    return (
        <>
            {orders!.length > 0 &&
                <div className={styles.content}>
                    <ViewOrder item={item!} />
                </div>
            }
        </>
    );
}