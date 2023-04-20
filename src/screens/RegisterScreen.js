import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { registerNewUser } from '../actions/userActions';
import Success from '../components/Success';
import Error from '../components/Error';
import Loader from '../components/Loader';

function RegisterScreen() {

    const registerstate = useSelector(state => state.registerNewUserReducer)
    const { loading, error, success } = registerstate

    const dispatch = useDispatch()

    const [name, setname] = useState("");
    const [email, setemail] = useState("");

    const [password, setpassword] = useState("");
    const [cpassword, setcpassword] = useState("");
    function register(e) {

        e.preventDefault()

        const user = {
            name: name,
            email: email,
            password: password
        }

        if (password == cpassword) {

            dispatch(registerNewUser(user))
        }
        else {
            alert('passwords not matched')
        }

    }
    return (
        <div>
            <div className='row justify-content-center m-1'>
                <div className='col-md-5 card p-3 shadow p-3 mb-2 bg-white rounded' style={{ marginTop: "100px" }}>
                    <div className='div'>
                        <h2 className="text-center m-3">Register Screen</h2>
                        {error && (<Error error="Something went Wrong..." />)}
                        {loading && (<Loader />)}
                        {success && (<Success success="You have registered Successfully, Click on login to continue" />)}
                        <form onSubmit={register}>
                            <input
                                type="text"
                                placeholder="name"
                                className="form-control"
                                required
                                value={name}
                                onChange={(e) => {
                                    setname(e.target.value);

                                }}
                            />
                            <br />
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
                            <br />
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
                            <br />
                            <input
                                type="password"
                                placeholder="confirm password"
                                className="form-control"
                                value={cpassword}
                                required
                                onChange={(e) => {
                                    setcpassword(e.target.value);
                                }}
                            />
                            <br />
                            <div className="text-right">
                                <button type='submit' className="btn btn-dark mt-3">
                                    REGISTER
                                </button>
                            </div>
                        </form>
                    </div>
                    <a style={{ color: 'black' }} href="/login" className='m-3'>Click Here To Login</a>
                </div>
            </div>
        </div>
    )
}

export default RegisterScreen
