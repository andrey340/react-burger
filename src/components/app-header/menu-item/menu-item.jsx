import React from 'react';
import styles from './menu-item.module.css';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'

function MenuItem(props) {
  return (

   <Button htmlType="button" size="small" className={styles.button}>
    <li className={ `p-1 ${styles.li} ${props.active && styles.active}` } >
        {props.children}
        <div className='text text_type_main-default p-2'>
            {props.text}
        </div>
    </li>
   </Button>

  );
}

export default MenuItem;
