import { API_URL } from "../config";
import { setCookie, deleteCookie, getCookie } from "../utils";
import { checkResponse } from "../../utils/tools";
import { Dispatch } from "redux";

export const GET_AUTH_REQUEST: 'GET_AUTH_REQUEST' = 'GET_AUTH_REQUEST';
export const GET_AUTH_SUCCESS: 'GET_AUTH_SUCCESS' = 'GET_AUTH_SUCCESS';
export const GET_AUTH_FAILED: 'GET_AUTH_FAILED' = 'GET_AUTH_FAILED';

export const GET_REG_REQUEST: 'GET_REG_REQUEST' = 'GET_REG_REQUEST';
export const GET_REG_SUCCESS: 'GET_REG_SUCCESS' = 'GET_REG_SUCCESS';
export const GET_REG_FAILED: 'GET_REG_FAILED' = 'GET_REG_FAILED';

export const GET_FORGOT_REQUEST: 'GET_FORGOT_REQUEST' = 'GET_FORGOT_REQUEST';
export const GET_FORGOT_SUCCESS: 'GET_FORGOT_SUCCESS' = 'GET_FORGOT_SUCCESS';
export const GET_FORGOT_FAILED: 'GET_FORGOT_FAILED' = 'GET_FORGOT_FAILED';

export const GET_RESET_REQUEST: 'GET_RESET_REQUEST' = 'GET_RESET_REQUEST';
export const GET_RESET_SUCCESS: 'GET_RESET_SUCCESS' = 'GET_RESET_SUCCESS';
export const GET_RESET_FAILED: 'GET_RESET_FAILED' = 'GET_RESET_FAILED';

export const GET_LOGOUT_REQUEST: 'GET_LOGOUT_REQUEST' = 'GET_LOGOUT_REQUEST';
export const GET_LOGOUT_SUCCESS: 'GET_LOGOUT_SUCCESS' = 'GET_LOGOUT_SUCCESS';
export const GET_LOGOUT_FAILED: 'GET_LOGOUT_FAILED' = 'GET_LOGOUT_FAILED';

export const GET_EDIT_REQUEST: 'GET_EDIT_REQUEST' = 'GET_EDIT_REQUEST';
export const GET_EDIT_SUCCESS: 'GET_EDIT_SUCCESS' = 'GET_EDIT_SUCCESS';
export const GET_EDIT_FAILED: 'GET_EDIT_FAILED' = 'GET_EDIT_FAILED';

export const GET_USER_REQUEST: 'GET_USER_REQUEST' = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS: 'GET_USER_SUCCESS' = 'GET_USER_SUCCESS';
export const GET_USER_FAILED: 'GET_USER_FAILED' = 'GET_USER_FAILED';

export const GET_REFRESH_REQUEST: 'GET_REFRESH_REQUEST' = 'GET_REFRESH_REQUEST';
export const GET_REFRESH_SUCCESS: 'GET_REFRESH_SUCCESS' = 'GET_REFRESH_SUCCESS';
export const GET_REFRESH_FAILED: 'GET_REFRESH_FAILED' = 'GET_REFRESH_FAILED';


export interface IAuthReqAction {
    readonly type: typeof GET_AUTH_REQUEST;
    readonly data?: any;
}

export interface IAuthSuccessAction {
    readonly type: typeof GET_AUTH_SUCCESS;
    readonly data?: any;
}

export interface IAuthFailedAction {
    readonly type: typeof GET_AUTH_FAILED;
    readonly data?: any;
}

export interface IRegReqAction {
    readonly type: typeof GET_REG_REQUEST;
    readonly data?: any;
}

export interface IRegSuccessAction {
    readonly type: typeof GET_REG_SUCCESS;
    readonly data?: any;
}

export interface IRegFailedAction {
    readonly type: typeof GET_REG_FAILED;
    readonly data?: any;
}

export interface IForgotReqAction {
    readonly type: typeof GET_FORGOT_REQUEST;
    readonly data?: any;
}

export interface IForgotSuccessAction {
    readonly type: typeof GET_FORGOT_SUCCESS;
    readonly data?: any;
}

