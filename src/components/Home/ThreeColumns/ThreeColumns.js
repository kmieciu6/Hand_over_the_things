import styles from './threeColumns.module.scss'

const ThreeColumns = () => {
    const {three_columns, box} = styles;

    return (
        <section className={three_columns}>
            <div className={box}>
                <span></span>
                <h2>oddanych worków</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma.
                    Aliquam erat volutpat.</p>
            </div>
            <div className={box}>
                <span></span>
                <h2>wspartych organizacji</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma.
                    Aliquam erat volutpat.</p>
            </div>
            <div className={box}>
                <span></span>
                <h2>zorganizowanych zbiórek</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma.
                    Aliquam erat volutpat.</p>
            </div>
        </section>
    )
}

export default ThreeColumns;