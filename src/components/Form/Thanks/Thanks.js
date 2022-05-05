import styles from './thanks.module.scss'
import Button from "../../Button";
import Decoration from "../../../assets/Decoration.svg";
import {Link} from "react-router-dom";

const Thanks = () => {
    const {thanks} = styles;
    return (
        <section className={thanks}>
            <form>
                <h1>Dziękujemy za przesłanie formularza Na maila prześlemy wszelkie informacje o odbiorze.</h1>
                <img src={Decoration} alt="Decoration"/>
                <Link to={"/"}><Button>Strona główna</Button></Link>
            </form>
        </section>
    )
}

export default Thanks;