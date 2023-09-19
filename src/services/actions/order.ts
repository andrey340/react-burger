import { API_URL } from "../config";
import { getCookie } from "../utils";
import { checkResponse } from "../../utils/tools";
export const GET_ORDER_REQUEST: 'GET_ORDER_REQUEST' = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS: 'GET_ORDER_SUCCESS' = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED: 'GET_ORDER_FAILED' = 'GET_ORDER_FAILED';

export interface IOrderReqAction {
    readonly type: typeof GET_ORDER_REQUEST;
    readonly data?: any;
}

export interface IOrderSuccessAction {
    readonly type: typeof GET_ORDER_SUCCESS;
    readonly data?: any;
}

export interface IOrderFailedAction {
    readonly type: typeof GET_ORDER_FAILED;
    readonly data?: any;
}

export type TOrderActions = IOrderReqAction | IOrderSuccessAction | IOrderFailedAction;

export function getOrder(data: any) {
    return function (dispatch: any) {
        dispatch({
            type: GET_ORDER_REQUEST
        });
        fetch(API_URL + 'orders', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                "authorization": 'Bearer ' + getCookie('token'),
            }
        })
            .then(checkResponse)
            .then((data) => {
                dispatch({
                    type: GET_ORDER_SUCCESS,
                    data: data.order.number
                });

            })
            .catch((err) => {
                dispatch({
                    type: GET_ORDER_FAILED,
                    requestError: String(err)
                });
            })
    }
}