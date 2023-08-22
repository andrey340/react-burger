import React, {FC} from 'react';
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
        <MenuItem to='/orders' text='Лента заказов' active={currentPage === `orders`} onClick={() => setPage('orders')} >
          <ListIcon type={currentPage === `orders` ? `primary` : `secondary`} />
        </MenuItem>
      </nav>

      <Logo />

      <nav className={styles.nav}>
        <MenuItem to='/profile' text='Личный кабинет' active={currentPage === `profile`} onClick={() => setPage('profile')} >
          <ProfileIcon type={currentPage === `profile` ? `primary` : `secondary`} />
        </MenuItem>
      </nav>

    </header>
  );
}

export default AppHeader;
