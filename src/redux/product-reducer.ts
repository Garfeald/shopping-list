import {IProductList, ShoppingListTypes} from "./types";

export { setModal } from '../redux/actions';

const getInitialState = (): IProductList => ({
    modal: false,
    formState: [{
        id: '',
        product: {
            title: '',
            price: '',
            description: '',
        },
    }]
});

export const productReducer = (
    state: IProductList = getInitialState(),
    action: ShoppingListTypes
) => {
    switch (action.type) {
        case 'SET_MODAL':
            return {
                ...state,
                modal: action.payload,
            };
        case 'CREATE_PRODUCT':
            return {
                ...state,
                formState: action.payload
            };
        case 'IS_COMPLETED':
            return {
                ...state,
                isCompleted: action.payload
            };
        default:
            return state;
    }
}