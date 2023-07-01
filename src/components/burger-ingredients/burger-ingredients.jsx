import React from 'react';
import PropTypes from 'prop-types';
import { typeOfIngredient } from '../../utils/type';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import Ingredients from './ingredients/ingredients';
import ingredientTypes from '../../utils/ingredient-types';
import styles from './burger-ingredients.module.css';

function BurgerIngredients({ingredients}) {
  const [current, setCurrentTypeIngredient] = React.useState('bun')

  const renderTabs = (types) => {
    return (
      types.map((elem, index) => (
        <Tab key={index} value={elem.type}  active={current === `${elem.type}`} onClick={() => setCurrentTypeIngredient(elem.type)}>
         {elem.desc}
        </Tab>
      ))
    )
  }

  const ingredientsOfType = ingredients.filter(item => item.type === current);

  return (
    <section className={`mt-10 ${styles.section}`}>
      <p className="text text_type_main-large">
        Соберите бургер
      </p>
        <div className={`mt-5 ${styles.tabs}`}>
          {renderTabs(ingredientTypes)}
        </div>
          <Ingredients ingredients={ingredientsOfType} />
    </section>
 
  );
}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(
    typeOfIngredient
  )
}

export default BurgerIngredients;
