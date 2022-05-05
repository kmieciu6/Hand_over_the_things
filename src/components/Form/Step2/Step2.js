import styles from './step2.module.scss'
import Button from "../../Button";

const Step2 = () => {
    const {step2, warning, buttons} = styles;
    return (
        <section className={step2}>
            <div className={warning}>
                <h2>Ważne!</h2>
                <p>Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy
                    znajdziesz TUTAJ.</p>
            </div>
            <form>
                <p>Krok 2/4</p>
                <h2>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>

                <div className={buttons}>
                    <Button>Wstecz</Button>
                    <Button>Dalej</Button>
                </div>
            </form>

        </section>
    )
}

export default Step2;