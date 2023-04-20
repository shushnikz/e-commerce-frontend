import React, { useEffect, useState } from 'react'
import Product from '../components/Product'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../actions/productAction'
import Loader from '../components/Loader'
import Error from '../components/Error'
import Filter from '../components/Filter'

function Homescreen() {

    const getAllProductsstate = useSelector(state => state.getAllProductsReducer)

    const { loading, products, error } = getAllProductsstate

    const dispatch = useDispatch()

    useEffect(() => {


        dispatch(getAllProducts())
    }, [])
    return (
        <div>
            <Filter />
            <div className='row justify-content-center'>
                {loading ? (<Loader />) : error ? (<Error error="Something went Wrong..." />) : (
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
