import React from 'react';
import "./TaskList.scss"
import Task, {Time} from "./Task/Task";


export interface iTaskProps {
    status?: "Done" | "Pause" | "InProgress",
    name: string,
    description: string,
    time?: Time
}

interface iTasklistProps {
    tasks: iTaskProps[]
}

const TaskList:React.FC<any> = () => {

    return (
        <>
            <div className={'tasklist'}>
                <Task
                    name={'Название задачи'}
                    description={'Создано 17.12.22 в 10:01'}
                />
                <Task
                    name={'Другая задача'}
                    description={'Создано 05.12.22 в 13:23'}
                />
                <Task
                    name={'Другая задача'}
                    description={'Создано 01.12.22 в 23:41'}
                />
            </div>
        </>
    )
}

export default TaskList;
