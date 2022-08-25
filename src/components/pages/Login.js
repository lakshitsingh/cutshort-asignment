import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// import module from store
import { fetchUsers } from '../../store/userSlice'
import { AUTHSTATUSES, setAuth, setLink } from '../../store/authSlice'


import { useNavigate } from 'react-router-dom'

import Register from './Register'

const Login = () => {
    
    const [cred, setCred] = useState({
        email: '',
        password: ''
    })
    const dispatch = useDispatch();
    const { data: user } = useSelector((state) => state.user);
    const navigate = useNavigate();

    useEffect(() => {

        // getting all user data from server

        dispatch(fetchUsers());
    }, [])

    // set input data
    const handleInput = (e) => {
        e.preventDefault();

        const name = e.target.name;
        const value = e.target.value;

        setCred({ ...cred, [name]: value })
    }

    // varify user data with server data & access to login

    const handleSubmit = (e) => {
        e.preventDefault();

        for (let i = 0; i < user.length; i++) {
            if (user[i].email === cred.email && user[i].password === cred.password) {
                alert("Logged in");
                dispatch(setAuth(AUTHSTATUSES.LOGOUT))
                dispatch(setLink(AUTHSTATUSES.LOGOUTLINK))
                navigate('/');
                break;
            }
            if (i === user.length - 1) {
                alert("invalid Credentials");
            }
        }
    }


    return (
        <div className='conatainer'>
            <div className='row'>
                <div className="col-md-10 col-lg-5 col-xl-5">

                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>
                    <form onSubmit={handleSubmit}>

                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                                <input required type='email' value={cred.email} name="email" onChange={handleInput} placeholder='Enter Email' /><br />
                                <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                            </div>
                        </div>



                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                                <input required type='password' value={cred.password} name="password" onChange={handleInput} placeholder='Enter Password' /><br />
                                <label className="form-label" htmlFor="form3Example4c">Password</label>
                            </div>
                        </div>

                        <div>
                            <button type='submit' className="btn btn-primary btn-lg">Login</button>
                        </div>
                    </form>
                </div>
                <div className='col-2 align-self-center'><h1>OR</h1></div>
                <Register />
            </div>
        </div>
    )
}

export default Login