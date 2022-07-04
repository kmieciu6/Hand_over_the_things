import React, {useState} from 'react';
import '../scss/main.scss'
import HeaderForm from "./Header/HeaderForm";
import Step1 from './Form/Step1'
import Step2 from './Form/Step2'
import Step3 from './Form/Step3'
import Step4 from './Form/Step4'
import Summary from "./Form/Summary";
import Thanks from "./Form/Thanks";
import Contact from "./Contact";

const Form = () => {

    const [stepNumber, setStepNumber] = useState(0);

    return (
        <section>
            <HeaderForm/>
            {stepNumber === 0 && <Step1 setStepNumber={setStepNumber}/>}
            {stepNumber === 1 && <Step2 setStepNumber={setStepNumber}/>}
            {stepNumber === 2 && <Step3 setStepNumber={setStepNumber}/>}
            {stepNumber === 3 && <Step4 setStepNumber={setStepNumber}/>}
            {stepNumber === 4 && <Summary setStepNumber={setStepNumber}/>}
            {stepNumber === 5 && <Thanks setStepNumber={setStepNumber}/>}
            <Contact/>
        </section>
    )
}

export default Form;