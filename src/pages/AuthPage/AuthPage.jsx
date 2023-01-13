import s from './AuthPage.module.css'
import {useEffect, useState} from "react";
// import {fetchFunc} from "../../utils/utils.ts";
import {useNavigate} from "react-router";
// import Button from "../../components/Button/Button.js";
import Button from "../../components/Button/Button";
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux";
import {login, registration} from "../../redux/userSlice.ts";

const CREATE_USER_API_URL = 'http://localhost:1337/api/auth/local/register';
const AUTH_USER_API_URL = 'http://localhost:1337/api/auth/local';

const FormPage = (props) => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const isAuth = useSelector((state) => state.user.isAuth);

    useEffect(()=>{
        if (isAuth) navigate('/')
    })

    let url = (props.isRegistration ?  CREATE_USER_API_URL : AUTH_USER_API_URL)

    const [nickname, setNickname] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState(false)

    function handleChange (setFunction,event) {
        event.preventDefault()
        setFunction(event.target.value)
    }

    function handleSubmit (event) {
        event.preventDefault()

        let body = {
            email: 'email@email.email',
            fullName: 'nickname',
            password:'password',
            username: 'nickname'
        }

        if (!props.isRegistration) {
            dispatch(login({
                identifier: nickname,
                password:password
            }))
        } else {
            dispatch(registration({
                email: email,
                fullName: nickname,
                password: password,
                username: nickname
            }))
        }
    }

    const heading =  (props.isRegistration) ? 'Привет, новый пользователь' : 'Привет, зарегистрированный пользователь';
    return (
        <>
            <div className={s.main} id="welcome">
                <h1 className={s.heading}>{heading}</h1>
                    <form id="welcome-form" onSubmit={handleSubmit}>
                        <input
                            placeholder="Nickname"
                            type="text"
                            onChange={(e) => handleChange(setNickname,e)}
                        />

                        {props.isRegistration && (
                            <input
                                placeholder="Your email"
                                type="email"
                                onChange={(e) => handleChange(setEmail,e)}
                            />
                        )}

                        <input
                            placeholder="Password"
                            type="password"
                            onChange={(e) => handleChange(setPassword,e)}
                        />
                        <div className={`${s.alert} ${ !error ? s.disabled : ''}`}>
                            <p> Упс! Что-то пошло не так </p>
                        </div>
                        <Button>
                            {props.isRegistration ? "Sign in" : "Log in" }
                        </Button>
                    </form>
                </div>
        </>
    );
}

export default FormPage
