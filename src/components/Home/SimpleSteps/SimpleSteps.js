import styles from './simpleSteps.module.scss';
import Decoration from "../../../assets/Decoration.svg";
import icon1 from "../../../assets/Icon-1.svg";
import icon2 from "../../../assets/Icon-2.svg";
import icon3 from "../../../assets/Icon-3.svg";
import icon4 from "../../../assets/Icon-4.svg";
import Button from "../../Button";

const SimpleSteps = () => {

    const {simple_steps, background, boxes, box, line, btn} = styles;
    return (
        <section className={simple_steps} id='simple_steps'>
            <h1>Wystarczą 4 proste kroki</h1>
            <img src={Decoration} alt="Decoration"/>
            <div className={background}>
                <div className={boxes}>
                    <div className={box}>
                        <img src={icon1} alt="icon"/>
                        <h3>Wybierz rzeczy</h3>
                        <div className={line}></div>
                        <p>ubrania, zabawki, sprzęt i inne</p>
                    </div>
                    <div className={box}>
                        <img src={icon2} alt="icon"/>
                        <h3>Spakuj je</h3>
                        <div className={line}></div>
                        <p>skorzystaj z worków na śmieci</p>
                    </div>
                    <div className={box}>
                        <img src={icon3} alt="icon"/>
                        <h3>Zdecyduj komu chcesz pomóc</h3>
                        <div className={line}></div>
                        <p>wybierz zaufane miejsce</p>
                    </div>
                    <div className={box}>
                        <img src={icon4} alt="icon"/>
                        <h3>Zamów kuriera</h3>
                        <div className={line}></div>
                        <p>kurier przyjedzie w dogodnym terminie</p>
                    </div>
                </div>
            </div>
            <Button className={btn}>oddaj rzeczy</Button>
        </section>
    )
}

export default SimpleSteps;