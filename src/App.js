import React from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {auth} from "./firebase-config";
import './scss/main.scss';
import Home from './components/Home'
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import LogOut from "./components/LogOut";
import Form from "./components/Form"
import {useSelector} from 'react-redux';

const App = () => {

    const {app} = useSelector(state => state);
    const {log} = useSelector(state => state);
    const history = useNavigate()

    const register = async (credentialns) => {
        console.log(credentialns)
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                credentialns.email,
                credentialns.password
            );
            console.log(user)
            if (user) {
                await signOut(auth);
                history("/login")
            }
            //console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    }

    const login = async () => {
        try {
            const userLog = await signInWithEmailAndPassword(
                auth,
                log[0].email,
                log[0].password
            );
            //console.log(userLog);
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/Login" element={<Login loginUser={login}/>}/>
            <Route path="/SignUp" element={<SignUp registerUser={register}/>}/>
            <Route path="/LogOut" element={<LogOut/>}/>
            <Route path="/Form" element={<Form/>}/>
        </Routes>
    );
}

export default App;