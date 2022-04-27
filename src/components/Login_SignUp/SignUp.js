import styles from './login_signUp.module.scss'
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons"
import Decoration from "../../assets/Decoration.svg";
import Button from "../Button";
import React from 'react'

const SignUp = () => {
    const {sign_up, nav, nav_form, x_mark, form_label, buttons} = styles;

    return (
        <section className={sign_up}>
            <Link to={"/"} className={nav}>
                <FontAwesomeIcon icon={faXmark} className={x_mark}/>
            </Link>
            <div className={nav_form}>
                <h1>Załóż konto</h1>
                <img src={Decoration} alt="Decoration"/>
                <form>
                    <div className={form_label}>
                        <label>
                            <h4>Email</h4>
                            <input type="email" name="email" placeholder="jan.kowalski@xyz.com"/>
                            <h4>Hasło</h4>
                            <input type="password" name="password"/>
                            <h4>Powtórz hasło</h4>
                            <input type="password" name="password"/>
                        </label>
                    </div>
                    <div className={buttons}>
                        <Link to={"/Login"}><Button>Zaloguj się</Button></Link>
                        <Button type="submit">Załóż konto</Button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default SignUp;