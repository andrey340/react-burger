import React from "react";
import PropTypes from 'prop-types';
import { typeOfIngredient } from '../../../utils/type';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './ingredient-card.module.css';
import { useDispatch } from "react-redux";
import { INGREDIENT_TO_VIEW } from "../../../services/actions/ingredients";
import { useDrag } from "react-dnd";

function IngredientCard({ item, modalOpen }) {


    const dispatcher = useDispatch();
    const handleClick = (e) => {
        dispatcher({
            type: INGREDIENT_TO_VIEW,
            data: { ...item }
        })
        modalOpen()
    }
    const [{ opacity }, ref] = useDrag({
        type: 'ingredients',
        item: item,
        collect: monitor => ({
            opacity: monitor.isDragging() ? 0.5 : 1
        })
    });



    return (
        <li ref={ref} className={styles.li} onClick={handleClick} style={{ opacity }}>
            {item.__v !== 0 && <Counter count={item.__v} size="default" />}
            <img className="ml-4 mr-4" src={item.image} alt={item.name} />
            <p className={`mt-1 mb-1 text text_type_digits-default ${styles.price}`} >{item.price} <CurrencyIcon type="primary" /></p>
            <p className={`text text text_type_main-default ${styles['text-center']}`}>{item.name}</p>
        </li>
    );
}

IngredientCard.propTypes = {
    item: typeOfIngredient,
    modalOpen: PropTypes.func.isRequired
}

export default React.memo(IngredientCard);