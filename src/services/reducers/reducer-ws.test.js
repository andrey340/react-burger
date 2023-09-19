import * as actions from '../actions/ws'
import * as reducer from './ws'

const testFeed = {
    success: true,
    orders: [
        {
            _id:"64c8b8c382e277001bfa6122",
            ingredints: ["643d69a5c3f7b9001cfa093e", "643d69a5c3f7b9001cfa093c", "643d69a5c3f7b9001cfa093c"],
            status:"done",
            name:"Люминесцентный краторный бургер",
            createdAt:"2023-08-01T07:48:19.378Z",
            updatedAt:"2023-08-01T07:48:19.538Z",
            number:15380,
        }
    ],
    total:20378,
    totalToday:79,
}

describe('Профиль', () => {
    it('Initial state', () => {
        const state = undefined;
        const action = {};
        expect(reducer.wsReducer(state, action)).toEqual(reducer.checkoutInitialState)
    })

    it('WS success', () => {
        const state = undefined;
        const action = {type: actions.WS_CONNECTION_SUCCESS};
        expect(reducer.wsReducer(state, action)).toEqual({...reducer.checkoutInitialState, error: undefined, wsConnected: true})
    })

    it('WS error', () => {
        const state = undefined;
        const action = {type: actions.WS_CONNECTION_ERROR, payload: 'connection error'};
        expect(reducer.wsReducer(state, action)).toEqual({...reducer.checkoutInitialState, error: 'connection error', wsConnected: false})
    })

    it('WS closed', () => {
        const state = undefined;
        const action = {type: actions.WS_CONNECTION_CLOSED};
        expect(reducer.wsReducer(state, action)).toEqual({...reducer.checkoutInitialState, error: undefined, wsConnected: false})
    })

    it('WS feed', () => {
        const state = undefined;
        const action = {type: actions.WS_GET_FEED, payload: testFeed};
        expect(reducer.wsReducer(state, action)).toEqual({...reducer.checkoutInitialState, error: undefined, orders: testFeed.orders, total: testFeed.total, totalToday: testFeed.totalToday})
    })

})