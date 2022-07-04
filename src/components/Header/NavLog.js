import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from "../../firebase-config";
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import '../../scss/main.scss';
import { useDispatch } from 'react-redux';
import { deleteLog } from '../../Redux/actions/logActions'

const NavLog = () => {

    const {log} = useSelector(state => state);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const logout = async () => {
        dispatch(deleteLog({email: log.email}))
        await signOut(auth);
        navigate("/LogOut");
    };

    return (
        <div className='nav__login'>
            {log.length > 0 && <p className='userID'>{log[0].email}</p>}
            {log.length > 0 && <button className='log' onClick={logout}>Wyloguj</button>}
            {log.length < 1 && <Link className='log' to="/Login">Zaloguj</Link>}
            {log.length < 1 && <Link className='log' to="/SignUp">Zarejestruj</Link>}
        </div>
    )
}

export default NavLog;
