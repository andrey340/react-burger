import React, { FC } from 'react';
import MenuItem from './menu-item/menu-item';
import styles from './app-header.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'



export const AppHeader: FC = () => {
  const [currentPage, setPage] = React.useState('constructor')

  return (
    <header className={styles.header}>

      <nav className={styles.nav}>
        <MenuItem to='/' text='Конструтор' active={currentPage === `constructor`} onClick={() => setPage('constructor')} >
          <BurgerIcon type={currentPage === `constructor` ? `primary` : `secondary`} />
        </MenuItem>
        <MenuItem to='/feed' text='Лента заказов' active={currentPage === `feed`} onClick={() => setPage('feed')} >
          <ListIcon type={currentPage === `feed` ? `primary` : `secondary`} />
        </MenuItem>
      </nav>

      <MenuItem to='/' text='' active={currentPage === `constructor`} onClick={() => setPage('constructor')} >
        <Logo />
      </MenuItem>


      <nav className={styles.nav}>
        <MenuItem to='/profile' text='Личный кабинет' active={currentPage === `profile`} onClick={() => setPage('profile')} >
          <ProfileIcon type={currentPage === `profile` ? `primary` : `secondary`} />
        </MenuItem>
      </nav>

    </header>
  );
}

export default AppHeader;
