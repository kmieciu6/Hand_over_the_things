import styles from './contact.module.scss'
import Decoration from "../../../assets/Decoration.svg";
import iconFb from '../../../assets/Facebook.svg'
import iconInsta from '../../../assets/Instagram.svg'
import React, {useEffect, useState} from "react";

const validate = form => {
    if (!form.name) {
        return "Podane imie jest nieprawidłowe!"
    } else if (form.name.length < 2) {
        return "Imie jest za krótkie"
    }

    if (!form.email) {
        return "Podany email jest nieprawidłowy!"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]\.[A-Z]{2,4}$/i.test(form.email)) {
        return "Zły email"
    }

    if (!form.text) {
        return "Wiadomość musi mieć conajmniej 120 znaków"
    } else if (form.text.length < 120) {
        return "Wiadomość musi mieć conajmniej 120 znaków"
    }

    return "Wiadomość została wysłana! Wkrótce się skontaktujemy."
}

const Contact = () => {
    const {contact, img, info, infoForm, data, button, textarea, submit, footer} = styles;

    const [error, setError] = React.useState(null);
    const [form, setForm] = React.useState({
        name: '',
        email: '',
        text: ''
    });

    const updateField = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handlSubmit = async (e) => {
        e.preventDefault()
        const errorMsg = validate(form)
        if (errorMsg) {
            setError(errorMsg)
            console.log('błąd')
            return ""
        }
        console.log('form submitted', form)
    }

    const [postId, setPostId] = useState(null);


    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({title: 'React Hooks POST Request Example'})
        };
        fetch('https://reqres.in/api/posts', requestOptions)
            .then(response => response.json())
            .then(data => setPostId(data.id));

    }, []);

    return (
        <>
            <section className={contact} id="contact">
                <span className={img}/>
                <div className={infoForm}>
                    <div className={info}>
                        <h1>Skontaktuj się z nami</h1>
                        <img src={Decoration} alt="Decoration"/>
                    </div>
                    <form onSubmit={handlSubmit}>
                        <div className={data}>
                            <div>
                                <h4>Wpisz swoje imię</h4>
                                <input type="name" name="name" placeholder="Jan" onChange={updateField}/>
                            </div>
                            <div>
                                <h4>Wpisz swój email</h4>
                                <input type="email" name="email" placeholder="jan.kowalski@xyz.com"
                                       onChange={updateField}/>
                            </div>
                        </div>
                        <div className={textarea}>
                            <h4>Wpisz swoją wiadomość</h4>
                            <textarea name="text" cols={3} rows={3} onChange={updateField}
                                      placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                   sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                   nisi ut aliquip ex ea commodo consequat."/>
                        </div>
                        <div className={submit}>
                            <input type="submit" value="Wyślij" className={button}/>
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