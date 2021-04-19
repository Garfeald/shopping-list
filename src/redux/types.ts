
export interface IProductList {
    modal: boolean,
    formState: [{
        id: string,
        product: {
            title: string,
            price: string,
            description: string,
        }
    }]
}

export const SET_MODAL = 'SET_MODAL';
export type setModal = {
    type: typeof SET_MODAL;
    payload: boolean;
};

export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export type createProduct = {
    type: typeof CREATE_PRODUCT;
    payload: string | IProductList;
}

export const IS_COMPLETED = 'IS_COMPLETED';
export type isProductCompleted = {
    type: typeof IS_COMPLETED;
    payload: IProductList;
}

export type ShoppingListTypes =
    | setModal
    | isProductCompleted
    | createProduct;