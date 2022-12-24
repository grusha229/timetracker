import React, {useState} from 'react';
import TaskList from "./blocks/TaskList/TaskList";
import AddTask from "./blocks/AddTask/AddTask";



const Content:React.FC<any> = () => {

    return (
        <div className={`layout`}>
            <div className={'container'}>
                <div className={'content'}>
                    <AddTask />
                    <TaskList/>
                </div>
            </div>
        </div>
    )
}

export default Content;
