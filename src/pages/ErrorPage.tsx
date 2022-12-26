import React from 'react';
import TaskList from "../blocks/TaskList/TaskList";
import AddTask from "../blocks/AddTask/AddTask";
import Header from "../blocks/Header/Header";


const TaskListPage:React.FC<any> = () => {

    return (
        <>
            <Header userName={'UserName'} />
            <div className={`layout`}>
                <div className={'container'}>
                    <div className={'content'}>
                        Ошибочка
                    </div>
                </div>
            </div>
        </>
    )
}

export default TaskListPage;
