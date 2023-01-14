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
    const error = useSelector((state) => state.user.error);

    useEffect(()=>{
        if (isAuth) {
            navigate('/')
        }
    })

    let url = (props.isRegistration ?  CREATE_USER_API_URL : AUTH_USER_API_URL)

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    // const [error, setError] = useState(false)

    function handleChange (setFunction,event) {
        event.preventDefault()
        setFunction(event.target.value)
    }

    function handleSubmit (event) {
        event.preventDefault()

        if (!props.isRegistration) {
            dispatch(login({
                identifier: email,
                password:password
            }))
        } else {
            dispatch(registration({
                email: email,
                fullName: name,
                password: password,
                username: email
            }))
        }
    }

    const heading =  (props.isRegistration) ? 'Sign in' : 'Log in';
    return (
        <>
            <div className={s.main} id="welcome">
                <h1 className={s.heading}>{heading}</h1>
                    <form id="welcome-form" onSubmit={handleSubmit}>

                        <input
                            placeholder="Your email"
                            type="email"
                            onChange={(e) => handleChange(setEmail,e)}
                        />

                        {props.isRegistration && (
                            <input
                                placeholder="Your name"
                                type="text"
                                onChange={(e) => handleChange(setName,e)}
                            />
                        )}

                        <input
                            placeholder="Password"
                            type="password"
                            onChange={(e) => handleChange(setPassword,e)}
                        />
                        <div className={`${s.alert} ${ !error ? s.disabled : ''}`}>
                            <p> There is an error: </p>
                            <p> {error} </p>
                        </div>
                        <Button>
                            {props.isRegistration ? "Sign in" : "Log in" }
                        </Button>
                        <div className={s.additional}>
                        {props.isRegistration && (
                            <> Already have an account? <a onClick={()=>{navigate('/login')}}> Log in </a> </>
                        )}
                        {!props.isRegistration && (
                            <> Have not got an account? <a onClick={()=>{navigate('/reg')}}> Sign in </a> </>
                        )}
                        </div>
                    </form>
                </div>
        </>
    );
}

export default FormPage
