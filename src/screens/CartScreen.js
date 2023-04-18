import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../actions/cartActions'

function CartScreen() {
    const cartreducerstate = useSelector((state) => state.cartReducer)
    const { cartItems } = cartreducerstate

    const dispatch = useDispatch()

    var subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)
    return (
        <div>
            <h1>Cart Screen</h1>
            <h1>{cartItems.length}</h1>
            <div className="row mt-3 justify-content-center">

                <div className="col-md-8 card text-center shadow p-3 mb-5 bg-white rounded">
                    <h2 className='text-center m-5'>MY CART</h2>
                    <table className='table table-bordered table-responsives-sm'>

                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                                <th>Delete</th>
                            </tr>
                        </thead>

                        <tbody>

                            {cartItems.map((item) => {

                                return <tr>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td><select value={item.quantity}
                                        onChange={(e) => { dispatch(addToCart(item, e.target.value)) }}
                                    >

                                        {[...Array(item.countInStock).keys()].map((x, i) => {

                                            return <option value={i + 1}>{i + 1}</option>

                                        })}

                                    </select>
                                    </td>
                                    <td>{item.quantity * item.price}</td>
                                    <td><i style={{ color: 'red', cursor: "pointer" }} className="far fa-trash-alt"
                                        onClick={() => { dispatch(deleteFromCart(item)) }}
                                    ></i></td>
                                </tr>

                            })}

                        </tbody>

                    </table>

                    <hr />


                    <h2 className='text-center'>SubTotal : {subtotal} RS/-</h2>

                    <hr />


                    <div className='text-center'>
                        <button className='btn btn-dark'>Pay Now</button>
                    </div>


                </div>

            </div>

        </div>
    )
}

export default CartScreen
