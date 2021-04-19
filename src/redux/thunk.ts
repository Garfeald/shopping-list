import {createProduct} from "./actions";
import {IProductList} from "./types";
import {Dispatch} from "react";

export const setProductListAsync = (payload: IProductList, dispatch: Dispatch<any>) => (
        dispatch(createProduct(payload))
);