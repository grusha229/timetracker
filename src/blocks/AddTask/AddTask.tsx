import React from 'react'
import Input from "../../components/Input/Input";
import './AddTask.scss'
import Button from "../../components/Button/Button";

const AddTask:React.FC<any> = () => {
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
                    />
                </div>
                <div className={'newTask_controls__button'}>
                    <Button
                        onClick={()=>{}}
                        type={"submit"}
                    >
                        Начать!
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default AddTask
