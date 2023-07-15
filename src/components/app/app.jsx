import React, { useEffect, useState } from 'react';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import withModal from '../hocs/withModal';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredients } from '../../services/actions/ingredients';
import { DndProvider } from 'react-dnd/dist/core';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styles from './app.module.css';



const WithModalConstructor = withModal(BurgerConstructor)

function App() {

  const { ingredients, ingredientsRequest, ingredientsFailed, requestError } = useSelector(state => state.ingredients)

  const dispatch = useDispatch();
  useEffect(
    () => {
      if (!ingredients.length) dispatch(getIngredients());
    },
    [dispatch]
  );

  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        {ingredientsRequest
          ? <h2>Идет загрузка данных...</h2>
          : ingredientsFailed
            ?
            <h2>Произошла ошибка: {requestError}</h2>
            :
            <DndProvider backend={HTML5Backend}>
              <BurgerIngredients />
              <WithModalConstructor />
            </DndProvider>
        }
      </main>
    </>
  );
}

export default App;
