import './PageTwo.css';
import { useNavigate } from "react-router-dom";
import BuyProducts from '../BuyProducts/BuyProducts';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../redux/actions';
import React, { useEffect } from 'react';

const PageTwo = () => {

    const navigate = useNavigate();

    const currentProduct = useSelector(state => state.currentProduct)

    const dispatch = useDispatch()

    const user = { name: "Vova" }

    useEffect(() => {
        dispatch(allActions.productsActions.products(user))
    }, [])

    const before = () => {
        navigate("/pageone");
    }
    return (
        <div className='PageTwo'>Page Two
            <button onClick={before}>Before</button>
            {
                currentProduct.showProduct ?
                    <>
                        <h1>Выберите товар, {currentProduct.user.name} !</h1>
                        <button onClick={() => dispatch(allActions.productsActions.logOutProduct())}>Form Close</button>
                        <BuyProducts />
                    </>
                    :
                    <>
                        <h1>Login</h1>
                        <button onClick={() => dispatch(allActions.productsActions.products(user))}>Login as Vova</button>
                    </>
            }
        </div>
    );
};

export default PageTwo;