import type { ThunkDispatch } from 'redux-thunk';
import { store } from '../index';
import { TIngredientState } from '../services/reducers/ingredients';
import { TOrderState } from '../services/reducers/order';
import { TModalState } from '../services/reducers/modal';
import { TConstructorState } from '../services/reducers/constructor';
import { TUserState } from '../services/reducers/user';

export type TApplicationActions = any;
export type RootState = {
    ingredients: TIngredientState,
    order: TOrderState,
    modal: TModalState,
    constructorOrder: TConstructorState,
    user: TUserState,
};
export type AppDispatch = ThunkDispatch<RootState, unknown, TApplicationActions>;