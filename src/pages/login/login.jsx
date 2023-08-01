import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { userApi } from '../../services/actions/user';
import styles from './login.module.css';


export function Login() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginError = useSelector(state => state.user.requestError)


  const loginFormSend = async (e) => {
    e.preventDefault();

    dispatch(
      userApi(
        'login',
        {
          'email': email,
          'password': password
        },
        () => navigate('/')
      )
    )
    
  }



  return (
    <div className={styles.content}>
      <h2 className="text text_type_main-large mb-6">Вход</h2>
      <form onSubmit={loginFormSend} className={styles.form}>
        <EmailInput
          value={email}
          name="email"
          placeholder="E-mail"
          extraClass="mb-6"
          onChange={(e) => setEmail(e.target.value)}
          error={loginError !== ''}
          errorText={loginError}
        />
        <PasswordInput
          value={password}
          name="password"
          placeholder="Пароль"
          extraClass="mb-6"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button htmlType='submit' type='primary' size='medium' extraClass='mb-20'>
          Войти
        </Button>
      </form>
      <p className="text text_type_main-default text_color_inactive">Вы - новый пользователь?
        <Link to='/register' className={styles.link}> Зарегистрироваться</Link>
      </p>
      <p className="text text_type_main-default text_color_inactive">Забыли пароль?
        <Link to='/forgot-password' className={styles.link}> Восстановить пароль</Link>
      </p>
    </div>
  );
}