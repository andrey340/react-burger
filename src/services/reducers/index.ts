
import { combineReducers } from '@reduxjs/toolkit';
import { ingredientsReducer } from './ingredients';
import { orderReducer } from './order';
import { modalReducer } from './modal';
import { constructorReducer } from './constructor';
import { userReducer } from './user';
import { wsReducer } from './ws';


export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  order: orderReducer,
  modal: modalReducer,
  constructorOrder: constructorReducer,
  user: userReducer,
  ws: wsReducer,
});


