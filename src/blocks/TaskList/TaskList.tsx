import React from 'react';
import "./TaskList.scss"
import Task from "./Task/Task";

interface iTasklistProps {
    tasks: iTasklistProps[]
}

const TaskList:React.FC<any> = () => {

    return (
        <div className={'tasklist'}>
            <Task
                name={'Название задачи'}
                description={'Описание задачи'}
                status={true}
                time={1041241}
            />
        </div>
    )
}

export default TaskList;
