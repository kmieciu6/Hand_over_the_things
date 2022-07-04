import React from "react";
import {Link as Scroll} from 'react-scroll';
import '../../scss/main.scss'
import Decoration from '../../assets/Decoration.svg';
import Button from '../Button';
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowUp} from '@fortawesome/free-solid-svg-icons'
import NavLog from "./NavLog"
import {useSelector} from 'react-redux';

const Header = () => {
    const {log} = useSelector(state => state);

    return (
        <section className='homeHeader' id="home">
            <div className='photoHome'/>
            <div className='opening'>
                <div className='nav'>
                    <NavLog/>
                    <ul className='links'>
                        <Scroll to={"home"} smooth duration={500}>Start</Scroll>
                        <Scroll to={"simple_steps"} smooth duration={500}>O co chodzi?</Scroll>
                        <Scroll to={"about"} smooth duration={500}>O nas</Scroll>
                        <Scroll to={"organisation"} smooth duration={500}>Fundacja i organizacje</Scroll>
                        <Scroll to={"contact"} smooth duration={500}>Kontakt</Scroll>
                    </ul>
                </div>
                <div className='title'>
                    <h1>Zacznij pomagać!</h1>
                    <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <img src={Decoration} alt="Decoration"/>
                    <div className='buttons'>
                        {log.length > 0 ? <Link to="/Form"><Button>Oddaj rzeczy</Button></Link> :
                            <Link to="/Login"><Button>Oddaj rzeczy</Button></Link>}
                        {log.length > 0 ? <Link to="/Form"><Button>Zorganizuj zbiórkę</Button></Link> :
                            <Link to="/Login"><Button>Zorganizuj zbiórkę</Button></Link>}
                    </div>
                </div>
            </div>
            <Scroll to={"home"} smooth duration={500}>
                <FontAwesomeIcon icon={faArrowUp} className='arrow'/>
            </Scroll>
        </section>
    )
}

export default Header;