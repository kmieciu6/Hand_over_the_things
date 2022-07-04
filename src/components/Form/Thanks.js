import '../../scss/main.scss'
import Button from "../Button";
import Decoration from "../../assets/Decoration.svg";
import {Link} from "react-router-dom";
import React from 'react';

const Thanks = () => {
    return (
        <section className='thanks'>
            <div>
                <p>Dziękujemy za przesłanie formularza.
                    <br/> Na maila prześlemy wszelkie
                    <br/> informacje o odbiorze</p>
                <img src={Decoration} alt="Decoration"/>
                <Link to={"/"}><Button>Strona główna</Button></Link>
            </div>
        </section>
    );
}

export default Thanks;