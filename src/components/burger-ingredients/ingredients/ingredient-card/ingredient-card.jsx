import React from "react";
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './ingredient-card.module.css';

function IngredientCard({item}) {

    

    return (
        <li className={styles.li}>
           <Counter count={Math.floor(Math.random() * 100)} size="default"/>
           <img className="ml-4 mr-4" src={item.image} alt={item.name} />
           <p className={`mt-1 mb-1 text text_type_digits-default ${styles.price}`} >{item.price} <CurrencyIcon  type="primary" /></p>
           <p style={{textAlign: 'center'}} className="text text text_type_main-default">{item.name}</p>
        </li>
    );
}

export default IngredientCard;