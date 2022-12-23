import React, {useRef, useCallback} from 'react'
import Input from "../../components/Input/Input";
import './AddTask.scss'
import Button from "../../components/Button/Button";
import {useDispatch} from "react-redux";
import {createTask} from "./../../redux/actions"
// @ts-ignore
import { v4 as createId } from "uuid";

export const AddTask = () => {

    const nameRef = useRef("");
    const changeName = useCallback((event: React.ChangeEvent<HTMLInputElement>) => (nameRef.current = event.target.value), []);
    const dispatch = useDispatch()

    const submit = useCallback(() => {
        if (!nameRef.current) {
            return;
        }
        let time = new Date().toString()
        dispatch(createTask(createId(),nameRef.current,time));
    }, [dispatch]);

    return (
        <div className={'newTask'}>
            <div className={'newTask_title'}>
                 Добавить новую задачу
            </div>
            <div className={'newTask_controls'}>
                <div className={'newTask_controls__input'}>
                    <Input
                        placeholder={"Над чем будете работать?"}
                        type={"text"}
                        onChange={changeName}
                    />
                </div>
                <div className={'newTask_controls__button'}>
                    <Button
                        onClick={submit}
                    >
                        Начать!
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default AddTask
