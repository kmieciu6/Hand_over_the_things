import styles from './login_signUp.module.scss'
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons"
import Decoration from "../../assets/Decoration.svg";
import Button from "../Button";
import React from "react";

const validate = form => {
    if (!form.email) {
        return "Podany email jest nieprawidłowy!"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]\.[A-Z]{2,4}$/i.test(form.email)) {
        return "Zły email"
    }

    if (!form.password) {
        return "Hasło jest wymagane"
    } else if (form.password.length < 5) {
        return "Hasło jest za krótkie"
    }

    return "Logowanie poprawne"
}


const Login = () => {
    const {login, nav, nav_form, x_mark, form_label, buttons, button} = styles;

    const [error, setError] = React.useState(null);
    const [form, setForm] = React.useState({
        name: '',
        email: '',
        password: ''
    });

    const updateField = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handlSubmit = async (e) => {
        e.preventDefault()
        const errorMsg = validate(form)
        if (errorMsg) {
            setError(errorMsg)
            console.log('błąd')
            return ""
        }
        console.log('form submitted', form)
    }

    return (
        <section className={login}>
            <Link to={"/"} className={nav}>
                <FontAwesomeIcon icon={faXmark} className={x_mark}/>
            </Link>
            <div className={nav_form}>
                <h1>Zaloguj się</h1>
                <img src={Decoration} alt="Decoration"/>
                <form onSubmit={handlSubmit}>
                    <div className={form_label}>
                    <label>
                        <h4>Email</h4>
                        <input type="email" name="email" placeholder="jan.kowalski@xyz.com" onChange={updateField}/>
                        <h4>Hasło</h4>
                        <input type="password" name="password" onChange={updateField}/>
                    </label>
                    </div>
                    <div className={buttons}>
                        <Link to={"/SignUp"}><Button>Załóż konto</Button></Link>
                        <input type="submit" value="Zaloguj się" className={button}/>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Login;