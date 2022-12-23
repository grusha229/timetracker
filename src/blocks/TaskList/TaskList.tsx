import React from 'react';
import "./TaskList.scss"
import {useSelector, useStore, connect} from "react-redux"
import {taskListSelector} from "../../redux/selectors";
import {State} from "../../redux/reducer/rootReducer";
import {Task as Tasktype} from "../../redux/reducer/types"
import TaskItem from "./Task/TaskItem";


const TaskList:React.FC<any> = () => {
    const taskList = useSelector(taskListSelector)

    return (
        <>
            <div className={'tasklist'}>
            {taskList.map((task: Tasktype)=> (
                <TaskItem
                    name={task.name}
                    creationTime={task.creationTime}
                    id={task.id}
                    key={task.id}
                />
            ))
            }
            </div>
        </>
    )
}

const mapStateToProps = (state: State) => {
    console.log(state)
    return {
        arrayOfTasks: state
    }
}

export default connect(mapStateToProps,null)(TaskList);
