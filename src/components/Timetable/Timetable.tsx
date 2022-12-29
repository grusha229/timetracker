import React, {useState} from "react";
import {TimePeriod} from "../../redux/types";
import "./Timetable.scss"

interface Timetable {
    workTimes: TimePeriod[],
    containerWidth: number
}

function timelineWidth(day_start:number, day_end:number, containerWidth: number) : number {
    return (((day_end - day_start))/(60*60*1000))*containerWidth/24;
};

function timeline_start_x(day_start:number, containerWidth: number) : number {
    let date_start = new Date(day_start);
    let date = new Date(date_start.getFullYear(),date_start.getMonth(),date_start.getDate());

    let time_diff = date_start.getTime() - date.getTime()

    return (time_diff/(60*60*1000))*containerWidth/24;
};

// @ts-ignore
export const Timetable:React.FC<Timetable> = ({workTimes,containerWidth }) => {

    let current: TimePeriod[] = []

    let allHours = [];
    for (let i = 0; i <= 24; i++) {
        allHours.push(i);
    }
    let currentPosition = 0;
    let initialPosition = 0;
    let dashWidth = 2
    let diagramWidth = containerWidth - 50
    let diagramHeight = 50
    let dashHeight = 4
    let lineHeight = 2

    var dateParsed, dateParsed2, dailyTimeStart, dailyTimeEnd
    let hours,hours2, minutes,minutes2, seconds,seconds2, day

    if (!workTimes)
        return
    workTimes.forEach((el)=>{
        if (el.end) {
            dateParsed = new Date(el.start)
            hours = dateParsed.getHours()
            minutes = dateParsed.getMinutes()
            seconds = dateParsed.getSeconds()
            dailyTimeStart = dateParsed.getTime() - seconds - minutes*60 - hours*3600

            dateParsed2 = new Date(el.end)
            hours2 = dateParsed2.getHours()
            minutes2 = dateParsed2.getMinutes()
            seconds2 = dateParsed2.getSeconds()
            dailyTimeEnd = dateParsed2.getTime() - seconds2 - minutes2*60 - hours2*3600
            console.log(dailyTimeEnd,dailyTimeStart)

            current.push(
                {
                    "start": dailyTimeStart,
                    "end": dailyTimeEnd
                }
            )
        }

    })



    return (
        <div className={'canvas'}>
            <svg className={'timeline'} width={diagramWidth} height={diagramHeight} viewBox={`0 0 ${diagramWidth} ${diagramHeight}`}>
                {
                    allHours.map((_el,index) => {
                        currentPosition = initialPosition + index * (diagramWidth) / 24 - index*dashWidth/24;
                        return (
                            <rect fill={"#fff"} width={dashWidth} height={dashHeight} y={diagramHeight-dashHeight*1.5} x={currentPosition}></rect>
                        )
                    })
                }
                {
                    current.map((el,index)=> {
                        // <rect fill={"#f2f2f2"} height={"20px"} width={"100px"}></rect>
                        return ((el.end) &&
                        <rect className={"unit"} fill={"#ffdd2d"} width={timelineWidth(el.start,el.end,diagramWidth)} height={"20px"} x={timeline_start_x(el.start,diagramWidth)}></rect>
                        )
                })
                }
                <rect className={"unit"} fill={"#fff"} width={diagramWidth} height={lineHeight} y={diagramHeight-lineHeight}></rect>
            </svg>
            <div className={'times'}>
                {
                    allHours.map((_el,index) => {
                        return (
                            <div className={'hour'}>
                                <div>{index.toString().padStart(2,'0')}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}
