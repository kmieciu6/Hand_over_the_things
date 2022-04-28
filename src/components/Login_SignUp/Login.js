import styles from './login_signUp.module.scss'
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons"
import Decoration from "../../assets/Decoration.svg";
import Button from "../Button";
import React from "react";
import {useState} from "react";

const Login = () => {
    const {login, nav, nav_form, x_mark, form_label, error, buttons} = styles;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const _errors = [];

        if (email.length < 3 || email.indexOf("@") === -1) {
            _errors.email = "Podany email jest nieprawidłowy!";
        }

        if (password.length < 5) {
            _errors.password = "Podane hasło jest za krótkie!";
        }

        setErrors(_errors);
        if (Object.values(_errors).length > 0) {
            return false;
        }
    };

    return (
        <section className={login}>
            <Link to={"/"} className={nav}>
                <FontAwesomeIcon icon={faXmark} className={x_mark}/>
            </Link>
            <div className={nav_form}>
                <h1>Zaloguj się</h1>
                <img src={Decoration} alt="Decoration"/>
                <form onSubmit={handleSubmit}>
                    <div className={form_label}>
                        <label>
                            <h4>Email</h4>
                            <input type="email" name="email" placeholder="jan.kowalski@xyz.com" value={email}
                                   onChange={e => setEmail(e.target.value)}/>
                            {errors.email && <p className={error}>{errors.email}</p>}
                            <h4>Hasło</h4>
                            <input type="password" name="password" value={password}
                                   onChange={e => setPassword(e.target.value)}/>
                            {errors.password && <p className={error}>{errors.password}</p>}
                        </label>
                    </div>
                    <div className={buttons}>
                        <Link to={"/SignUp"}><Button>Załóż konto</Button></Link>
                        <Button type="submit">Zaloguj się</Button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Login;