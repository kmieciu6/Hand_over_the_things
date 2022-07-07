import '../../scss/main.scss'
import Button from "../Button";
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {editStuff} from '../../Redux/actions/stuffActions';
import {useSelector} from 'react-redux';

const Step2 = ({setStepNumber}) => {
    const [isChecked, setIsChecked] = useState(false);
    const {stuff} = useSelector(store => store);
    const [numberBag, setNumberBag] = useState();
    const dispatch = useDispatch();

    const handleNumberChange = (e) => {
        setNumberBag(e.target.value);
    };

    const backStep = () => {
        setStepNumber(prev => prev - 1);
    }

    const onSubmit = () => {
        if (parseInt(numberBag) >= 1) {
            setIsChecked(false);
            setStepNumber(prev => prev + 1);
        } else {
            setIsChecked(true);
        }

        dispatch(editStuff({quantity: numberBag, stuff: stuff[1].stuff}))
    }

    return (
        <section className='form'>
            <div className='warning'>
                <h2>Ważne!</h2>
                <p>
                    Uzupełnij szczegóły doyczące twoich rzeczy. Dzięki temu będziemy wiedzieć, komu najlepiej je
                    przekazać.
                </p>
            </div>
            <div className='secondForm'>
                <p>Krok 2/4</p>
                <h3>Podaj w ile worków chcesz się spakować:</h3>
                <label htmlFor="">
                    <p>Liczba 60l worków: </p>
                    <select className='selectBag' value={numberBag} onChange={handleNumberChange}>
                        <option value="Wybierz">Wybierz</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </label>
                <div className='buttons'>
                    <Button onClick={() => onSubmit()}>Dalej</Button>
                    <Button onClick={() => backStep()}>Wstecz</Button>
                </div>
                {isChecked && <p className='war'>Zaznacz przynajmniej jedną opcję</p>}
            </div>
        </section>
    );
}

export default Step2;