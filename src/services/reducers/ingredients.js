import {
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_FAILED,
    GET_INGREDIENTS_SUCCESS,
    INGREDIENT_TO_VIEW,
    CLOSE_MODAL,
    ADD_TO_CONSTRUCTOR,
    DEL_FROM_CONSTRUCTOR,
    MOVE_IN_CONSTRUCTOR
} from "../actions/ingredients";

const checkoutInitialState = {
    ingredients: [],
    ingredientsRequest: true,
    ingredientsFailed: false,
    requestError: '',
    viewIngredient: {},
    orderObj: {},
    constructor: {
        bun: '643d69a5c3f7b9001cfa093c',
        filling: [],
    }

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
            return { ...state, ingredientsFailed: false, ingredients: action.data, ingredientsRequest: false };
        }
        case GET_INGREDIENTS_FAILED: {
            return { ...state, ingredientsFailed: true, ingredientsRequest: false, requestError: action.requestError };
        }
        case INGREDIENT_TO_VIEW: {
            return { ...state, viewIngredient: action.data }
        }
        case CLOSE_MODAL: {
            return { ...state, viewIngredient: {}, orderObj: {} }
        }
        case ADD_TO_CONSTRUCTOR: {
            if (action.item.type === 'bun') {
                return {
                    ...state, constructor: {
                        ...state.constructor,
                        bun: action.item._id,
                    }
                }
            } else {
                return {
                    ...state, constructor: {
                        ...state.constructor,
                        filling: [...state.constructor.filling ,action.item],
                    }
                } 
            }

        }
        case DEL_FROM_CONSTRUCTOR: {
            return {
                ...state, constructor: {
                    ...state.constructor,
                    filling: [...state.constructor.filling].filter((item, index) => index !== action.item),
                }
            } 
        }


        default: {
            return state;
        }
    }
};