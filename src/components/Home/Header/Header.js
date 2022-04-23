import React from "react";
import {Link as Scroll} from 'react-scroll';
import styles from './header.module.scss'
import Decoration from '../../../assets/Decoration.svg';
import Button from '../../Button';
import {Link} from 'react-router-dom'


const Header = () => {
    const {homeHeader, photo, opening, nav, nav__login, links, title, buttons} = styles;
    return (
        <section className={homeHeader} id="home">
            <div className={photo}>
            </div>
            <div className={opening}>
                <div className={nav}>
                    <div className={nav__login}>
                        <Link to={"/login"}>
                            Zaloguj
                        </Link>
                        <Link to={"/signup"}>
                            Załóż konto
                        </Link>
                    </div>
                    <ul className={links}>
                        <Scroll to={"home"} smooth duration={500}>Start</Scroll>
                        <Scroll to={"simple_steps"} smooth duration={500}>O co chodzi?</Scroll>
                        <Scroll to={"about"} smooth duration={500}>O nas</Scroll>
                        <Scroll to={"helps"} smooth duration={500}>Fundacja i organizacje</Scroll>
                        <Scroll to={"home"} smooth duration={500}>Kontakt</Scroll>
                    </ul>
                </div>
                <div className={title}>
                    <h1>Zacznij pomagać!</h1>
                    <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <img src={Decoration} alt="Decoration"/>
                    <div className={buttons}>
                        <Button>oddaj rzeczy</Button>
                        <Button>zorganizuj zbiórkę</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header;