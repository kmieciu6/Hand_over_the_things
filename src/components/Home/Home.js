import Header from './Header';
import ThreeColumns from './ThreeColumns';
import SimpleSteps from './SimpleSteps'
import AboutUs from "./AboutUs";
import Helps from "./Helps";
import Contact from "./Contact";

const Home = () => {
    return (
        <>
            <Header/>
            <ThreeColumns/>
            <SimpleSteps/>
            <AboutUs/>
            <Helps/>
            <Contact/>
        </>
    );
}

export default Home;