import styles from './login_signUp.module.scss'
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons"
import Decoration from "../../assets/Decoration.svg";
import Button from "../Button";

const Login = () => {
    const {login, nav, form, x_mark} = styles;
    return (
        <section className={login}>
            <Link to={"/Home"} className={nav}>
                <FontAwesomeIcon icon={faXmark} className={x_mark}/>
            </Link>
            <div className={form}>
                <h1>Zaloguj się</h1>
                <img src={Decoration} alt="Decoration"/>
                <div>

                </div>
                <div>
                    <Link to={"/SignUp"}><Button>Załóż konto</Button></Link>
                    <Link to={"/Home"}><Button>Zaloguj się</Button></Link>
                </div>
            </div>
        </section>
    )
}

export default Login;