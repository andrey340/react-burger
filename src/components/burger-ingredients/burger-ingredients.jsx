import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { typeOfIngredient } from '../../utils/type';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import ingredientTypes from '../../utils/ingredient-types';
import IngredientCard from './ingredient-card/ingredient-card';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { InView } from 'react-intersection-observer';
import withModal from '../hocs/withModal';

import styles from './burger-ingredients.module.css';

const WithModalIngredientCard = withModal(IngredientCard)
function BurgerIngredients() {

  const ingredients = useSelector(store => store.ingredients.ingredients)
  const buns = useMemo(() => ingredients.filter((item) => item.type === 'bun'), [ingredients]);
  const sauces = useMemo(() => ingredients.filter((item) => item.type === 'sauce'), [ingredients]);
  const mains = useMemo(() => ingredients.filter((item) => item.type === 'main'), [ingredients]);


  const [current, setCurrentTypeIngredient] = React.useState('bun')

  const renderTabs = (types) => {
    return (
      types.map((elem, index) => (
        <Tab key={index} value={elem.type} active={current === `${elem.type}`}>
          {elem.desc}
        </Tab>
      ))
    )
  }



  return (
    <section className={`mt-10 ${styles.section}`}>
      <p className="text text_type_main-large">
        Соберите бургер
      </p>
      <div className={`mt-5 ${styles.tabs}`}>
        {renderTabs(ingredientTypes)}
      </div>

      <div className={`${styles.content} ${styles.scrollbar}`}>
        <InView threshold={1} onChange={(inView, entry) => inView && setCurrentTypeIngredient('bun')}>
          <div className="mt-10">
            <h2 className='text text_type_main-medium mb-4'>Булки</h2>
            <ul className={styles.ul}>
              {buns.map((elem) => (
                <WithModalIngredientCard key={elem._id} item={elem} />
              ))}
            </ul>
          </div>
        </InView>
        <InView threshold={0.5} onChange={(inView, entry) => inView && setCurrentTypeIngredient('main')}>
          <div className="mt-10">
            <h2 className='text text_type_main-medium mb-4'>Начинки</h2>
            <ul className={styles.ul}>
              {mains.map((elem) => (
                <WithModalIngredientCard key={elem._id} item={elem} />
              ))}
            </ul>
          </div>
        </InView>
        <InView threshold={0.5} onChange={(inView, entry) => inView && setCurrentTypeIngredient('sauce')}>
          <div className="mt-10">
            <h2 className='text text_type_main-medium mb-4'>Соусы</h2>
            <ul className={styles.ul}>
              {sauces.map((elem) => (
                <WithModalIngredientCard key={elem._id} item={elem} />
              ))}
            </ul>
          </div>
        </InView>
      </div>


    </section>
  );
}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(
    typeOfIngredient
  )
}

export default BurgerIngredients;
