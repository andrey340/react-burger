import React, { useEffect, useState } from 'react';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import withModal from '../hocs/withModal';
import styles from './app.module.css';

export const API_URL = 'https://norma.nomoreparties.space/api/ingredients';
const WithModalConstructor = withModal(BurgerConstructor)

function App() {

  const [state, setState] = useState({
    data: [],
    isLoading: false,
    errorText: ''
  })


  const fetchData = () => {
    fetch(API_URL)
      .then((res) => {
        if (res.ok) { 
          return res.json(); 
        }
        return Promise.reject(`Ошибка ${res.status}`); 
      })
      .then((data) => { 
        setState({ ...state, data: data.data, isLoading: false });
      })
      .catch((err) => {
        setState({ ...state, data: [], isLoading: false, errorText: String(err) });
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
        {isLoading
          ? <h2>Идет загрузка данных...</h2>
          : errorText !== ''
            ?
            <h2>Произошла ошибка: {errorText}</h2>
            : <>
              <BurgerIngredients ingredients={data} />
              <WithModalConstructor />
            </>
        }
      </main>
    </>
  );
}

export default App;
