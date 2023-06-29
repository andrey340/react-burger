import React from 'react';
import PropTypes from 'prop-types';
import { typeOfIngredient } from '../../utils/type';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import Ingredients from './ingredients/ingredients';
import styles from './burger-ingredients.module.css';

function BurgerIngredients({ingredients}) {
  const [current, setCurrent] = React.useState('buns')
  return (
    <section className={`mt-10 ${styles.section}`}>
      <p className="text text_type_main-large">
        Соберите бургер
      </p>
        <div className={`mt-5 ${styles.tabs}`}>
          <Tab value="buns" active={current === 'buns'} onClick={setCurrent}>
            Булки
          </Tab>
          <Tab value="sauces" active={current === 'sauces'} onClick={setCurrent}>
            Соусы
          </Tab>
          <Tab value="main" active={current === 'main'} onClick={setCurrent}>
            Начинки
          </Tab>
        </div>
        <Ingredients ingredients={ingredients} />
    </section>
 
  );
}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(
    typeOfIngredient
  )
}

export default BurgerIngredients;
