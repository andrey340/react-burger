
import { combineReducers } from '@reduxjs/toolkit';
import { configureStore }from '@reduxjs/toolkit';
import { ingredientsReducer } from './ingredients';
import { orderReducer } from './order';
import { modalReducer } from './modal';
import { constructorReducer } from './constructor';
import { userReducer } from './user';


export const rootReducer = configureStore({
  reducer: {
    ingredients: ingredientsReducer,
    order: orderReducer,
    modal: modalReducer,
    constructorOrder: constructorReducer,
    user: userReducer,
  }
});

export type RootState = ReturnType<typeof rootReducer.getState>;
export type AppDispatch = typeof rootReducer.dispatch;


