import {GET_INGREDIENTS_REQUEST,GET_INGREDIENTS_FAILED,GET_INGREDIENTS_SUCCESS} from "../actions/ingredients";

const checkoutInitialState = {
    ingredients: [],
    ingredientsRequest: true,
    ingredientsFailed: false,
};

export const ingredientsReducer = (state = checkoutInitialState, action) => {
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