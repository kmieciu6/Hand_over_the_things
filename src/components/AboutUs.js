import '../scss/main.scss'
import Decoration from "../assets/Decoration.svg";
import Signature from "../assets/Signature.svg";

const AboutUs = () => {
    return (
        <section id={"about"} className='about_us'>
            <div className='container'>
                <h1>O nas</h1>
                <img src={Decoration} alt="Decoration"/>
                <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts
                    black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <div className='signature'>
                    <img src={Signature} alt="Signature"/>
                </div>
            </div>
            <div className='img'/>
        </section>
    )
}

export default AboutUs