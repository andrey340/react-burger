import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import IngredientDetails from '../../components/modal/ingredient-details/ingredient-details';
import styles from './ingredient.module.css';



export function Ingredient() {
    const { id } = useParams();
    const ingredients = useSelector((state) => state.ingredients.ingredients)
    const ingredient = ingredients.find((item) => item._id === id)
    return (
        <div className={styles.content}>
            <h2 className="text text_type_main-large mb-6">Детали ингредиента</h2>
            <IngredientDetails item={ingredient} />
        </div>
    );
}