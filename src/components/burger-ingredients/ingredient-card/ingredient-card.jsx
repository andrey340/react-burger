import React from "react";
import { typeOfIngredient } from '../../../utils/type';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import Modal from "../../modal/modal";
import styles from './ingredient-card.module.css';

function IngredientCard({item, onClick}) {
    return (
        <>
            <li className={styles.li} onClick= {onClick} >
            <Counter count={Math.floor(Math.random() * 100)} size="default"/>
            <img className="ml-4 mr-4" src={item.image} alt={item.name} />
            <p className={`mt-1 mb-1 text text_type_digits-default ${styles.price}`} >{item.price} <CurrencyIcon  type="primary" /></p>
            <p className={`text text text_type_main-default ${styles['text-center']}`}>{item.name}</p>
            </li>
        </>
    );
}

IngredientCard.propTypes = {
    item: typeOfIngredient
}

export default React.memo(IngredientCard);