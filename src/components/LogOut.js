import React from 'react';
import '../scss/main.scss'
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import Decoration from "../assets/Decoration.svg";
import Button from "./Button";

const LogOut = () => {
    return (
        <section className='log_out'>
            <Link to={"/"} className='nav'>
                <FontAwesomeIcon icon={faXmark} className='x_mark'/>
            </Link>
            <div className='thanks'>
                <h1>Wylogowano nastąpiło pomyślnie!</h1>
                <img src={Decoration} alt="Decoration"/>
                <Link to={"/"}><Button>Strona główna</Button></Link>
            </div>
        </section>
    )
}

export default LogOut;