export interface IForgotFailedAction {
    readonly type: typeof GET_FORGOT_FAILED;
    readonly data?: any;
}

export interface IResetReqAction {
    readonly type: typeof GET_RESET_REQUEST;
    readonly data?: any;
}

export interface IResetSuccessAction {
    readonly type: typeof GET_RESET_SUCCESS;
    readonly data?: any;
}

export interface IResetFailedAction {
    readonly type: typeof GET_RESET_FAILED;
    readonly data?: any;
}

export interface ILogoutReqAction {
    readonly type: typeof GET_LOGOUT_REQUEST;
    readonly data?: any;
}

export interface ILogoutSuccessAction {
    readonly type: typeof GET_LOGOUT_SUCCESS;
    readonly data?: any;
}

export interface ILogoutFailedAction {
    readonly type: typeof GET_LOGOUT_FAILED;
    readonly data?: any;
}

export interface IEditUserReqAction {
    readonly type: typeof GET_EDIT_REQUEST;
    readonly data?: any;
}

export interface IEditUserSuccessAction {
    readonly type: typeof GET_EDIT_SUCCESS;
    readonly data?: any;
}

export interface IEditUserFailedAction {
    readonly type: typeof GET_EDIT_FAILED;
    readonly data?: any;
}

export interface IUserReqAction {
    readonly type: typeof GET_USER_REQUEST;
    readonly data?: any;
}

export interface IUserSuccessAction {
    readonly type: typeof GET_USER_SUCCESS;
    readonly data?: any;
}

export interface IUserFailedAction {
    readonly type: typeof GET_USER_FAILED;
    readonly data?: any;
}

export interface IRefreshReqAction {
    readonly type: typeof GET_REFRESH_REQUEST;
    readonly data?: any;
}

export interface IRefreshSuccessAction {
    readonly type: typeof GET_REFRESH_SUCCESS;
    readonly data?: any;
}

export interface IRefreshFailedAction {
    readonly type: typeof GET_REFRESH_FAILED;
    readonly data?: any;
}

export type TUserActions = IAuthFailedAction
| IAuthReqAction
| IAuthSuccessAction
| IEditUserFailedAction
| IEditUserReqAction
| IEditUserSuccessAction
| IForgotFailedAction
| IForgotReqAction
| IForgotSuccessAction
| ILogoutFailedAction
| ILogoutReqAction
| ILogoutSuccessAction
| IUserFailedAction
| IUserReqAction
| IUserSuccessAction
| IRefreshFailedAction
| IRefreshReqAction
| IRefreshSuccessAction  
| IRegFailedAction
| IRegReqAction
| IRegSuccessAction
| IResetFailedAction
| IResetReqAction
| IResetSuccessAction


