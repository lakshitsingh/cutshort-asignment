import { useEffect } from 'react'
import { AUTHSTATUSES, setAuth, setLink } from '../../store/authSlice'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(setAuth(AUTHSTATUSES.LOGIN));
    dispatch(setLink(AUTHSTATUSES.LOGINLINK));
    alert("Log Out Successfully");
    navigate('/');
  }, [])
}

export default Logout