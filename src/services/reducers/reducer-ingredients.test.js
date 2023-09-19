import * as actions from '../actions/ingredients'
import * as reducer from './ingredients'


const testIngredients = [
    {
        _id:"643d69a5c3f7b9001cfa093c",
        name:"Краторная булка N-200i",
        type:"bun",
        proteins:80,
        fat:24,
        carbohydrates:53,
        calories:420,
        price:1255,
        image:"https://code.s3.yandex.net/react/code/bun-02.png",
        image_mobile:"https://code.s3.yandex.net/react/code/bun-02-mobile.png",
        image_large:"https://code.s3.yandex.net/react/code/bun-02-large.png",
        __v:0,
    }, 
    {
        _id:"643d69a5c3f7b9001cfa0941",
        name:"Биокотлета из марсианской Магнолии",
        type:"main",
        proteins:420,
        fat:142,
        carbohydrates:242,
        calories:4242,
        price:424,
        image:"https://code.s3.yandex.net/react/code/meat-01.png",
        image_mobile:"https://code.s3.yandex.net/react/code/meat-01-mobile.png",
        image_large:"https://code.s3.yandex.net/react/code/meat-01-large.png",
        __v:0,
    }
]

describe('Получение ингредиентов', () => {
    it('Initial state', () => {
        const state = undefined;
        const action = {};
        expect(reducer.ingredientsReducer(state, action)).toEqual(reducer.checkoutInitialState)
    })

    it('Ingredients request', () => {
        const state = undefined;
        const action = {type: actions.GET_INGREDIENTS_REQUEST};
        expect(reducer.ingredientsReducer(state, action)).toEqual({...reducer.checkoutInitialState, ingredientsRequest: true})
    })

    it('Ingredients success', () => {
        const state = undefined;
        const action = {type: actions.GET_INGREDIENTS_SUCCESS, data: testIngredients};
        expect(reducer.ingredientsReducer(state, action)).toEqual({...reducer.checkoutInitialState, ingredientsRequest: false, ingredientsFailed: false, ingredients: testIngredients})
    })

    it('Ingredients failed', () => {
        const state = undefined;
        const action = {type: actions.GET_INGREDIENTS_FAILED};
        expect(reducer.ingredientsReducer(state, action)).toEqual({...reducer.checkoutInitialState, ingredientsRequest: false, ingredientsFailed: true})
    })
})