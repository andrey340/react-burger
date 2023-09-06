import React, { useEffect, FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './orders.module.css';
import { useSelector, useDispatch } from '../../../hooks/useReducer';
import { WS_FEED_START, WS_CONNECTION_CLOSED } from '../../../services/actions/ws'
import OrderFeed from '../../../components/order-feed/order-feed';
import { IFeedItem } from '../../../types/feed-item';
import { getCookie } from '../../../services/utils';
import withModal from '../../../components/hocs/withModal';

const WithModalOrder = withModal(OrderFeed, 'feed')

export const ProfileOrders: FC = () => {

    const orders = useSelector((state) => state.ws.orders)
    const total = useSelector((state) => state.ws.total)
    const totalToday = useSelector((state) => state.ws.totalToday)
    const readyOrder = orders.map((item: { status: string; number: any; }) => (item.status === 'done' ? item.number : null))
    const inCooking = orders.map((item: { status: string; number: any; }) => (item.status === 'pending' ? item.number : null))
    const cookie = getCookie('token');

    const dispatch = useDispatch();
    useEffect(
        () => {
            if (!orders.length) {
                dispatch({ type: WS_FEED_START, payload: 'orders', token: cookie });
                return () => {
                    dispatch({ type: WS_CONNECTION_CLOSED });
                }
            }
        }, [dispatch, orders.length]
    );

    return (
        <div className={styles.container}>
                <div className={`p-2 ${styles.orders} ${styles.scrollbar}`}>
                    {orders.slice(0).reverse().map((item: IFeedItem, index: React.Key) => (
                        <WithModalOrder key={index} item={item} />
                    )
                    )}
                </div>
        </div>
    );
}