import {INGREDIENT_TO_VIEW, CLOSE_MODAL} from "../actions/modal";

const checkoutInitialState = {
    viewIngredient: {},
};

export const modalReducer = (state = checkoutInitialState, action) => {
    switch (action.type) {
        case INGREDIENT_TO_VIEW: {
            return { ...state, viewIngredient: action.data }
        }
        case CLOSE_MODAL: {
            return { ...state, viewIngredient: {}, order: 0 }
        }
        default: {
            return state;
        }
    }
};