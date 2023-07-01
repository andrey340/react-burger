import React from "react";
import PropTypes from 'prop-types';
import { typeOfIngredient } from '../../../utils/type';
import IngredientCard from "../ingredient-card/ingredient-card";
import withModal from "../../hocs/withModal";
import styles from './ingredients.module.css';

const WithModalCard = withModal(IngredientCard) 
function Ingredients({ingredients}) {
    return (
        <div className={`${styles.content} ${styles.scrollbar}`}>
            <div className="mt-10">
                <ul className={styles.ul}>
                {ingredients.map((elem) => (
                    <WithModalCard key={elem._id} item={elem} modalTitle='Детали ингредиента' modalType='ingredient' modalItem={elem}/>
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