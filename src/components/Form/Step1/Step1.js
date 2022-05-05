import styles from './step1.module.scss'
import Button from "../../Button";

const Step1 = () => {
    const {step1, warning, buttons} = styles;
    return (
        <section className={step1}>
            <div className={warning}>
                <h2>Ważne!</h2>
                <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je
                    przekazać.</p>
            </div>
            <form>
                <p>Krok 1/4</p>
                <h2>Zaznacz co chcesz oddać:</h2>
                <div className={buttons}>
                    <Button>Dalej</Button>
                </div>
            </form>
        </section>
    )
}

export default Step1;