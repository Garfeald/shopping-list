import React, {FC, ReactElement} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../redux/root-reducer";
import {IProductList} from "../redux/types";
import './ShoppingList.scss';
import {setProductListAsync} from "../redux/thunk";

export const ShoppingList: FC = (): ReactElement => {
    const { formState } = useSelector<AppState, IProductList>(state => state.product)
    const dispatch = useDispatch()

    const onDelete = (id: string) => {
        const newData = formState.filter(item => item.id != id)
        // @ts-ignore
        setProductListAsync(newData, dispatch)
    }

    const onComplete = (id: string) => {
        // @ts-ignore
        document.getElementById(id).classList.add('status-button-comp')
        // @ts-ignore
        document.getElementById(id).innerHTML = "куплено"
    }
    return (
        <>
            <div className="list">
                <table className="table-list">
                    <tbody>
                    {formState.length > 0
                        ? formState.map((item) => (

                            <tr key={item.id}>
                                <th><img
                                    src="https://i.ibb.co/GnHMqdS/shopping.png"
                                    alt="shop"
                                    className="shopping-icon"
                                /></th>
                                <th>{item.product.title}</th>
                                <th>{item.product.price}</th>
                                <th>{item.product.description}</th>
                                <th><button
                                    className="status-button"
                                    onClick={() => onComplete(item.id)}
                                    id={item.id}
                                    >купить
                                    </button>
                                </th>
                                <th><button
                                    className="status-button-delete"
                                    onClick={() => onDelete(item.id)}
                                >удалить
                                </button></th>
                            </tr>
                        ))
                        : <tr><th>в списке пока ничего нет...</th></tr>
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}