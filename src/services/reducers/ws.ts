import { WS_FEED_START, WS_CONNECTION_SUCCESS, WS_CONNECTION_ERROR, WS_CONNECTION_CLOSED, WS_GET_FEED, WS_SEND_MESSAGE } from '../actions/ws'
import { TWSActions } from "../actions/ws";
import { IFeedItem } from '../../types/feed-item';

export type TWSState = {
    wsConnected: boolean;
    orders: IFeedItem[];
    total: number,
    totalToday: number,
    error?: Event;
}

export const checkoutInitialState: TWSState = {
    wsConnected: false,
    orders: [],
    total: 0,
    totalToday: 0,
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
    
        case WS_GET_FEED:
          const msg = { ...action.payload};
          
          return {
            ...state,
            error: undefined,
            orders: msg.orders,
            total: msg.total,
            totalToday: msg.totalToday
          };
    
        default:
          return state;
      }
};