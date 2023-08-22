import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/selector-and-dispatch';
import IngredientDetails from '../../components/modal/ingredient-details/ingredient-details';
import styles from './ingredient.module.css';



export const Ingredient: FC = () => {
    const { id } = useParams();
    const ingredients = useAppSelector((state) => state.ingredients.ingredients)
    const ingredient = ingredients.find((item: { _id: string | undefined; }) => item._id === id)
    return (
        <div className={styles.content}>
            <h2 className="text text_type_main-large mb-6">Детали ингредиента</h2>
            <IngredientDetails item={ingredient} />
        </div>
    );
}