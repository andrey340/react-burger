import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AppHeader from '../app-header/app-header';
import { Constructor, Login, Register, ForgotPassword, ResetPassword, NotFoundPage, Profile, ProfileEdit, InWork } from '../../pages';
import { ProtectedRouteElement } from '../protected-route-element/protected-route-element';
import styles from './app.module.css';
import { Ingredient } from '../../pages/ingredient/ingredient';
import { getIngredients } from '../../services/actions/ingredients';
import Loading from '../loading/loading';

export default function App() {

  const { ingredients, ingredientsRequest, ingredientsFailed } = useSelector((state) => state.ingredients)


  const dispatch = useDispatch();
  useEffect(() => {
    if (!ingredients.length) dispatch(getIngredients());
  },
    [dispatch, ingredients.length]
  );


  return (
    <div className={styles.content}>

      <AppHeader />
      {ingredientsRequest
        ? <Loading />
        : ingredientsFailed
          ?
          <h2>Произошла ошибка</h2>
          :
          <main className={styles.main}>
            <Routes>
              <Route path="/" element={<Constructor />} />
              <Route path="/login" element={<ProtectedRouteElement element={<Login />} notAuth={true} />} />
              <Route path="/register" element={<ProtectedRouteElement element={<Register />} notAuth={true} />} />
              <Route path="/forgot-password" element={<ProtectedRouteElement element={<ForgotPassword />} notAuth={true} />} />
              <Route path="/reset-password" element={<ProtectedRouteElement element={<ResetPassword />} notAuth={true} />} />
              <Route path="/profile" element={<ProtectedRouteElement element={<Profile notAuth={false} />} />} >
                <Route path='' element={<ProfileEdit />} />
                <Route path='orders' element={<InWork />} />
              </Route>
              <Route path="/orders" element={<InWork />} />
              <Route path="/*" element={<NotFoundPage />} />
              <Route path='ingredients/:id' element={<Ingredient />} />
            </Routes>
          </main>
      }
    </div>
  );
}