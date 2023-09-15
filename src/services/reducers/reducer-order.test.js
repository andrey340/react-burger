import * as actions from '../actions/order'
import * as reducer from './order'

const testOrder = 20752;

describe('Заказ', () => {
    it('Initial state', () => {
        const state = undefined;
        const action = {};
        expect(reducer.orderReducer(state, action)).toEqual(reducer.checkoutInitialState)
    })

    it('Order request', () => {
        const state = undefined;
        const action = {type: actions.GET_ORDER_REQUEST};
        expect(reducer.orderReducer(state, action)).toEqual({...reducer.checkoutInitialState, orderRequest: true, orderFailed: false, order: 0})
    })

    it('Order success', () => {
        const state = undefined;
        const action = {type: actions.GET_ORDER_SUCCESS, data: testOrder};
        expect(reducer.orderReducer(state, action)).toEqual({...reducer.checkoutInitialState, orderRequest: false, orderFailed: false, order: testOrder})
    })

    it('Order failed', () => {
        const state = undefined;
        const action = {type: actions.GET_ORDER_FAILED};
        expect(reducer.orderReducer(state, action)).toEqual({...reducer.checkoutInitialState, orderRequest: false, orderFailed: true, order: 0})
    })
})