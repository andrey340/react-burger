import * as actions from '../actions/user'
import * as reducer from './user'


describe('Профиль', () => {
    it('Initial state', () => {
        const state = undefined;
        const action = {};
        expect(reducer.userReducer(state, action)).toEqual(reducer.checkoutInitialState)
    })

    it('User request', () => {
        const state = undefined;
        const action = { type: actions.GET_USER_REQUEST };
        expect(reducer.userReducer(state, action)).toEqual({ ...reducer.checkoutInitialState, isLoading: true })
    })

    it('User success', () => {
        const state = undefined;
        const action = { type: actions.GET_USER_SUCCESS, data: { user: { email: 'test@test.ru', name: 'test' } } };
        expect(reducer.userReducer(state, action)).toEqual({ ...reducer.checkoutInitialState, isUserAuth: true, user: { email: 'test@test.ru', name: 'test' } })
    })

    it('User reset success', () => {
        const state = undefined;
        const action = { type: actions.GET_RESET_SUCCESS};
        expect(reducer.userReducer(state, action)).toEqual({...reducer.checkoutInitialState, isUserAuth: true})
    })

    it('User logout success', () => {
        const state = undefined;
        const action = { type: actions.GET_LOGOUT_SUCCESS};
        expect(reducer.userReducer(state, action)).toEqual(reducer.checkoutInitialState)
    })

    it('User user failed', () => {
        const state = undefined;
        const action = { type: actions.GET_USER_FAILED, data: 'Auth error'};
        expect(reducer.userReducer(state, action)).toEqual({...reducer.checkoutInitialState, requestError: 'Auth error'})
    })

})