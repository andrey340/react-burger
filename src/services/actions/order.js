import { API_URL } from "../config";
export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED = 'GET_ORDER_FAILED';

export function getOrder(data) {
    return function (dispatch) {
        dispatch({
            type: GET_ORDER_REQUEST
        });
        fetch(API_URL + 'orders', {
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