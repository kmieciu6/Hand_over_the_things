import styles from './helps.module.scss'
import Decoration from "../../../assets/Decoration.svg";

const Helps = () => {

    const {helps} = styles;
    return (
        <section className={helps} id='helps'>
            <h1>Komu pomagamy?</h1>
            <img src={Decoration} alt="Decoration"/>

        </section>
    )
}

export default Helps