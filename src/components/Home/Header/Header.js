import React from "react";
import {Link as Scroll} from 'react-scroll';
import styles from './header.module.scss'
import Decoration from '../../../assets/Decoration.svg';
import Button from '../../Button';
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowUp} from '@fortawesome/free-solid-svg-icons'
import NavLog from "./NavLog"

// import ReactDOM from 'react-dom';
//
// import {useState, useEffect} from "react";
// import LocalStorage from "./LocalStorage";
// import Login from "../../Login_SignUp/Login";

const Header = () => {
    const {homeHeader, photo, opening, nav, links, title, buttons, arrow} = styles;

    return (
        <section className={homeHeader} id="home">
            <div className={photo}/>
            <div className={opening}>
                <div className={nav}>
                    <NavLog/>
                    <ul className={links}>
                        <Scroll to={"home"} smooth duration={500}>Start</Scroll>
                        <Scroll to={"simple_steps"} smooth duration={500}>O co chodzi?</Scroll>
                        <Scroll to={"about"} smooth duration={500}>O nas</Scroll>
                        <Scroll to={"helps"} smooth duration={500}>Fundacja i organizacje</Scroll>
                        <Scroll to={"contact"} smooth duration={500}>Kontakt</Scroll>
                    </ul>
                </div>
                <div className={title}>
                    <h1>Zacznij pomagać!</h1>
                    <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <img src={Decoration} alt="Decoration"/>
                    <div className={buttons}>
                        <Link to={"/Login"}><Button>oddaj rzeczy</Button></Link>
                        <Link to={"/Login"}><Button>zorganizuj zbiórkę</Button></Link>
                    </div>
                </div>
            </div>
            <Scroll to={"home"} smooth duration={500}>
                <FontAwesomeIcon icon={faArrowUp} className={arrow}/>
            </Scroll>
        </section>
    )
}

export default Header;