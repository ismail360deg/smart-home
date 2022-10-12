import React, { useContext, useState } from 'react'
import { CartContext, ProductContext } from './Root'
import Products from './Products'
import { addToDb } from '../utilites/fakeDB';
import { ToastContainer, toast } from 'react-toastify';


const Shop = () => {
    const products = useContext(ProductContext);
    const [cart, setCart] = useContext(CartContext)
    console.log(cart);


    const handleAddToCart = product => {
        let newCart = [];
        const exists = cart.find(existingProduct => existingProduct === product.id)
        if (!exists) {
            product.quantity = 1
            newCart = [...cart, product]
        }
        else {
            const rest = cart.filter(existingProduct => existingProduct !== product.id)
            exists.quantity = exists.quantity + 1
            newCart = [...rest, exists]
        }

        setCart(newCart)
        addToDb(product.id)
        toast.success('Product Added', { autoClose: 500 })



    }


    return (
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
            <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8'>
                {
                    products.map(product => <Products
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Products>)
                }
            </div>
            <ToastContainer
                position="top-center"
            // autoClose={5000}
            // hideProgressBar={false}
            // newestOnTop={false}
            // closeOnClick
            // rtl={false}
            // pauseOnFocusLoss
            // draggable
            // pauseOnHover
            // theme="light"
            />
        </div>
    )
}

export default Shop