export function getUser() {
  
    return async (dispatch: Dispatch) => {
        dispatch({
            type: GET_USER_REQUEST
        });
        fetch(API_URL + 'auth/user', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                "authorization": 'Bearer ' + getCookie('token'),
            }
        })
            .then(checkResponse)
            .then((data) => {
                if (data.success) {
                    dispatch({
                        type: GET_USER_SUCCESS,
                        data: data
                    });

                } else {
                    dispatch({
                        type: GET_USER_FAILED,
                        data: String(data.message)
                    });
                }
            })
            .catch((err) => {
                console.error(err);
            })
    }
}

 
export function userApi(type: string, data: {} | undefined = {}, callbackFunction = () => { }) {
    let endpoint = '';
    let method = 'POST';
    let typeMatch = false;
    let saveTokens = false;
    let delTokens = false;
    let reqAction = '';
    let successAction = '';
    let failedAction = '';

    switch (type) {
        case 'login':
            endpoint = 'auth/login';
            typeMatch = true;
            saveTokens = true;
            reqAction = 'GET_AUTH_REQUEST';
            successAction = 'GET_AUTH_SUCCESS';
            failedAction = 'GET_AUTH_FAILED';
            break;

        case 'register':
            endpoint = 'auth/register';
            typeMatch = true;
            saveTokens = true;
            reqAction = 'GET_REG_REQUEST';
            successAction = 'GET_REG_SUCCESS';
            failedAction = 'GET_REG_FAILED';
            break;

        case 'forgot':
            endpoint = 'password-reset';
            typeMatch = true;
            reqAction = 'GET_FORGOT_REQUEST';
            successAction = 'GET_FORGOT_SUCCESS';
            failedAction = 'GET_FORGOT_FAILED';
            break;

        case 'reset':
            endpoint = 'password-reset/reset';
            typeMatch = true;
            reqAction = 'GET_RESET_REQUEST';
            successAction = 'GET_RESET_SUCCESS';
            failedAction = 'GET_RESET_FAILED';
            break;

        case 'logout':
            endpoint = 'auth/logout';
            typeMatch = true;
            delTokens = true;
            reqAction = 'GET_LOGOUT_REQUEST';
            successAction = 'GET_LOGOUT_SUCCESS';
            failedAction = 'GET_LOGOUT_FAILED';
            break;

        case 'edit':
            endpoint = 'auth/user';
            method = 'PATCH';
            typeMatch = true;
            reqAction = 'GET_EDIT_REQUEST';
            successAction = 'GET_EDIT_SUCCESS';
            failedAction = 'GET_EDIT_FAILED';
            break;
    }

    if (typeMatch) {
         
        return async (dispatch: Dispatch) => {
            dispatch({
                type: reqAction
            });
            fetch(API_URL + endpoint, {
                method: method,
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                    "authorization": 'Bearer ' + getCookie('token'),
                }
            })
                .then((res) => {
                    if (res.ok || res.status === 401 || res.status === 403) {
                        return res.json();
                    }
                    return Promise.reject(`Ошибка ${res.status}`);
                })
                .then((data) => {
                    if (data.success) {
                        dispatch({
                            type: successAction,
                            data: data
                        });
                        if (saveTokens) {
                            let authToken;
                            if (data.accessToken.indexOf('Bearer') === 0) {
                                authToken = data.accessToken.split('Bearer ')[1];
                            }
                            if (authToken) {
                                setCookie('token', authToken, { expires: 20 * 60 });
                                localStorage.setItem('refreshToken', data.refreshToken);
                            }
                        }
                        if (delTokens) {
                            deleteCookie('token');
                            localStorage.clear()
                        }
                        callbackFunction();
                    } else {
                        dispatch({
                            type: failedAction,
                            data: String(data.message)
                        });
                        if (data.message === 'jwt expired') {
                             //@ts-ignore
                            dispatch(refreshToken(userApi(type, data, callbackFunction())))
                        }
                    }
                })
                .catch((err) => {
                    if (err === 'jwt expired') {
                         //@ts-ignore
                        dispatch(refreshToken(userApi(type, data, callbackFunction())))
                    }
                    console.error(err);
                })
        }
    }
}
 
const refreshToken = (afterRefresh: any) => (type: string, dataAfter: any, callbackFunction: void) => {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: GET_REFRESH_REQUEST
        });
        fetch(API_URL + 'auth/token', {
            method: 'POST',
            body: JSON.stringify({
                'token': localStorage.getItem('refreshToken')
            }),
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            }
        })
            .then((res) => {
                if (res.ok || res.status === 401 || res.status === 403) {
                    return res.json();
                }
                return Promise.reject(`Ошибка ${res.status}`);
            })
            .then((data) => {
                if (data.success) {
                    dispatch({
                        type: GET_REFRESH_SUCCESS,
                    });

                    let authToken;
                    if (data.accessToken.indexOf('Bearer') === 0) {
                        authToken = data.accessToken.split('Bearer ')[1];
                    }
                    if (authToken) {
                        setCookie('token', authToken, { expires: 20 * 60 });
                        localStorage.setItem('refreshToken', data.refreshToken);
                    }
                    
                    dispatch(afterRefresh(type, dataAfter, callbackFunction))

                } else {
                    dispatch({
                        type: GET_REFRESH_FAILED,
                        data: String(data.message)
                    });
                }
            })
            .catch((err) => {
                console.error(err);
            })
    }


}

