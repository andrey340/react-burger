import * as actions from '../actions/modal'
import * as reducer from './modal'

const testIngredient = {
    _id: "643d69a5c3f7b9001cfa093d",
    name: "Флюоресцентная булка R2-D3",
    type: "bun",
    proteins: 44,
    fat: 26,
    carbohydrates: 85,
    calories: 643,
    price: 988,
    image: "https://code.s3.yandex.net/react/code/bun-01.png",
    image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
    __v: 0,
}

const testOrder = {
    _id:"6504d6216d2997001caa8fef",
    ingredients: [ "643d69a5c3f7b9001cfa093e", "643d69a5c3f7b9001cfa0941", "643d69a5c3f7b9001cfa093d", "643d69a5c3f7b9001cfa093d"],
    status:"done",
    name:"Био-марсианский люминесцентный флюоресцентный бургер",
    createdAt:"2023-09-15T22:09:37.751Z",
    updatedAt:"2023-09-15T22:09:37.963Z",
    number:20752
}

describe('Модальное окно', () => {
    it('Initial state', () => {
        const state = undefined;
        const action = {};
        expect(reducer.modalReducer(state, action)).toEqual(reducer.checkoutInitialState)
    })

    it('Ingredient in modal', () => {
        const state = { ...reducer.checkoutInitialState };
        const action = { type: actions.INGREDIENT_TO_VIEW, data: testIngredient };
        expect(reducer.modalReducer(state, action)).toEqual({...reducer.checkoutInitialState, viewIngredient: testIngredient})
    })

    it('Order in modal', () => {
        const state = { ...reducer.checkoutInitialState };
        const action = { type: actions.ORDER_TO_VIEW, data: testOrder };
        expect(reducer.modalReducer(state, action)).toEqual({...reducer.checkoutInitialState, orderToView: testOrder})
    })

    it('Modal close', () => {
        const state = { ...reducer.checkoutInitialState };
        const action = { type: actions.CLOSE_MODAL };
        expect(reducer.modalReducer(state, action)).toEqual({...reducer.checkoutInitialState, viewIngredient: {}, orderToView: {}})
    })
})