import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../actions/userActions';

function LoginScreen() {
    const loginreducer = useSelector(state => state.loginReducer)
    const { loading, error } = loginreducer
    const [email, setemail] = useState("");

    const [password, setpassword] = useState("");


    const dispatch = useDispatch()

    function login(e) {

        e.preventDefault()
        const user = {

            email: email,
            password: password
        }

        dispatch(loginUser(user))


    }

    useEffect(() => {

        if (localStorage.getItem('currentUser')) {
            window.location.href = '/'
        }

    }, [])

    return (
        <div>
            <div className="row justify-content-center m-3">
                <div className="col-md-4 card p-3 shadow p-3 mb-5 bg-white rounded" style={{ marginTop: "100px" }}>
                    <div className="div">
                        <h2 className="text-center m-3" style={{ display: "inline" }}>LOGIN</h2>
                        <i style={{ fontSize: '25px' }} className="fa fa-sign-in" aria-hidden="true"></i>

                        {error && (<h1>Something went wrong</h1>)}
                        {loading && (<h1>Loading...</h1>)}

                        <form onSubmit={login}>

                            <input
                                type="text"
                                placeholder="email"
                                className="form-control"
                                value={email}
                                required
                                onChange={(e) => {
                                    setemail(e.target.value);
                                }}
                            />

                            <input
                                type="password"
                                placeholder="password"
                                className="form-control"
                                value={password}
                                required
                                onChange={(e) => {
                                    setpassword(e.target.value);
                                }}
                            />



                            <div className="text-right">
                                <button type='submit' className="btn btn-dark mt-3">
                                    LOGIN
                                </button>
                            </div>
                        </form>


                    </div>

                    <a style={{ color: 'black' }} href="/register" className='mt-3'>Click Here To Register</a>
                    <br />
                    <p>Username: john@gmail.com</p>
                    <p>Password: 123456</p>
                </div>

            </div>

        </div>
    )
}

export default LoginScreen
