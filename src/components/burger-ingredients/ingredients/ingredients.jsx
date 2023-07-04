import React from "react";
import PropTypes from 'prop-types';
import { typeOfIngredient } from '../../../utils/type';
import IngredientCard from "../ingredient-card/ingredient-card";
import withModal from "../../hocs/withModal";
import styles from './ingredients.module.css';


function Ingredients({ ingredients, modalOpen }) {
    return (
        <div className={`${styles.content} ${styles.scrollbar}`}>
            <div className="mt-10">
                <ul className={styles.ul}>
                    {ingredients.map((elem) => (
                        <IngredientCard key={elem._id} item={elem} modalOpen={modalOpen} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

Ingredients.propTypes = {
    ingredients: PropTypes.arrayOf(
        typeOfIngredient
    )
}

export default Ingredients;