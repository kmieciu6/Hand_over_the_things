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

    const [email, setEmail] = useLocalStorage("email", "");
    // const [email, setEmail] = useState("");
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
                        <label htmlFor="email">
                            <h4>Email</h4>
                            <input type="email" name="email" placeholder="jan.kowalski@xyz.com" value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <p className={error}>{errors.email}</p>}
                        </label>
                        <label htmlFor="passowrd">
                            <h4>Hasło</h4>
                            <input type="password" name="password" value={password}
                                   onChange={e => setPassword(e.target.value)}/>
                            {errors.password && <p className={error}>{errors.password}</p>}
                        </label>
                    </div>
                    <div className={buttons}>
                        <Link to={"/SignUp"}><Button>Załóż konto</Button></Link>
                        <Button type="submit" >Zaloguj się</Button>
                    </div>
                </form>
            </div>
        </section>
    )
}

function useLocalStorage(key, initialValue) {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState(() => {
        if (typeof window === "undefined") {
            return initialValue;
        }
        try {
            // Get from local storage by key
            const item = window.localStorage.getItem(key);
            // Parse stored json or if none return initialValue
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            // If error also return initialValue
            console.log(error);
            return initialValue;
        }
    });
    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = (value) => {
        try {
            // Allow value to be a function so we have same API as useState
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;
            // Save state
            setStoredValue(valueToStore);
            // Save to local storage
            if (typeof window !== "undefined") {
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            }
        } catch (error) {
            // A more advanced implementation would handle the error case
            console.log(error);
        }
    };
    return [storedValue, setValue];
}

export default Login;