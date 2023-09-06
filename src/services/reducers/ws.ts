import { WS_CONNECTION_START, WS_CONNECTION_SUCCESS, WS_CONNECTION_ERROR, WS_CONNECTION_CLOSED, WS_GET_MESSAGE, WS_SEND_MESSAGE } from '../actions/ws'
import { TWSActions } from "../actions/ws";

export type TWSState = {
    wsConnected: boolean;
    messages: any;
    error?: Event;
}

const checkoutInitialState: TWSState = {
    wsConnected: false,
    messages: []
};

export const wsReducer = (state = checkoutInitialState, action: TWSActions): TWSState => {
    switch (action.type) {
        case WS_CONNECTION_SUCCESS:
          return {
            ...state,
            error: undefined,
            wsConnected: true
          };
    
        case WS_CONNECTION_ERROR:
          return {
            ...state,
            error: action.payload,
            wsConnected: false
          };
    
        case WS_CONNECTION_CLOSED:
          return {
            ...state,
            error: undefined,
            wsConnected: false
          };
    
        case WS_GET_MESSAGE:
          const msg = { ...action.payload};
          return {
            ...state,
            error: undefined,
            messages: [...state.messages, msg]
          };
    
        default:
          return state;
      }
};