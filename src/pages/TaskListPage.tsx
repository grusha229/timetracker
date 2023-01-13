import React, {useEffect} from 'react';
import TaskList from "../blocks/TaskList/TaskList";
import AddTask from "../blocks/AddTask/AddTask";
import Header from "../blocks/Header/Header";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router";


const TaskListPage:React.FC<any> = () => {
    const navigate = useNavigate();

    // @ts-ignore
    const isAuth = useSelector((state) => state.user.isAuth);

    useEffect(()=>{
        if (!isAuth) navigate('/login')
    })

    return (
        <>
            <Header userName={'UserName'} />
            <div className={`layout`}>
                <div className={'container'}>
                    <div className={'content'}>
                        <AddTask />
                        <TaskList/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TaskListPage;
