import React from 'react';
import "./Task.scss"

export interface iTaskProps {
    status: boolean,
    name: string,
    description: string,
    time?: number
}

const Task:React.FC<iTaskProps> = ({status,name,description,time}) => {

    return (
        <div className={'task'}>
            <div>
                task status: {status ? "done" : "work in progress"}
            </div>
            <div>
                task name: {name}
            </div>
            <div>
                task description: {description}
            </div>
            <div>
                task time: {time}
            </div>
            <div>

            </div>
        </div>
    )
}

export default Task;
