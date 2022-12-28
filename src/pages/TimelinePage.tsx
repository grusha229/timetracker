import React from 'react';

import {Timetable} from "../components/Timetable/Timetable";
import Header from "../blocks/Header/Header";

const initialTimeTableData = [
    {
        start: 1672203600000,
        end: 1672219000000
    },
    {
        start: 1672225200000,
        end: 1672254000000
    },

]

const Content:React.FC<any> = () => {

    return (
        <>
            <Header userName={'UserName'} />
            <div className={`layout`}>
                <div className={'container'}>
                    <div className={'content'}>
                        <Timetable workTimes={initialTimeTableData} containerWidth={1280}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content;
