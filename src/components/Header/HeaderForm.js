import React from "react";
import '../../scss/main.scss'
import {Link as Scroll} from 'react-scroll';
import Decoration from '../../assets/Decoration.svg';
// import Button from '../../Button';
// import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowUp} from '@fortawesome/free-solid-svg-icons'
import NavLog from "./NavLog"
import {Link} from "react-router-dom";

// import ReactDOM from 'react-dom';
//
// import {useState, useEffect} from "react";
// import LocalStorage from "./LocalStorage";
// import Login from "../../Login_SignUp/Login";

const HeaderForm = () => {
    return (
        <section className='homeHeader' id="home">
            <div className='photoForm'/>
            <div className='opening'>
                <div className='nav'>
                    <NavLog/>
                    <ul className='links'>
                        <Link to={"/"}>Start</Link>
                        <Link to={"/"}>O co chodzi?</Link>
                        <Link to={"/"}>O nas</Link>
                        <Link to={"/"}>Fundacja i organizacje</Link>
                        <Scroll to={"contact"} smooth duration={500}>Kontakt</Scroll>
                    </ul>
                </div>
                <div className='title'>
                    <h1>Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM</h1>
                    <img src={Decoration} alt="Decoration"/>
                    <h3>Wystarczą 4 proste kroki:</h3>
                    <div className='steps'>
                        <span className='square'>
                            <div className='text'>
                                <h4>1</h4>
                                <p>Wybierz rzeczy</p>
                            </div>
                        </span>
                        <span className='square'>
                            <div className='text'>
                                <h4>2</h4>
                                <p>Spakuj je w worki</p>
                            </div>
                        </span>
                        <span className='square'>
                            <div className='text'>
                                <h4>3</h4>
                                <p>Wybierz fundację</p>
                            </div>
                        </span>
                        <span className='square'>
                            <div className='text'>
                                <h4>4</h4>
                                <p>Zamów kuriera</p>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
            <Scroll to={"home"} smooth duration={500}>
                <FontAwesomeIcon icon={faArrowUp} className='arrow'/>
            </Scroll>
        </section>
    )
}

export default HeaderForm;