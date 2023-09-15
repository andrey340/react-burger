import * as actions from '../actions/constructor'
import * as reducer from './constructor'

const tempBun = {
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
    uuid: "860d4493-4e9d-4e06-8a16-862cc92e2258",
}

const tempFilling = {
    _id: "643d69a5c3f7b9001cfa093e",
    name: "Филе Люминесцентного тетраодонтимформа",
    type: "main",
    proteins: 44,
    fat: 26,
    carbohydrates: 85,
    calories: 643,
    price: 988,
    image: "https://code.s3.yandex.net/react/code/meat-03.png",
    image_mobile: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/meat-03-large.png",
    __v: 0,
    uuid: "05fa9c74-6381-49fb-aabb-40338692d490",
}

const tempSecondFilling = {
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
    uuid:"a782c202-3f55-4743-b972-02210388baef",
}


describe('Конструктор', () => {
    it('Initial state', () => {
        const state = undefined;
        const action = {};
        expect(reducer.constructorReducer(state, action)).toEqual(reducer.checkoutInitialState)
    })

    it('Add bun', () => {
        const state = undefined;
        const action = { type: actions.ADD_TO_CONSTRUCTOR, item: tempBun };
        expect(reducer.constructorReducer(state, action)).toEqual({ ...reducer.checkoutInitialState, bun: tempBun })
    })

    it('Add filling', () => {
        const state = undefined;
        const action = { type: actions.ADD_TO_CONSTRUCTOR, item: tempFilling };
        expect(reducer.constructorReducer(state, action)).toEqual({ ...reducer.checkoutInitialState, filling: [tempFilling] })
    })

    it('Del filling', () => {
        const state = {...reducer.checkoutInitialState, bun: tempBun, filling: [tempFilling]};
        const action = { type: actions.DEL_FROM_CONSTRUCTOR, index: 0 };
        expect(reducer.constructorReducer(state, action)).toEqual({ ...reducer.checkoutInitialState, bun: tempBun, filling: [] })
    })

    it('Move filling', () => {
        const state = {...reducer.checkoutInitialState, bun: tempBun, filling: [tempFilling, tempSecondFilling]};
        const action = { type: actions.MOVE_IN_CONSTRUCTOR, payload: { from: 0, to: 1 } };
        expect(reducer.constructorReducer(state, action)).toEqual({ ...reducer.checkoutInitialState, bun: tempBun, filling: [tempSecondFilling, tempFilling] })
    })

})