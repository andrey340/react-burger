import React, { useState, useEffect, FC, SyntheticEvent  } from 'react';
import { useSelector, useDispatch } from '../../../hooks/useReducer';
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { userApi } from '../../../services/actions/user';
import styles from './edit.module.css';


export const Edit: FC = () => {

    const dispatch = useDispatch();

    const user = useSelector((state) => state.user.user)

    const [isActiveName, setActiveName] = useState(false);
    const [isActiveEmail, setActiveEmail] = useState(false);
    const [isActivePass, setActivePass] = useState(false);

    const [nameValue, setNameValue] = useState(user.name);
    const [emailValue, setEmailValue] = useState(user.email);
    const [passValue, setPassValue] = useState('');

    useEffect(() => {
        setNameValue(user.name)
        setEmailValue(user.email)
      },
      [dispatch, user]
    );


    const nameInput = React.createRef<HTMLInputElement>();
    const emailInput = React.createRef<HTMLInputElement>();

    const editInput = (name: string) => {
        let curEl: HTMLInputElement | null = null;
        switch (name) {
            case 'name':
                curEl = nameInput.current
                setActiveName(true);
                break;
            case 'email':
                curEl = emailInput.current
                setActiveEmail(true);
                break;
            case 'password':
                setActivePass(true);
                break;
        }
        if( curEl !== null ) setTimeout(() => curEl!.focus(), 0)
        
    }

    const resetChanges = () => {
        setActiveName(false);
        setActiveEmail(false);
        setActivePass(false);

        setNameValue(user.name);
        setEmailValue(user.email);
        setPassValue('');
    }

    const saveChanges = async (e: SyntheticEvent ) => {
        e.preventDefault();
    
        dispatch(
          userApi(
            'edit',
            {
              'name': nameValue,
              'email': emailValue,
              'password': passValue,
              'token': localStorage.getItem('refreshToken')
            }
          )
          
        )

        setActiveName(false);
        setActiveEmail(false);
        setActivePass(false);
        
      }

    return (

        <div className={styles.content}>
            <form className={styles.form}>
                <Input 
                    value={nameValue} 
                    onChange={e => setNameValue(e.target.value)} 
                    disabled={!isActiveName} 
                    ref={nameInput} 
                    onIconClick={() => editInput('name')} 
                    type="text" 
                    name="name" 
                    placeholder="Имя" 
                    icon="EditIcon" 
                    extraClass="mb-6" 
                />
                <Input 
                    value={emailValue} 
                    onChange={e => setEmailValue(e.target.value)} 
                    disabled={!isActiveEmail} 
                    ref={emailInput} 
                    onIconClick={() => editInput('email')} 
                    type="text" 
                    name="login" 
                    placeholder="Логин" 
                    icon="EditIcon" 
                    extraClass="mb-6"
                />
                <PasswordInput 
                    value={passValue} 
                    disabled={!isActivePass} 
                    onChange={e => setPassValue(e.target.value)} 
                    name="password" placeholder="Пароль" 
                    icon="EditIcon" 
                    extraClass="mb-6" 
                />
            </form>

            {(isActiveName || isActiveEmail || isActivePass)
                &&
                <div className={styles.editBtn}>
                    <Button onClick={resetChanges} htmlType="button" type="secondary" size="small">
                        Отменить изменения
                    </Button>
                    <Button onClick={saveChanges} htmlType="button" type="primary" size="small" extraClass="ml-2">
                        Сохранить
                    </Button>
                </div>}
        </div>

    );
}