import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../actions/userActions';

function Navbar() {

    const dispatch = useDispatch();
    const cartReducer = useSelector((state) => state.cartReducer)

    const { cartItems } = cartReducer
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Let's Shop</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav ms-auto">
                            {currentUser ? (
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i style={{ color: 'white' }} className="fa fa-user" aria-hidden="true"></i> {currentUser.name}
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="/profile">Profile</a></li>
                                        <li><a className="dropdown-item" href="/orders">Orders</a></li>
                                        <li><a className="dropdown-item" onClick={() => { dispatch(logoutUser()) }}>Logout <i class="fas fa-sign-out-alt"></i></a></li>
                                    </ul>
                                </div>
                            ) : (
                                <li className="nav-item">
                                    <a className="nav-link" href="/login">
                                        Login
                                    </a>
                                </li>
                            )}
                            <li className="nav-item">
                                <a className="nav-link active" href="/cart"><i className="fa-solid fa-cart-shopping"></i>
                                    {cartItems.length}
                                </a>
                            </li>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
