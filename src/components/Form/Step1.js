import '../../scss/main.scss'
import Button from "../Button";
import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from 'react-redux';
import {addStuff} from '../../Redux/actions/stuffActions'

const Step1 = ({setStepNumber}) => {
    const [chooseStuff, setChooseStuff] = useState([]);
    const [isChecked, setIsChecked] = useState(false);
    const dispatch = useDispatch();

    const {
        handleSubmit
    } = useForm();

    const onSubmit = () => {
        if (chooseStuff.length === 0) {
            setIsChecked(true);
        } else {
            setIsChecked(false);
            setStepNumber(prev => prev + 1);
        }
        dispatch(addStuff({stuff: chooseStuff}))
    };

    const handleChooseStuff = (stuff, isChecked) => {
        if (isChecked) {
            setChooseStuff(prev => [...prev, stuff]);
        } else {
            setChooseStuff(chooseStuff.filter(
                el => el !== stuff
            ))
        }
    }

    return (
        <section className='form'>
            <div className='warning'>
                <h2>Ważne!</h2>
                <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je
                    przekazać.</p>
            </div>
            <div className='firstForm'>
                <p>Krok 1/4</p>
                <h3>Zaznacz co chcesz oddać:</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="container">
                        <input className='input' type="checkbox" value="Ubrania, które nadają się do ponownego użycia"
                               onChange={e => handleChooseStuff(e.target.value, e.target.checked)}/>
                        <span className="checkmark"/>
                        <p>Ubrania, które nadają się do ponownego użycia </p>
                    </label>
                    <label className="container">
                        <input type="checkbox" value="Ubrania, do wyrzucenia"
                               onChange={e => handleChooseStuff(e.target.value, e.target.checked)}/>
                        <span className="checkmark"/>
                        <p>Ubrania, do wyrzucenia </p>
                    </label>
                    <label className="container">
                        <input type="checkbox" value="zabawki"
                               onChange={e => handleChooseStuff(e.target.value, e.target.checked)}/>
                        <span className="checkmark"/>
                        <p>Zabawki </p>
                    </label>
                    <label className="container">
                        <input type="checkbox" value="ksiażki"
                               onChange={e => handleChooseStuff(e.target.value, e.target.checked)}/>
                        <span className="checkmark"/>
                        <p>Książki </p>
                    </label>
                    <label className="container">
                        <input type="checkbox" value="inne"
                               onChange={e => handleChooseStuff(e.target.value, e.target.checked)}/>
                        <span className="checkmark"/>
                        <p>Inne </p>
                    </label>
                    <div className='buttons'>
                        <Button type="submit">Dalej</Button>
                    </div>
                    {isChecked && <p className='war'>Zaznacz przynajmniej jedną opcję</p>}
                </form>
            </div>
        </section>
    );
}

export default Step1;