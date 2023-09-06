export const INGREDIENT_TO_VIEW: 'INGREDIENT_TO_VIEW' = 'INGREDIENT_TO_VIEW';
export const CLOSE_MODAL: 'CLOSE_MODAL' = 'CLOSE_MODAL';

export interface IModalViewActions {
    readonly type: typeof INGREDIENT_TO_VIEW;
    readonly data: any;
}

export interface IModalCloseAction {
    readonly type: typeof CLOSE_MODAL;
}

export type TModalActions = IModalViewActions | IModalCloseAction;
