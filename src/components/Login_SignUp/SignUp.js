import styles from './login_signUp.module.scss'
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons"
import Decoration from "../../assets/Decoration.svg";
import Button from "../Button";

const SignUp = () => {
    const {sign_up, nav, form, x_mark, buttons} = styles;
    return (
        <section className={sign_up}>
            <Link to={"/Home"} className={nav}>
                <FontAwesomeIcon icon={faXmark} className={x_mark}/>
            </Link>
            <div className={form}>
                <h1>Załóż konto</h1>
                <img src={Decoration} alt="Decoration"/>
                <form>
                    <label>
                        <h3>Imię</h3>
                        <input type="name" name="name" placeholder="Jan"/>
                        <h3>Email</h3>
                        <input type="email" name="email" placeholder="jan.kowalski@gmail.com"/>
                        <h3>Hasło</h3>
                        <input type="password" name="password"/>
                        <h3>Powtórz hasło</h3>
                        <input type="password" name="password"/>
                    </label>
                </form>
                <div className={buttons}>
                    <Link to={"/Login"}><Button>Zaloguj się</Button></Link>
                    <Link to={"/SignUp"}><Button>Załóż konto</Button></Link>
                </div>
            </div>
        </section>
    )
}

export default SignUp;