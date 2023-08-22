import React from 'react';
import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients';
import BurgerConstructor from '../../components/burger-constructor/burger-constructor';
import withModal from '../../components/hocs/withModal';
import { DndProvider } from 'react-dnd/dist/core';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styles from './constructor.module.css';

const WithModalConstructor = withModal(BurgerConstructor)

export function Constructor() {
  return (
      <main className={styles.main}>
            <DndProvider backend={HTML5Backend}>
              <BurgerIngredients />
              <WithModalConstructor />
            </DndProvider>
      </main>
  );
}


