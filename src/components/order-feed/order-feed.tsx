import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './order-feed.module.css';
import { FC } from 'react';
import { useSelector, useDispatch } from '../../hooks/useReducer';
import { IFeedItem } from '../../types/feed-item';
import { ORDER_TO_VIEW } from '../../services/actions/modal';
import { russianStatus } from '../../utils/tools';
import { Iingredient } from '../../types/ingredient';

interface IOrderFeed {
    item: IFeedItem;
    modalOpen?: () => void;
}

const OrderFeed: FC<IOrderFeed> = ({ item, modalOpen }) => {

    const ingredients = useSelector((state) => state.ingredients.ingredients)
    let orderImgs = [];
    let totalPrice = 0;
    const orderIngredients = item.ingredients

    for (let i = 0; i < orderIngredients!.length; i++) {
        const tempIngredient: Iingredient = ingredients.find((item) => item._id === orderIngredients![i]) as Iingredient
        if (tempIngredient != undefined) {
            totalPrice += tempIngredient.price;
            if (i <= 6) {
                if (i === 6) {
                    orderImgs.push(
                        <li className={styles.ingredient} key={i}>
                            <img src={tempIngredient.image_large} alt='ingredient' />
                            <div className={`${styles.last_ingredient} text text_type_digits-default`}>
                                +{orderIngredients!.length - i}
                            </div>
                        </li>
                    );
                } else {
                    orderImgs.push(
                        <li className={styles.ingredient} key={i}>
                            <img src={tempIngredient.image_large} alt='ingredient' />
                        </li>
                    );
                }
            }
        }

    }

    const dispatcher = useDispatch();
    const handleClick = () => {
        dispatcher({
            type: ORDER_TO_VIEW,
            data: { ...item }
        })
        modalOpen?.()
    }

    return (
        <div onClick={handleClick} className={`p-6 mb-4 ${styles.order}`}>
            <div className={`mb-6 ${styles.stats}`}>
                <p className="text text_type_digits-medium">
                    #{item.number}
                </p>
                <p className="text text_type_main-default text_color_inactive">
                    <FormattedDate date={new Date(item.createdAt)} />
                </p>
            </div>
            <div className={`mb-6 ${styles.medium}`}>
                <p className="text text_type_main-medium">
                    {item.name}
                </p>
                {item.status &&
                    <p>{russianStatus(item.status)}</p>
                }

            </div>
            <div className={styles.desc}>
                <ul>
                    {orderImgs}
                </ul>
                <div className={styles.totalPrice}>
                    <p className="text text_type_digits-default mr-2">{totalPrice}</p>

                    <CurrencyIcon type='primary' />
                </div>
            </div>
        </div>
    )
}

export default OrderFeed