import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './menu-item.module.css';

function MenuItem(props) {
  return (
    <Link to={props.to} className={`mt-4 mb-4 pl-5 pr-5 ${styles.link}`}>
      <li onClick={props.onClick} className={`p-1 ${styles.li} ${props.active && styles.active}`} >
        {props.children}
        <div className='text text_type_main-default ml-2 mr-2'>
          {props.text}
        </div>
      </li>
    </Link>
  );
}

MenuItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired
}

export default MenuItem;
