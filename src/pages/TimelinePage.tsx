import React from 'react';

import {Timetable} from "../components/Timetable/Timetable";
import Header from "../blocks/Header/Header";



const Content:React.FC<any> = () => {

    return (
        <>
            <Header userName={'UserName'} />
            <div className={`layout`}>
                <div className={'container'}>
                    <div className={'content'}>
                        <Timetable/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content;
