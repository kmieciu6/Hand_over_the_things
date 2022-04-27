import {HashRouter, Route, Routes} from "react-router-dom";
import Home from "../Home";
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import Summary from './Summary'
import Thanks from './Thanks'
import styles from './form.module.scss'
import {createContext, useState} from "react";

const FormContext = createContext(null)

const Form = () => {
    const {form} = styles
    const [state, setState] = useState({
        step:0
    })
    const getStep = () => {
        switch (state.step) {
            case 0:
                return <Step1 />
            case 1:
                return <Step2 />
        }
    }

    return (
        <FormContext.Provider value={{state, setState}}>
            {
                getStep()
            }
            }
        </FormContext.Provider>
    )
}

export default Form;