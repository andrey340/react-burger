import React, { useMemo, FC } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import ingredientTypes from '../../utils/ingredient-types';
import IngredientCard from './ingredient-card/ingredient-card';
import { useAppSelector } from '../../hooks/selector-and-dispatch';
import { InView } from 'react-intersection-observer';
import withModal from '../hocs/withModal';
import { Iingredient } from '../../types/ingredient';
import { Itypes } from '../../types/ingredient-types';
import styles from './burger-ingredients.module.css';

const WithModalIngredientCard = withModal(IngredientCard)

export const BurgerIngredients: FC = () => {

  const ingredients = useAppSelector(store => store.ingredients.ingredients)
  const buns = useMemo(() => ingredients.filter((item: { type: string; }) => item.type === 'bun'), [ingredients]);
  const sauces = useMemo(() => ingredients.filter((item: { type: string; }) => item.type === 'sauce'), [ingredients]);
  const mains = useMemo(() => ingredients.filter((item: { type: string; }) => item.type === 'main'), [ingredients]);


  const [current, setCurrentTypeIngredient] = React.useState('bun')

  const renderTabs = (types: Itypes[]) => {
    return (
      types.map((elem: Itypes, index: number) => (
        <Tab key={index} value={elem.type} active={current === `${elem.type}`} onClick={() => {}}>
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
              {buns.map((elem: Iingredient) => (
                <WithModalIngredientCard key={elem._id} item={elem} />
              ))}
            </ul>
          </div>
        </InView>
        <InView threshold={0.5} onChange={(inView, entry) => inView && setCurrentTypeIngredient('main')}>
          <div className="mt-10">
            <h2 className='text text_type_main-medium mb-4'>Начинки</h2>
            <ul className={styles.ul}>
              {mains.map((elem: Iingredient) => (
                <WithModalIngredientCard key={elem._id} item={elem} />
              ))}
            </ul>
          </div>
        </InView>
        <InView threshold={0.5} onChange={(inView, entry) => inView && setCurrentTypeIngredient('sauce')}>
          <div className="mt-10">
            <h2 className='text text_type_main-medium mb-4'>Соусы</h2>
            <ul className={styles.ul}>
              {sauces.map((elem: Iingredient) => (
                <WithModalIngredientCard key={elem._id} item={elem} />
              ))}
            </ul>
          </div>
        </InView>
      </div>


    </section>
  );
}


export default BurgerIngredients;
