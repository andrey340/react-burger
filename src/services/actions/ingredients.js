import { API_INGREDIENTS, API_ORDER } from "../config";

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';

export const ADD_TO_CONSTRUCTOR = 'ADD_TO_CONSTRUCTOR';
export const DEL_FROM_CONSTRUCTOR = 'DEL_FROM_CONSTRUCTOR';
export const MOVE_IN_CONSTRUCTOR = 'MOVE_IN_CONSTRUCTOR';

export const INGREDIENT_TO_VIEW = 'INGREDIENT_TO_VIEW';

export const CLOSE_MODAL = 'CLOSE MODAL';

export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED = 'GET_ORDER_FAILED';



export function getIngredients() {
    return function (dispatch) {
        dispatch({
            type: GET_INGREDIENTS_REQUEST
        });
        fetch(API_INGREDIENTS)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка ${res.status}`);
            })
            .then((data) => {
                dispatch({
                    type: GET_INGREDIENTS_SUCCESS,
                    data: data.data
                });

            })
            .catch((err) => {
                dispatch({
                    type: GET_INGREDIENTS_FAILED,
                    requestError: String(err)
                });
            })
    }
}

export function getOrder(data) {
    return function (dispatch) {
        dispatch({
            type: GET_ORDER_REQUEST
        });
        fetch(API_ORDER, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка ${res.status}`);
            })
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
