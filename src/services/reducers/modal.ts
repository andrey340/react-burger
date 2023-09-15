import {INGREDIENT_TO_VIEW, CLOSE_MODAL, ORDER_TO_VIEW} from "../actions/modal";
import { TModalActions } from "../actions/modal";
import { Iingredient } from "../../types/ingredient";
import { IFeedItem } from "../../types/feed-item";

export type TModalState = {
    viewIngredient: Iingredient;
    orderToView: IFeedItem;
}

export const checkoutInitialState: TModalState = {
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
    orderToView: {
        _id: "",
        ingredients: [],
        status: "",
        name: "",
        createdAt: "",
        updatedAt: "",
        number: 0
    }
};

export const modalReducer = (state = checkoutInitialState, action: TModalActions) => {
    switch (action.type) {
        case INGREDIENT_TO_VIEW: {
            return { ...state, viewIngredient: action.data }
        }
        case ORDER_TO_VIEW: {
            return { ...state, orderToView: action.data }
        }
        case CLOSE_MODAL: {
            return { ...state, viewIngredient: {}, orderToView: {}}
        }
        default: {
            return state;
        }
    }
};