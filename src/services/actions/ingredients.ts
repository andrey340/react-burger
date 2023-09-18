import { API_URL } from "../config";
import { checkResponse } from "../../utils/tools";

export const GET_INGREDIENTS_REQUEST: 'GET_INGREDIENTS_REQUEST' = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS: 'GET_INGREDIENTS_SUCCESS' = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED: 'GET_INGREDIENTS_FAILED' = 'GET_INGREDIENTS_FAILED';

export interface IIngredientReqAction {
    readonly type: typeof GET_INGREDIENTS_REQUEST;
    readonly data?: any
}

export interface IIngredientSuccessAction {
    readonly type: typeof GET_INGREDIENTS_SUCCESS;
    readonly data?: any
}

export interface IIngredientFailedAction {
    readonly type: typeof GET_INGREDIENTS_FAILED;
    readonly data?: any
}

export type TIngredientActions = IIngredientReqAction | IIngredientSuccessAction | IIngredientFailedAction;



export function getIngredients() {
    return function (dispatch: any) {
        dispatch({
            type: GET_INGREDIENTS_REQUEST
        });
        fetch(API_URL + 'ingredients')
            .then(checkResponse)
            .then((data) => {
                dispatch({
                    type: GET_INGREDIENTS_SUCCESS,
                    data: data.data
                });
            })
            .catch((err) => {
                dispatch({
                    type: GET_INGREDIENTS_FAILED,
                });
                console.error(String(err))
            })
    }
}


