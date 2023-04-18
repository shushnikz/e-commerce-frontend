import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Rate } from 'antd';

function Product({ product }) {

    const [value, setValue] = useState(product.rating);
    return (
        <div className='m-2 p-2 text-start'>
            <div>
                <Link to={`product/${product._id}`}>
                    <img src={product.image} className='img-fluid' />
                    <h1>{product.name}</h1>
                    <Rate onChange={setValue} value={value} disabled defaultValue={product.rating} />
                    <h1>Price: {product.price}</h1>
                </Link>
            </div>
        </div>
    )
}

export default Product
