import styles from './step3.module.scss'
import Button from "../../Button";

const Step3 = () => {
    const {step3, warning, buttons} = styles;
    return (
        <section className={step3}>
            <div className={warning}>
                <h2>Ważne!</h2>
                <p>Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też
                    filtrować organizacje po ich lokalizacji bądź celu ich pomocy.</p>
            </div>
            <form>
                <p>Krok 3/4</p>
                <h2>Lokalizacja:</h2>

                <div className={buttons}>
                    <Button>Wstecz</Button>
                    <Button>Dalej</Button>
                </div>
            </form>

        </section>
    )
}

export default Step3;