import { FC } from 'react';
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './order-view.module.css';
import { useSelector } from '../../../hooks/useReducer';
import { IFeedItem } from '../../../types/feed-item';
import { russianStatus } from '../../../utils/tools';

export const ViewOrder: FC<{ item: IFeedItem }> = ({ item }) => {

    const ingredients = useSelector((state) => state.ingredients.ingredients)
    let orderDetails = [];
    let totalPrice = 0;
    let idArray: string[] = [];
    let tempCount = 0;
    const orderIngredients = item.ingredients


    for (let i = 0; i < orderIngredients!.length; i++) {
        const tempIngredient = ingredients.find((item) => item._id === orderIngredients![i])
        if (tempIngredient !== undefined) {
            totalPrice += tempIngredient!.price;
            tempCount = idArray.filter(item => item === tempIngredient!._id).length
            if (tempCount === 0 ) {
                idArray.push(tempIngredient!._id)
            }
        }
    }


    for (let i = 0; i < idArray!.length; i++) {
        const tempIngredient = ingredients.find((item) => item._id === idArray[i])
        tempCount = orderIngredients!.filter(item => item === tempIngredient!._id).length
        let tempPrice = (tempCount === 1) ? tempIngredient!.price : tempCount + ' x ' + tempIngredient!.price
        orderDetails.push(
            <li className={styles.ingredient} key={i}>
                <div className={styles.name}>
                    <img src={tempIngredient!.image_large} alt='ingredient' />
                    <p className='ml-4 mr-4'>{tempIngredient!.name}</p>
                </div>

                <div className={styles.price}>
                    <p className="text text_type_digits-default mr-2">{tempPrice}</p>
                    <CurrencyIcon type='primary' />
                </div>
            </li>
        );
    }


    return (
        <div className={styles.container}>

            <p className="mb-10 text text_type_digits-medium">
                #{item.number}
            </p>
            <p className="mb-3 text text_type_main-medium">
                {item.name}
            </p>
            {item.status &&
                <p>{russianStatus(item.status)}</p>
            }
            <p className="mt-15 text text_type_main-medium">
                Состав:
            </p>

            <div className={`${styles.items} ${styles.scrollbar}`}>
                <ul>
                    {orderDetails}
                </ul>
            </div>

            <div className={`mt-10 ${styles.footer}`}>
                <p className="text text_type_main-default text_color_inactive">
                    <FormattedDate date={new Date(item.createdAt)} />
                </p>
                <div className={styles.totalPrice}>
                    <p className="text text_type_digits-default mr-2">{totalPrice}</p>
                    <CurrencyIcon type='primary' />
                </div>

            </div>

        </div>
    )
}

