import styles from './Summary.module.scss'
import Button from "../../Button";

const Summary = () => {
    const {summary, buttons} = styles;
    return (
        <section className={summary}>
            <form>
                <h2>Podsumowanie Twojej darowizny</h2>

                <div className={buttons}>
                    <Button>Wstecz</Button>
                    <Button>Potwierdzam</Button>
                </div>
            </form>

        </section>
    )
}

export default Summary;