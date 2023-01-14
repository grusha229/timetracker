import React, {useEffect} from 'react';
import TaskList from "../blocks/TaskList/TaskList";
import AddTask from "../blocks/AddTask/AddTask";
import Header from "../blocks/Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {getTaskList} from "../redux/taskListSlice";
import {setAuth} from "../redux/userSlice";


const TaskListPage:React.FC<any> = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    // @ts-ignore
    const isAuth = useSelector((state) => state.user.isAuth);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            dispatch(setAuth(true))
        } else {
            dispatch(setAuth(false))
        }
        console.log('dffdf')
        // @ts-ignore
        dispatch(getTaskList());
    },[dispatch])

    useEffect(()=>{
        if (!isAuth) navigate('/login')
    },[isAuth])

    return (
        <>
            <Header />
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
