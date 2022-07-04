import Header from './Header/Header';
import ThreeColumns from './ThreeColumns';
import SimpleSteps from './SimpleSteps'
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import Organisation from "./Organisation";

const Home = () => {
    return (
        <>
            <Header/>
            <ThreeColumns/>
            <SimpleSteps/>
            <AboutUs/>
            <Organisation/>
            <Contact/>
        </>
    );
}

export default Home;