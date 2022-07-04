import '../scss/main.scss'
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons"
import Decoration from "../assets/Decoration.svg";
import Button from "./Button";
import React from "react";
import {useForm} from "react-hook-form";
import {useDispatch} from 'react-redux';
import {logUser} from '../Redux/actions/logActions'
import {useNavigate} from 'react-router-dom'

const Login = ({loginUser}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();
    const onSubmit = (data) => {
        dispatch(logUser({email: data.email, password: data.password}))
        loginUser();
        navigate("/");
    };

    return (
        <section className='login'>
            <Link to={"/"} className='nav'>
                <FontAwesomeIcon icon={faXmark} className='x_mark'/>
            </Link>
            <form className='nav_form' onSubmit={handleSubmit(onSubmit)}>
                <h1>Zaloguj się</h1>
                <img src={Decoration} alt="Decoration"/>
                <div className='form_label'>
                    <label htmlFor="" className='label'>
                        <h4>Email</h4>
                        <input placeholder='jan.kowalski@gmail.pl' type="text" {...register("email", {
                            required: true,
                            minLength: 8
                        })} />
                    </label>
                    {errors.email?.type === 'required' && <p style={{color: "red"}}>Email jest wymagany</p>}
                    {errors.email?.type === 'minLength' && <p style={{color: "red"}}>Minimalna długość to 8 znaki</p>}
                    <label htmlFor="" className='label'>
                        <h4>Hasło</h4>
                        <input placeholder='*****' type="password" {...register("password", {
                            required: true,
                            minLength: 5
                        })} />
                    </label>
                    {errors.password?.type === 'required' && <p style={{color: "red"}}>Hasło jest wymagane</p>}
                    {errors.password?.type === 'minLength' &&
                        <p style={{color: "red"}}>Minimalna długość to 5 znaki</p>}
                </div>
                <div className='buttons'>
                    <Link to="/SignUp"><Button>Załóż konto</Button></Link>
                    <Button type="submit">Zaloguj się</Button>
                </div>
            </form>
        </section>
    )
}

export default Login;