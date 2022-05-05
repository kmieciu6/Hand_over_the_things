import styles from './step4.module.scss'
import Button from "../../Button";

const Step4 = () => {
    const {step4, warning, buttons} = styles;
    return (
        <section className={step4}>
            <div className={warning}>
                <h2>Ważne!</h2>
                <p>Podaj adres oraz termin odbioru rzeczy.</p>
            </div>
            <form>
                <p>Krok 4/4</p>
                <h2>Podaj adres oraz termin odbioru rzecz przez kuriera</h2>

                <div className={buttons}>
                    <Button>Wstecz</Button>
                    <Button>Dalej</Button>
                </div>
            </form>

        </section>
    )
}

export default Step4;