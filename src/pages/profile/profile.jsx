import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { userApi } from '../../services/actions/user';
import styles from './profile.module.css';


export function Profile() {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logOut = async (e) => {
        e.preventDefault();
    
        dispatch(
          userApi(
            'logout',
            {
              'token': localStorage.getItem('refreshToken')
            },
            () => navigate('/login')
          )
        )
        
      }

    return (
        <div className={styles.content}>
            <div className={`${styles.sidebar} pr-15`}>
                <nav className='mb-20'>
                    <NavLink className={({ isActive }) => isActive
                                                        ? `text text_type_main-medium text_color_inactive ${styles.active}`
                                                        : `text text_type_main-medium text_color_inactive`} 
                              to='' end>Профиль</NavLink>
                    <NavLink className={({ isActive }) => isActive
                                                        ? `text text_type_main-medium text_color_inactive ${styles.active}`
                                                        : `text text_type_main-medium text_color_inactive`} 
                              to='orders'>История заказов</NavLink>
                    <a className="text text_type_main-medium text_color_inactive" onClick={logOut}>Выход</a>
                </nav>
                <p className="text text_type_main-default text_color_inactive">
                    В этом разделе вы можете <br /> изменить свои персональные данные
                </p>
            </div>
            <Outlet />
        </div>
    );
}