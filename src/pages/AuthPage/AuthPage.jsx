import s from './AuthPage.module.css'
import {useEffect, useState} from "react";
// import {fetchFunc} from "../../utils/utils.ts";
import {useNavigate} from "react-router";
// import Button from "../../components/Button/Button.js";
import Button from "../../components/Button/Button";
import axios from 'axios';

const CREATE_USER_API_URL = 'http://localhost:1337/api/auth/local/register';
const AUTH_USER_API_URL = 'http://localhost:1337/api/auth/local';

const FormPage = (props) => {

    const navigate = useNavigate()

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
        let body
        body = (props.isRegistration ?
         {
            username: nickname,
            email: email,
            password: password,
            fullName: nickname
        } :
        {
            identifier: nickname,
            password: password,
        })


        axios
            .post(url, body)
            .then(response => {
                // Handle success.
                console.log('Well done!');
                console.log('User profile', response.data.user);
                console.log('User token', response.data.jwt);
            })
            .then(() => {
                navigate("/")
            })
            .catch(error => {
                // Handle error.
                console.log('An error occurred:', error.response);
            });
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
