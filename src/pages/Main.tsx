import React, {useState} from "react";
import './Main.scss'
import {Modal} from "../components/modal/Modal";
import {useDispatch} from "react-redux";
import {setModal} from "../redux/actions";
import {ShoppingList} from "../shopping-list/ShoppingList";

export const Main = () => {
    const dispatch = useDispatch();
    return (
        <>
            <div className="root">
                <h1>список покупок</h1>
                <button className="button" onClick={() => dispatch(setModal(true))}>Создать товар</button>
            </div>
            <Modal />
            <div className="block-list">
                <ShoppingList />
            </div>
        </>
    )
}