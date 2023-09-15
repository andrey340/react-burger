import {GET_INGREDIENTS_REQUEST,GET_INGREDIENTS_FAILED,GET_INGREDIENTS_SUCCESS} from "../actions/ingredients";
import { Iingredient } from "../../types/ingredient";
import { TIngredientActions } from "../actions/ingredients";

export type TIngredientState = {
    ingredients: Iingredient[];
    ingredientsRequest: boolean;
    ingredientsFailed: boolean;
}

export const checkoutInitialState: TIngredientState = {
    ingredients: [],
    ingredientsRequest: true,
    ingredientsFailed: false,
};

export const ingredientsReducer = (state = checkoutInitialState, action: TIngredientActions): TIngredientState => {
    switch (action.type) {
        case GET_INGREDIENTS_REQUEST: {
            return {
                ...state,
                ingredientsRequest: true
            };
        }
        case GET_INGREDIENTS_SUCCESS: {
            return {
                ...state,
                ingredientsFailed: false,
                //@ts-ignore
                ingredients: action.data,
                ingredientsRequest: false
            };
        }
        case GET_INGREDIENTS_FAILED: {
            return { ...state, ingredientsFailed: true, ingredientsRequest: false};
        }
        default: {
            return state;
        }
    }
};