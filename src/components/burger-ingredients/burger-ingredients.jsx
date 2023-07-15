import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import PropTypes from 'prop-types';
import { typeOfIngredient } from '../../utils/type';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import Ingredients from './ingredients/ingredients';
import ingredientTypes from '../../utils/ingredient-types';
import withModal from '../hocs/withModal';
import styles from './burger-ingredients.module.css';


const WithModalIngredients = withModal(Ingredients)
function BurgerIngredients({ onClick }) {
  const [current, setCurrentTypeIngredient] = React.useState('bun')
  const ingredients = useSelector(store => store.ingredients.ingredients)

  const renderTabs = (types) => {
    return (
      types.map((elem, index) => (
        <Tab key={index} value={elem.type} active={current === `${elem.type}`} onClick={() => setCurrentTypeIngredient(elem.type)}>
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
      <WithModalIngredients ingredients={ingredientsOfType} />
    </section>

  );
}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(
    typeOfIngredient
  )
}

export default BurgerIngredients;
