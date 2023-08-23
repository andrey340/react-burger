
import { combineReducers } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit'
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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof rootReducer.dispatch
