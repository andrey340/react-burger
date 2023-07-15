import {
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_FAILED,
    GET_INGREDIENTS_SUCCESS,
    INGREDIENT_TO_VIEW,
    CLOSE_MODAL,
    ADD_TO_CONSTRUCTOR,
    DEL_FROM_CONSTRUCTOR,
    MOVE_IN_CONSTRUCTOR,
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,
    GET_ORDER_FAILED
} from "../actions/ingredients";

const checkoutInitialState = {
    ingredients: [],
    ingredientsRequest: true,
    ingredientsFailed: false,
    requestError: '',
    viewIngredient: {},
    order: 0,
    orderRequest: false,
    orderFailed: false,
    constructor: {
        bun: {
            _id: "643d69a5c3f7b9001cfa093c",
            name: "Краторная булка N-200i",
            type: "bun",
            proteins: 80,
            calories: 420,
            carbohydrates: 53,
            fat: 24,
            image: "https://code.s3.yandex.net/react/code/bun-02.png",
            image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
            image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
            price: 1255,
            __v: 0
        },
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
            const bunIndex = action.data.findIndex(el => el._id === '643d69a5c3f7b9001cfa093c');
            action.data[bunIndex].__v = 2;

            return {
                ...state,
                ingredientsFailed: false,
                ingredients: action.data,
                ingredientsRequest: false
            };
        }
        case GET_INGREDIENTS_FAILED: {
            return { ...state, ingredientsFailed: true, ingredientsRequest: false, requestError: action.requestError };
        }
        case INGREDIENT_TO_VIEW: {
            return { ...state, viewIngredient: action.data }
        }
        case CLOSE_MODAL: {
            return { ...state, viewIngredient: {}, order: 0 }
        }
        case ADD_TO_CONSTRUCTOR: {
            if (action.item.type === 'bun') {
                const newArray = state.ingredients.map((elem) =>
                    elem._id === action.item._id
                        ? { ...elem, __v: 2 }
                        : elem.type === 'bun' && elem._id !== action.item._id
                            ? { ...elem, __v: 0 }
                            : elem
                )

                return {
                    ...state,
                    constructor: {
                        ...state.constructor,
                        bun: action.item,
                    },
                    ingredients: newArray
                }
            } else {
                const newArray = state.ingredients.map((elem) =>
                    elem._id === action.item._id
                        ? { ...elem, __v: elem.__v + 1 }
                        : elem
                )
                return {
                    ...state,
                    constructor: {
                        ...state.constructor,
                        filling: [...state.constructor.filling, action.item],
                    },
                    ingredients: newArray
                }
            }

        }
        case DEL_FROM_CONSTRUCTOR: {
            const newArray = state.ingredients.map((elem) =>
                elem._id === action.id
                    ? { ...elem, __v: elem.__v - 1 }
                    : elem
            )
            return {
                ...state,
                constructor: {
                    ...state.constructor,
                    filling: [...state.constructor.filling].filter((item, index) => index !== action.index),
                },
                ingredients: newArray
            }
        }
        case MOVE_IN_CONSTRUCTOR: {

            const newArray = [...state.constructor.filling];
            const hoverEl = newArray.splice(action.payload.from, 1)[0];
            newArray.splice(action.payload.to, 0, hoverEl);

            return {
                ...state, constructor: {
                    ...state.constructor,
                    filling: newArray,
                }
            }
        }
        case GET_ORDER_REQUEST: {
            return {
                ...state,
                orderRequest: true,
                orderFailed: false,
                order: 0
            };
        }
        case GET_ORDER_SUCCESS: {
            return {
                ...state,
                orderRequest: false,
                orderFailed: false,
                order: action.data
            };
        }
        case GET_ORDER_FAILED: {
            return {
                ...state,
                orderRequest: false,
                orderFailed: true,
                order: 0
            };
        }
        default: {
            return state;
        }
    }
};