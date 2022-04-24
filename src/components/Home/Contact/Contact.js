import styles from './contact.module.scss'
import Decoration from "../../../assets/Decoration.svg";
import iconFb from '../../../assets/Facebook.svg'
import iconInsta from '../../../assets/Instagram.svg'
import Button from "../../Button";

const Contact = () => {
    const {contact, img, info, infoForm, form, button, footer} = styles;
    return (
        <>
            <section className={contact} id="contact">
                <span className={img}/>
                <div className={infoForm}>
                    <div className={info}>
                        <h1>Skontaktuj się z nami</h1>
                        <img src={Decoration} alt="Decoration"/>
                    </div>
                    <div className={form}>

                    </div>
                    <div className={button}>
                        <Button>Wyślij</Button>
                    </div>
                </div>
            </section>
            <section className={footer}>
                <p>Copyright by Coders Lab</p>
                <div>
                    <a href="https://www.facebook.com"><img src={iconFb} alt="facebook"/></a>
                    <a href="https://www.instagram.com"><img src={iconInsta} alt="instagram"/></a>
                </div>
            </section>
        </>
    )
}

export default Contact