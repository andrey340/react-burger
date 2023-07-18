import {
    ADD_TO_CONSTRUCTOR, DEL_FROM_CONSTRUCTOR, MOVE_IN_CONSTRUCTOR
} from "../actions/constructor";

const checkoutInitialState = {
    bun: {},
    filling: [],
};

export const constructorReducer = (state = checkoutInitialState, action) => {
    switch (action.type) {
        case ADD_TO_CONSTRUCTOR: {
            if (action.item.type === 'bun') {
                return {
                    ...state,
                    ...state.constructorOrder,
                    bun: action.item,

                }
            } else {
                return {
                    ...state,
                    ...state.constructorOrder,
                    filling: [...state.filling, action.item],
                }
            }

        }
        case DEL_FROM_CONSTRUCTOR: {
            return {
                ...state,
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
                ...state.constructorOrder,
                filling: newArray,

            }
        }
        default: {
            return state;
        }
    }
};