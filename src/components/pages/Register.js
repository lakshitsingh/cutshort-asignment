import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRegistration, setRegistration } from '../../store/registrationSlice'
import { AUTHSTATUSES, setAuth, setLink } from '../../store/authSlice'
import { useNavigate } from 'react-router-dom'
import { fetchUsers } from '../../store/userSlice'

const Register = () => {
  const [userRegistration, setUserRegistrantion] = useState({
    name: "",
    email: "",
    password: "",
    cPassword: ""
  })
  const [user, setUser] = useState([])
  const { data: users } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {

    //Get all user from server to avoid duplicate registration
    dispatch(fetchUsers())
  }, [])

  //set input data

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserRegistrantion({ ...userRegistration, [name]: value })
  }

  //Verify user data & register new entry in server

  const handleForm = (e) => {
    e.preventDefault();
    const newUser = { ...userRegistration, id: new Date().getTime().toString() }
    console.log(users)

    if (newUser.password === newUser.cPassword) {
      for (let i = 0; i < users.length; i++) {
        if (newUser.email === users[i].email) {
          alert("Email allready registered")
          break;
        }
        if (i === users.length - 1) {
          setUser(user.push(newUser))
          console.log(user)
          dispatch(setRegistration(user));
          dispatch(fetchRegistration())
          dispatch(setAuth(AUTHSTATUSES.LOGOUT))
          dispatch(setLink(AUTHSTATUSES.LOGOUTLINK))

          alert('Registered SuccessFully');
          navigate('/')
        }
      }
    }
    else {
      alert("Password not matching");
    }

  }


  return (
    <>
      <div className="col-md-10 col-lg-5 col-xl-5">

        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

        <form className="mx-1 mx-md-4" onSubmit={handleForm}>

          <div className="d-flex flex-row align-items-center mb-4">
            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
            <div className="form-outline flex-fill mb-0">
              <input required type="text" id="form3Example1c" className="form-control" name="name" value={userRegistration.name} onChange={handleInput} />
              <label className="form-label" htmlFor="form3Example1c">Your Name</label>
            </div>
          </div>

          <div className="d-flex flex-row align-items-center mb-4">
            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
            <div className="form-outline flex-fill mb-0">
              <input required type="email" id="form3Example3c" className="form-control" name="email" value={userRegistration.email} onChange={handleInput} />
              <label className="form-label" htmlFor="form3Example3c">Your Email</label>
            </div>
          </div>

          <div className="d-flex flex-row align-items-center mb-4">
            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
            <div className="form-outline flex-fill mb-0">
              <input required type="password" id="form3Example4c" className="form-control" name="password" value={userRegistration.password} onChange={handleInput} />
              <label className="form-label" htmlFor="form3Example4c">Password</label>
            </div>
          </div>

          <div className="d-flex flex-row align-items-center mb-4">
            <i className="fas fa-key fa-lg me-3 fa-fw"></i>
            <div className="form-outline flex-fill mb-0">
              <input required type="password" id="form3Example4cd" className="form-control" name="cPassword" value={userRegistration.cPassword} onChange={handleInput} />
              <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
            </div>
          </div>

          <div className="form-check d-flex justify-content-center mb-5">
            <input required className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
            <label className="form-check-label" htmlFor="form2Example3">
              I agree all statements in <a href="/terms">Terms of service</a>
            </label>
          </div>

          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
            <button type="submit" className="btn btn-primary btn-lg">Register</button>
          </div>

        </form>

      </div>

    </>
  )
}

export default Register