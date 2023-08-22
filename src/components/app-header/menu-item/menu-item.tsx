import React, {FC, ReactNode} from 'react';
import { Link } from 'react-router-dom';
import styles from './menu-item.module.css';

interface IMenuItem {
  to: string;
  text: string;
  active: boolean;
  onClick: () => void;
  children?: ReactNode;
}

export const MenuItem: FC<IMenuItem> = ({to, text, active, onClick, children}) => {
  return (
    <Link to={to} className={`mt-4 mb-4 pl-5 pr-5 ${styles.link}`}>
      <li onClick={onClick} className={`p-1 ${styles.li} ${active && styles.active}`} >
        {children}
        <div className='text text_type_main-default ml-2 mr-2'>
          {text}
        </div>
      </li>
    </Link>
  );
}


export default MenuItem;
