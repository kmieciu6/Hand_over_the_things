// import Home from "../Home";
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import Summary from './Summary'
import Thanks from './Thanks'
// import styles from './form.module.scss'
import {createContext, useState} from "react";
import Contact from "../Home/Contact";
import HeaderForm from "../Home/Header/HeaderForm";

const FormContext = createContext(null)

const Form = () => {
    // const {} = styles
    const [state, setState] = useState({
        step: 0
    })
    const getStep = () => {
        // eslint-disable-next-line default-case
        switch (state.step) {
            case 0:
                return <Step1/>
            case 1:
                return <Step2/>
            case 2:
                return <Step3/>
            case 3:
                return <Step4/>
            case 4:
                return <Summary/>
            case 5:
                return <Thanks/>
        }
    }

    return (
        <FormContext.Provider value={{state, setState}}>

            <HeaderForm/>
            {
                getStep()
            }
            <Contact/>
        </FormContext.Provider>
    )
}

export default Form;