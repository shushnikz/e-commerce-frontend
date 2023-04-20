import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductById } from '../actions/productAction'
import { addToCart } from '../actions/cartActions'
import Loader from '../components/Loader'
import Error from '../components/Error'

function ProductDesc() {

    const { id } = useParams()

    const dispatch = useDispatch()

    const [quantity, setQuantity] = useState(1)

    const getproductbyidstate = useSelector((state) => state.getProductByIdReducer)

    const { product, loading, error } = getproductbyidstate

    function addtocart() {
        dispatch(addToCart(product, quantity))
    }

    useEffect(() => {
        dispatch(getProductById(id))
    }, [])
    return (
        <div>
            {loading ? (<Loader />) : error ? (<Error error="Something went Wrong..." />) : (
                <div className='row mt-5'>
                    <div className='col-md-6'>
                        <div className='card p-2 m-3'>
                            <h1>{product.name}</h1>
                            <img src={product.image} className='img-fluid m-3 bigimg' />
                            <p>{product.description}</p>
                        </div>
                    </div>
                    <div className='col-md-6 text-start'>
                        <div className='m-2'>
                            <h1>Price: {product.price}</h1>
                            <hr />
                            <h1>Select Quantity</h1>
                            <select value={quantity} onChange={(e) => { setQuantity(e.target.value) }}>
                                {[...Array(product.countInStock).keys()].map((x, i) => {
                                    return <option value={i + 1}>{i + 1}</option>
                                })}




                            </select>
                            <hr />
                            <button className='btn btn-dark' onClick={addtocart}>Add To Cart</button>

                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductDesc
