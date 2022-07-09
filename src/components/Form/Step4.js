import '../../scss/main.scss'
import Button from "../Button";
import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from 'react-redux';
import {editStuff} from '../../Redux/actions/stuffActions';
import {useSelector} from 'react-redux';

const Step4 = ({setStepNumber}) => {
    const {stuff} = useSelector(store => store);
    const dispatch = useDispatch();
    console.log(stuff);

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const backStep = () => {
        setStepNumber(prev => prev - 1);
    }
    const onSubmit = async (data) => {
        console.log(data);
        dispatch(editStuff({
            quantity: stuff.quantity,
            stuff: stuff.stuff,
            people: stuff.people,
            location: stuff.location,
            organization: stuff.organization,
            adress: [data.street, data.town, data.ZIPcode, data.telNumber],
            time: [data.data, data.time, data.description]
        }))
        setStepNumber(prev => prev + 1);

        //  navigate("/login");
    }

    return (
        <section className='form'>
            <div className='warning'>
                <h2>Ważne!</h2>
                <p>Podaj adres oraz termin odbioru rzeczy.</p>
            </div>
            <div className='fourthForm'>
                <p>Krok 4/4</p>
                <h2>Podaj adres oraz termin dobioru rzeczy przez kuriera</h2>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className='formInput'>
                        <div className='time'>
                            <h3>Adres odbioru:</h3>
                            <label htmlFor="">
                                <p>Ulica</p>
                                <input type="text" {...register("street", {required: true, minLength: 3})} />
                            </label>
                            {errors.street?.type === 'required' && <p className='war' style={{color: "red"}}>Ulica jest wymagana</p>}
                            <label htmlFor="">
                                <p>Miasto</p>
                                <input type="text" {...register("town", {required: true, minLength: 3})} />
                            </label>
                            {errors.town?.type === 'required' && <p className='war' style={{color: "red"}}>Miasto jest wymagane</p>}
                            <label htmlFor="">
                                <p>Kod Pocztowy</p>
                                <input type="text" {...register("ZIPcode", {required: true, minLength: 6})} />
                            </label>
                            {errors.ZIPcode?.type === 'required' &&
                                <p className='war' style={{color: "red"}}>Kod-pocztowy jest wymagany</p>}
                            <label htmlFor="">
                                <p>Numer telefonu</p>
                                <input type="text" {...register("telNumber", {required: true, minLength: 8})} />
                            </label>
                            {errors.telNumber?.type === 'required' &&
                                <p className='war' style={{color: "red"}}>Telefon jest wymagany</p>}
                        </div>
                        <div>
                            <h3>Termin odbioru:</h3>
                            <label htmlFor="">
                                <p>Data</p>
                                <input type="date" {...register("data", {required: true})} />
                            </label>
                            {errors.data?.type === 'required' && <p className='war' style={{color: "red"}}>Data jest wymagana</p>}
                            <label htmlFor="">
                                <p>Godzina</p>
                                <input type="time" {...register("time", {required: true})} />
                            </label>
                            {errors.time?.type === 'required' && <p className='war' style={{color: "red"}}>Godzina jest wymagana</p>}
                            <label htmlFor="">
                                <p>Uwagi dla kuriera</p>
                                <textarea className='textArea' type="textarea"
                                          rows="4"   {...register("description", {required: false})} />
                            </label>
                        </div>
                    </div>
                    <div className='buttons'>
                        <Button onClick={() => onSubmit()}>Dalej</Button>
                        <Button onClick={() => backStep()}>Wstecz</Button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Step4;