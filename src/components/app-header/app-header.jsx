import React from 'react';
import MenuItem from './menu-item/menu-item';
import styles from './app-header.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'

function AppHeader() {
  const [currentPage, setPage] = React.useState('constructor')

  return (
    <header className={styles.header}>

      <nav className={styles.nav}>
        <MenuItem to='/' text='Конструтор' active={currentPage === `constructor`} current onClick={() => setPage('constructor')} >
          <BurgerIcon type={currentPage === `constructor` ? `primary` : `secondary`} />
        </MenuItem>
        <MenuItem to='/orders' text='Лента заказов' active={currentPage === `orders`} current onClick={() => setPage('orders')} >
          <ListIcon type={currentPage === `orders` ? `primary` : `secondary`} />
        </MenuItem>
      </nav>

      <Logo />

      <nav className={styles.nav}>
        <MenuItem to='/profile' text='Личный кабинет' active={currentPage === `profile`} current onClick={() => setPage('profile')} >
          <ProfileIcon type={currentPage === `profile` ? `primary` : `secondary`} />
        </MenuItem>
      </nav>

    </header>
  );
}

export default AppHeader;
