import React, {useState} from 'react';
import TaskList from "./blocks/TaskList/TaskList";
import AddTask from "./blocks/AddTask/AddTask";
import {Timetable} from "./components/Timetable/Timetable";



const Content:React.FC<any> = () => {

    return (
        <div className={`layout`}>
            <div className={'container'}>
                <div className={'content'}>
                    {/*<AddTask />*/}
                    {/*<TaskList/>*/}
                    {/*<Timetable />*/}
                </div>
            </div>
        </div>
    )
}

export default Content;
