import styles from './login_signUp.module.scss'
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons"
import Decoration from "../../assets/Decoration.svg";
import Button from "../Button";

const SignUp = () => {
    const {sign_up, nav, form, x_mark} = styles;
    return (
        <section className={sign_up}>
            <Link to={"/Home"} className={nav}>
                <FontAwesomeIcon icon={faXmark} className={x_mark}/>
            </Link>
            <div className={form}>
                <h1>Załóż konto</h1>
                <img src={Decoration} alt="Decoration"/>
                <div>

                </div>
                <div>
                    <Link to={"/Login"}><Button>Zaloguj się</Button></Link>
                    <Link to={"/SignUp"}><Button>Załóż konto</Button></Link>
                </div>
            </div>
        </section>
    )
}

export default SignUp;