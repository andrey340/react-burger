import React from 'react';
import MenuItem from './menu-item/menu-item';
import styles from './app-header.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon  } from '@ya.praktikum/react-developer-burger-ui-components'

function AppHeader() {
  const [currentPage, setPage] = React.useState('constructor')  

  return (

  <header className={styles.header}>
    <nav className={`pt-4 pb-4 ${styles.nav}`}>
      <ul className={`ml-5 mr-5 ${styles.m-0}`}>
        <MenuItem text='Конструтор' active={currentPage === `constructor`} current onClick={() => setPage('constructor')} >
          <BurgerIcon type="primary"  />
        </MenuItem>
        <MenuItem text='Лента заказов' active={currentPage === `orders`}  onClick={() => setPage('orders')}>
          <ListIcon type="secondary"  />
        </MenuItem>
      </ul>
      <Logo />
      <ul className={`ml-5 mr-5 ${styles.m-0}`}>
        <MenuItem text='Личный кабинет' active={currentPage === `cabinet`} onClick={() => setPage('cabinet')}>
          <ProfileIcon  type="secondary"  />
        </MenuItem>
      </ul>
    </nav>
  </header>

  );
}

export default AppHeader;
