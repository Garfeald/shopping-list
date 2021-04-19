import {CREATE_PRODUCT, IProductList, IS_COMPLETED, SET_MODAL} from "./types";

export const setModal = (modal: boolean) => ({
    type: SET_MODAL,
    payload: modal
});

export const createProduct = (payload: IProductList) => ({
    type: CREATE_PRODUCT,
    payload: payload
})

export const isComplited = (payload: boolean) => ({
    type: IS_COMPLETED,
    payload: payload
})