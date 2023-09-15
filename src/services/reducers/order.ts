import {GET_ORDER_REQUEST, GET_ORDER_SUCCESS, GET_ORDER_FAILED} from "../actions/order";

import { TOrderActions } from "../actions/order";

export type TOrderState = {
    order: number;
    orderRequest: boolean;
    orderFailed: boolean;
}

export const checkoutInitialState = {
    order: 0,
    orderRequest: false,
    orderFailed: false,
};

export const orderReducer = (state = checkoutInitialState, action: TOrderActions): TOrderState => {
    switch (action.type) {

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
                //@ts-ignore
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