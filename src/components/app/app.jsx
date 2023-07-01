import React, { useEffect, useState } from 'react';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import styles from './app.module.css';

export const API_URL = 'https://norma.nomoreparties.space/api/ingredients';

function App() {

  const [state, setState] = useState({
    data: [],
    isLoading: false,
    errorText: ''
  })


  const fetchData = () => {
    setState({...state, data: [], isLoading: true})
    fetch(API_URL) 
    .then( res => { 
      if(res.ok) {
        res.json().then( data => { 
          setState({...state, data: data.data, isLoading: false})  
      })
      } else {
        const newState = {...state, data:[], isLoading: false, errorText: res.status + " " + res.statusText  }
        setState(newState)
      }
    })
    .catch( err =>  {
      const newState = {...state, data:[], isLoading: false, errorText: String(err) }
      setState(newState)
    })
  }

  useEffect(() => {
    fetchData()
  }, [])


  const { data, isLoading, errorText } = state;
  return (
    <>
    <AppHeader />
    <main className={styles.main}>
    { isLoading 
    ? <h2>Идет загрузка данных...</h2> 
    :  errorText !== '' 
      ? 
        <h2>Произошла ошибка: {errorText}</h2>
      : <>
        <BurgerIngredients ingredients={data}/>
        <BurgerConstructor />
      </> 
    }
    </main>
    </>
  );
}

export default App;
