import React from "react";
import PropTypes from 'prop-types';
import { typeOfIngredient } from '../../../utils/type';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './ingredient-card.module.css';
import { useDispatch, useSelector } from "react-redux";
import { INGREDIENT_TO_VIEW } from "../../../services/actions/modal";
import { useDrag } from "react-dnd";


function IngredientCard({ item, modalOpen }) {

    const bun = useSelector(state => state.constructorOrder.bun)
    const fillings = useSelector(state => state.constructorOrder.filling)

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


    const count = (bun._id === item._id) ? 2 : fillings.filter(el => el._id === item._id).length

    return (
        <li ref={ref} className={styles.li} onClick={handleClick} style={{ opacity }}>
            {count !== 0 && <Counter count={count} size="default" />}
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