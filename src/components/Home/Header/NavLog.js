import React, {useState} from "react";
import styles from "./header.module.scss"
import {Link} from "react-router-dom";

// Usage
const NavLog = () => {
    const {nav__login, log} = styles;

    // Similar to useState but first arg is key to the value in local storage.
    const [name, setName] = useLocalStorage("name", "");
    return (
        <div>
            <div className={nav__login}>
                {/*<div className={logOut}>*/}
                <Link to={"/Login"} className={log}>
                    Zaloguj
                </Link>
                <Link to={"/SignUp"} className={log}>
                    Załóż konto
                </Link>
                {/*</div>*/}
                {/*<div className={logIn}>*/}
                <h2>k</h2>
                <Link to={"/LogOut"} className={log}>
                    Wyloguj
                </Link>
                {/*</div>*/}
            </div>

            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>
    );
}

// Hook
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

export default NavLog;
