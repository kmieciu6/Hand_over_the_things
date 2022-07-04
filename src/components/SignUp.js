import '../scss/main.scss'
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons"
import Decoration from "../assets/Decoration.svg";
import Button from "./Button";
import React from 'react'
import {useState} from "react";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRep, setPasswordRep] = useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const _errors = [];

        if (email.length < 3 || email.indexOf("@") === -1) {
            _errors.email = "Podany email jest nieprawidłowy!";
            _errors.password = "Podany email jest nieprawidłowy!";
            _errors.passwordRep = "Podany email jest nieprawidłowy!";
        }

        if (password.length < 5) {
            _errors.password = "Podane hasło jest za krótkie!";
        }

        if (passwordRep !== password) {
            _errors.passwordRep = "Podane hasło nie jest takie samo!";
        }

        setErrors(_errors);
        if (Object.values(_errors).length > 0) {
            return false;
        }
    };

    return (
        <section className='sign_up'>
            <Link to={"/"} className='nav'>
                <FontAwesomeIcon icon={faXmark} className='x_mark'/>
            </Link>
            <form onSubmit={handleSubmit} className='nav_form'>
                <h1>Załóż konto</h1>
                <img src={Decoration} alt="Decoration"/>
                <div className='form_label'>
                    <label>
                        <h4>Email</h4>
                        <input type="email" placeholder='jan.kowalski@gmail.pl' name="email"
                               placeholder="jan.kowalski@xyz.com" value={email}
                               onChange={e => setEmail(e.target.value)}/>
                        {errors.email && <p className='error'>{errors.email}</p>}
                        <h4>Hasło</h4>
                        <input type="password" placeholder='*****' name="password" value={password}
                               onChange={e => setPassword(e.target.value)}/>
                        {errors.password && <p className='error'>{errors.password}</p>}
                        <h4>Powtórz hasło</h4>
                        <input type="password" placeholder='*****' name="passwordRep" value={passwordRep}
                               onChange={e => setPasswordRep(e.target.value)}/>
                        {errors.passwordRep && <p className='error'>{errors.passwordRep}</p>}
                    </label>
                </div>
                <div className='buttons'>
                    <Link to={"/Login"}><Button>Zaloguj się</Button></Link>
                    <Button type="submit">Załóż konto</Button>
                </div>
            </form>
        </section>
    )
}

export default SignUp;