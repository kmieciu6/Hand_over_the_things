import styles from './contact.module.scss'
import Decoration from "../../../assets/Decoration.svg";
import iconFb from '../../../assets/Facebook.svg'
import iconInsta from '../../../assets/Instagram.svg'
import React, {useState} from "react";
import Button from "../../Button";


const Contact = () => {
    const {contact, img, info, infoForm, data, suc, button, textarea, footer} = styles;

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        const _errors = [];

        if (name.length < 2) {
            _errors.name = "Podane imię jest nieprawidłowe!";
        }

        if (email.length < 3 || email.indexOf("@") === -1) {
            _errors.email = "Podany email jest nieprawidłowy!";
        }

        if (message.length < 120) {
            _errors.message = "Wiadomość musi mieć conajmniej 120 znaków!";
        }

        setErrors(_errors);
        setSuccess(false);
        if (Object.values(_errors).length > 0) {
            return false;
        }

        const obj = {
            name,
            email,
            message
        };

        fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Błąd sieci!");
                }
            })
            .then(data => {
                if (data.status === "success") {
                    setSuccess(true);
                }
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <>
            <section className={contact} id="contact">
                <span className={img}/>
                <div className={infoForm}>
                    <div className={info}>
                        <h1>Skontaktuj się z nami</h1>
                        <img src={Decoration} alt="Decoration"/>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className={suc}>
                            {success && <h2>Wiadomość została wysłana! Wkrótce się skontaktujemy.</h2>}
                        </div>
                        <div className={data}>
                            <div>
                                <h4>Wpisz swoje imię</h4>
                                <input type="text" name="name" placeholder="Jan" value={name}
                                       onChange={e => setName(e.target.value)}/>
                                {errors.name && <p >{errors.name}</p>}
                            </div>
                            <div>
                                <h4>Wpisz swój email</h4>
                                <input type="text" name="email" placeholder="jan.kowalski@xyz.com"
                                       value={email} onChange={e => setEmail(e.target.value)}/>
                                {/*{errors.map(error => <p key={error}>{error}</p>)}*/}
                            </div>
                        </div>
                        <div className={textarea}>
                            <h4>Wpisz swoją wiadomość</h4>
                            <textarea name="text" cols={3} rows={3} onChange={e => setMessage(e.target.value)}
                                      placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                   sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                   nisi ut aliquip ex ea commodo consequat."/>
                            {/*{errors.map(error => <p key={error}>{error}</p>)}*/}
                        </div>
                        <div className={button}>
                            <Button type="submit">Wyślij</Button>
                        </div>
                    </form>
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