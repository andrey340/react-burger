import {INGREDIENT_TO_VIEW, CLOSE_MODAL} from "../actions/modal";
import { TModalActions } from "../actions/modal";
import { Iingredient } from "../../types/ingredient";

export type TModalState = {
    viewIngredient: Iingredient
}

const checkoutInitialState: TModalState = {
    viewIngredient: {
        _id: "",
        name: "",
        type: "",
        proteins: 0,
        fat: 0,
        carbohydrates: 0,
        calories: 0,
        price: 0,
        image: "",
        image_mobile: "",
        image_large: "",
        __v: 0
    },
};

export const modalReducer = (state = checkoutInitialState, action: TModalActions) => {
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