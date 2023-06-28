import React from 'react';
import PropTypes from 'prop-types';
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
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      proteins: PropTypes.number.isRequired,
      fat: PropTypes.number.isRequired,
      carbohydrates: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      image_mobile: PropTypes.string.isRequired,
      image_large: PropTypes.string.isRequired,
      __v: PropTypes.number.isRequired,
    })
  )
}

export default BurgerIngredients;
