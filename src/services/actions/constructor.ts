export const ADD_TO_CONSTRUCTOR: 'ADD_TO_CONSTRUCTOR' = 'ADD_TO_CONSTRUCTOR';
export const DEL_FROM_CONSTRUCTOR: 'DEL_FROM_CONSTRUCTOR' = 'DEL_FROM_CONSTRUCTOR';
export const MOVE_IN_CONSTRUCTOR: 'MOVE_IN_CONSTRUCTOR' = 'MOVE_IN_CONSTRUCTOR';


export interface IConstructorAddAction {
    readonly type: typeof ADD_TO_CONSTRUCTOR;
    readonly item: any;
}

export interface IConstructorDelAction {
    readonly type: typeof DEL_FROM_CONSTRUCTOR;
    readonly index: number;
}

export interface IConstructorMoveAction {
    readonly type: typeof MOVE_IN_CONSTRUCTOR;
    readonly payload: any;
}

export type TConstructorActions = IConstructorAddAction | IConstructorDelAction | IConstructorMoveAction;
