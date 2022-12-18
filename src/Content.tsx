import React from 'react';
import TaskList from "./blocks/TaskList/TaskList";

const Content:React.FC<any> = () => {

    return (
        <div className={`layout`}>
            <div className={'container'}>
                <div className={'content'}>
                    <TaskList/>
                </div>
            </div>
        </div>
    )
}

export default Content;
