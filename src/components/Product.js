import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Rate } from 'antd';
import Rating from '@mui/material/Rating';

function Product({ product }) {

    return (
        <div className='m-2 p-2 text-start'>
            <div>
                <Link className='text-decoration-none' to={`product/${product._id}`}>
                    <div className='text-center'>
                        <img src={product.image} className='img-fluid' />
                    </div>
                    <h1>{product.name}</h1>
                    <Rating name="read-only" value={product.rating} readOnly />

                    <h1>Price: {product.price}</h1>
                </Link>
            </div>
        </div>
    )
}

export default Product
