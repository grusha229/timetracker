import React, {useRef, useCallback, KeyboardEvent, useState, useEffect} from 'react'
import Input from "../../components/Input/Input";
import './AddTask.scss'
import Button from "../../components/Button/Button";
import {useDispatch} from "react-redux";
import {createTask} from "./../../redux/actions"
// @ts-ignore
import { v4 as createId } from "uuid";

export const AddTask = () => {

    const [taskName, setTaskName] = useState('')

    // useEffect(() => {
    //     console.log((!taskName))
    // },[])

    const changeName = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setTaskName(event.target.value)
    }, [taskName]);
    const dispatch = useDispatch()


    const submit = useCallback(() => {
        let time = new Date().toString()
        dispatch(createTask(createId(),taskName,time));
        setTaskName('')
    }, [dispatch,taskName]);

    const enterKeyHandler = useCallback((event: KeyboardEvent) => {
        if (!taskName) {
            return;
        }
        if (event.code === 'Enter') {
            submit();
        }
    },[dispatch,taskName]);

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
                        onKeyUp={enterKeyHandler}
                        value={taskName}
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
