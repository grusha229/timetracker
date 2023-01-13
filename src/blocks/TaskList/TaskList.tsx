import React from 'react';
import "./TaskList.scss"
import {useSelector, useStore, connect} from "react-redux"
import {State} from "../../redux/newTasks/taskListReducer";
import TaskItem from "./Task/TaskItem";
// todo – Разобраться с типизацией во всём файле
const TaskList:React.FC<any> = () => {
    // const taskList = useSelector(taskListSelector)
    // @ts-ignore
    const taskList = useSelector((state) => state.taskList);

    return (
        <>
            <div className={'tasklist'}>
            {(Object.keys(taskList) as Array<any>).map((key)=>{
                // todo – Разобраться с типизацией
                return(
                    <TaskItem
                        // @ts-ignore
                        name={taskList[key].name}
                        // @ts-ignore
                        creationTime={taskList[key].creationTime}
                        // @ts-ignore
                        id={taskList[key].id}
                        // @ts-ignore
                        key={taskList[key].id}
                        // @ts-ignore
                        isInProgress={taskList[key].isInProgress}
                        // @ts-ignore
                        workPeriods={taskList[key].workPeriods}
                    />
                )
            })
            }
            </div>
        </>
    )
}

export default TaskList;
