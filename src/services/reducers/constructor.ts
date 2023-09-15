import {
    ADD_TO_CONSTRUCTOR, DEL_FROM_CONSTRUCTOR, MOVE_IN_CONSTRUCTOR
} from "../actions/constructor";

import { Iingredient } from "../../types/ingredient";

import { TConstructorActions } from "../actions/constructor";


export type TConstructorState = {
        bun: Iingredient;
        filling: Iingredient[];
  };

export const checkoutInitialState: TConstructorState = {
    bun:  {
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
    filling: [],

};  

export const constructorReducer = (state = checkoutInitialState, action: TConstructorActions): TConstructorState => {
    switch (action.type) {
        case ADD_TO_CONSTRUCTOR: {
            if (action.item.type === 'bun') {
                return {
                    ...state,
                    //@ts-ignore
                    ...state.constructorOrder,
                    bun: action.item,

                }
            } else {
                return {
                    ...state,
                    //@ts-ignore
                    ...state.constructorOrder,
                    filling: [...state.filling, action.item],
                }
            }

        }
        case DEL_FROM_CONSTRUCTOR: {
            return {
                ...state,
                //@ts-ignore
                ...state.constructorOrder,
                filling: [...state.filling].filter((item, index) => index !== action.index),
            }
        }
        case MOVE_IN_CONSTRUCTOR: {

            const newArray = [...state.filling];
            const hoverEl = newArray.splice(action.payload.from, 1)[0];
            newArray.splice(action.payload.to, 0, hoverEl);

            return {
                ...state,
                //@ts-ignore
                ...state.constructorOrder,
                filling: newArray,

            }
        }
        default: {
            return state;
        }
    }
};