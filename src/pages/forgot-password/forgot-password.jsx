import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { userApi } from '../../services/actions/user';
import styles from './forgot-password.module.css';


export function ForgotPassword() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');

    const forgotError = useSelector(state => state.user.requestError)

    const forgotPassFormSend = async (e) => {
        e.preventDefault();

        dispatch(
            userApi(
                'forgot',
                {
                    'email': email
                },
                () => navigate('/reset-password')
            )
        )
    }

    return (
        <div className={styles.content}>
            <h2 className="text text_type_main-large mb-6">Восстановление пароля</h2>
            <form onSubmit={forgotPassFormSend} className={styles.form}>
                <EmailInput
                    value={email}
                    name="email"
                    placeholder="Укажите e-mail"
                    extraClass="mb-6"
                    onChange={(e) => setEmail(e.target.value)}
                    error={forgotError !== ''}
                    errorText={forgotError}
                />
                <Button htmlType='submit' type='primary' size='medium' extraClass='mb-20'>
                    Восстановить
                </Button>
            </form>
            <p className="text text_type_main-default text_color_inactive">Вспомнили пароль?
                <Link to='/login' className={styles.link}> Войти</Link>
            </p>
        </div>
    );
}