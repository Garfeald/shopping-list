import React, {
    ChangeEvent,
    FC,
    ReactElement, useEffect,
    useState
} from "react";
import './Modal.scss';
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../redux/root-reducer";
import {IProductList} from "../../redux/types";
import {setModal} from "../../redux/actions";
import {setProductListAsync} from "../../redux/thunk";


export const Modal: FC = (): ReactElement=> {
    const dispatch = useDispatch();
    const { modal } = useSelector<AppState, IProductList>(state => state.product)
    const { formState } = useSelector<AppState, IProductList>(state => state.product)
    const [ inputValue, setInputValue ] = useState({
        title: '',
        price: '',
        description: ''
    })
    const [productList, setProductList] = useState([]);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    };

    const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    };

    useEffect(() => {
        // @ts-ignore
        setProductListAsync(productList, dispatch)
    },[productList.length])

    useEffect(() => {
        if(formState.length < 1){
            setProductList([])
        }
    },[formState])

    const onSubmit = () => {
        if(inputValue){
            const formState = {
                id: Math.floor(Math.random() * 1000).toString(),
                product: inputValue,
                isCompleted: false
            }
            // @ts-ignore
            setProductList([...productList, formState])
            dispatch(setModal(false))
        }
    }

    const checkboxHandler = () => {
        // @ts-ignore
        document.querySelector('.description').classList.toggle('textarea-active')
    };

    return (
        <div className={ modal ? "modal active" : "modal"} onClick={() => dispatch(setModal(false))}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <img
                    src="https://i.ibb.co/5s53Nyj/cross.png"
                    alt="" className="modal__image"
                    onClick={() => dispatch(setModal(false))}
                />
                <div className="block-form">
                        <input
                            name="title"
                            placeholder="Название..."
                            type="text"
                            className="title"
                            value={inputValue.title}
                            onChange={handleInputChange}/>
                        <input
                            name="price"
                            placeholder="Цена..."
                            type="text"
                            className="price"
                            value={inputValue.price}
                            onChange={handleInputChange}/>
                        <div className="block-checkbox">
                            <input
                                type="checkbox"
                                className="checkbox"
                                onClick={checkboxHandler}
                            />
                            <p className="checkbox-text">Добавить описание?</p>
                        </div>
                        <textarea
                            name="description"
                            placeholder="Описание..."
                            className="description"
                            value={inputValue.description}
                            onChange={handleTextAreaChange}/>
                        <button
                            type="submit"
                            className="submit"
                            onClick={onSubmit}>
                            добавить в список
                        </button>
                </div>
            </div>
        </div>
    )
}