import * as Scroll from 'react-scroll';
import styles from './homeHeader.module.scss'
import Decoration from '../../assets/Decoration.svg'

const HomeHeader = () => {
    let Link = Scroll.Link;
    const {homeHeader, photo, opening, nav, nav__login, log, links, title, buttons} = styles;

    return (
        <section className={homeHeader} id="home">
            <div className={photo}>
            </div>
            <div className={opening}>
                <div className={nav}>
                    <div className={nav__login}>
                        <Link className={log} activeClass="active" to="test1" spy={true} smooth={true} offset={50}
                              duration={500}>
                            Zaloguj
                        </Link>
                        <Link className={log} activeClass="active" to="test1" spy={true} smooth={true} offset={50}
                              duration={500}>
                            Załóż konto
                        </Link>
                    </div>
                    <ul className={links}>
                        <a href="/home">Start</a>
                        <a href="/home">O co chodzi?</a>
                        <a href="/home">O nas</a>
                        <a href="/home">Fundacja i organizacje</a>
                        <a href="/home">Kontakt</a>
                    </ul>
                </div>
                <div className={title}>
                    <h1>Zacznij pomagać!</h1>
                    <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <img src={Decoration} alt="Decoration"/>
                    <div className={buttons}>
                        <button>oddaj rzeczy</button>
                        <button>zorganizuj zbiórkę</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeHeader;