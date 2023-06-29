import React from 'react';
import MenuItem from './menu-item/menu-item';
import styles from './app-header.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon  } from '@ya.praktikum/react-developer-burger-ui-components'

function AppHeader() {
  return (

  <header className={styles.header}>
    <nav className={`pt-4 pb-4 ${styles.nav}`}>
      <ul className={`ml-5 mr-5 ${styles.m-0}`}>
        <MenuItem text='Конструтор' active><BurgerIcon type="primary"  /></MenuItem>
        <MenuItem text='Лента заказов'><ListIcon type="secondary"  /></MenuItem>
      </ul>
      <Logo />
      <ul className={`ml-5 mr-5 ${styles.m-0}`}>
        <MenuItem text='Личный кабинет'><ProfileIcon  type="secondary"  /></MenuItem>
      </ul>
    </nav>
  </header>

  );
}

export default AppHeader;
