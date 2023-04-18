import React, { useEffect, useState } from 'react'
import Product from '../components/Product'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../actions/productAction'

function Homescreen() {

    const getAllProductsstate = useSelector(state => state.getAllProductsReducer)

    const { loading, products, error } = getAllProductsstate

    const dispatch = useDispatch()

    useEffect(() => {


        dispatch(getAllProducts())
    }, [])
    return (
        <div>
            <div className='row justify-content-center'>
                {loading ? (<h1>Loading...</h1>) : error ? (<h1>Something went wong</h1>) : (
                    products.map((product, index) => {
                        return <div className='col-md-3 m-2 p-2 card'>
                            <Product key={index} product={product} />
                        </div>
                    })
                )}
            </div>
        </div>
    )
}

export default Homescreen
