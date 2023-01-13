import React, {useState, useEffect, useCallback} from 'react';
import "./Task.scss"
import Button from "../../../components/Button/Button";
import Timer from "../../../components/Timer/Timer";
import {Task as TaskType, TimePeriod} from "../../../redux/types";
import trashIcon from "../../../assets/svg/trash.svg"
import {removeTask, stopNewTimePeriod, startNewTimePeriod} from "../../../redux/taskListSlice";
import {useDispatch} from "react-redux";
import {Timetable} from "../../../components/Timetable/Timetable";

function getSecondsFromPeriods(workPeriods:TimePeriod[]) :number {
    let accumulator = 0
    workPeriods.forEach((el,index)=>{
        if (el.end) {
            accumulator += (el.end - el.start)
        }
    })
    return Math.trunc(accumulator/1000)
}

const TaskItem:React.FC<TaskType> = ({name, creationTime, id,isInProgress,workPeriods}) => {



    const [Seconds, setSeconds] = useState(getSecondsFromPeriods(workPeriods));
    const [isSecondsRun, setIsSecondsRun] = useState(isInProgress);
    const [isDetailed, setIsDetaild] = useState(false)

    useEffect(() => {
        if (isSecondsRun) {
            function increaseTime (seconds: number) {
                setSeconds(Seconds+seconds)
            }
            const interval = setInterval(() => increaseTime(1), 1000);

            return () => {
                clearInterval(interval);
            };
        }
    });
    const dispatch = useDispatch()

    const deleteHandler = useCallback(() => {
        if (confirm('Вы действительно хотите удалить запись?')) {
            return dispatch(removeTask({id}));
        }
    }, [dispatch]);

    const moreButtonHandler = useCallback(() => {
        setIsDetaild(!isDetailed)
    }, [isDetailed])


    const handleTimer = useCallback(() => {
        setIsSecondsRun(!isSecondsRun)
        if (isSecondsRun) {
            dispatch(stopNewTimePeriod({id}))
        } else dispatch(startNewTimePeriod({id}));
    }, [dispatch,isSecondsRun]);


    let creationDateParsed = new Date(creationTime)
    let hours = creationDateParsed.toLocaleTimeString()
    let day = creationDateParsed.toLocaleDateString()
    // @ts-ignore
    return (
        <div className={'task'}>
            <div className={'task_info'}>
                <div className={`task_item__status ${isSecondsRun ? "active" : "paused"}`}>
                    <p>
                        {isSecondsRun ? "В работе" : "Пауза"}
                    </p>
                </div>
                <div className={'task_item__info'}>
                    <div className={'task_item__info title'}>
                        {name}
                    </div>
                    <div className={'task_item__info description'}>
                        {`Создано ${day} в ${hours}`}
                    </div>
                </div>
                <div className={'task_item__more'} onClick={moreButtonHandler}>
                    Подробнее
                </div>
                <div className={`task_item__time ${isSecondsRun ? "active" : "paused"}`}>
                    <Timer seconds={Seconds}/>
                </div>
                <div className={'task_item__button'}>
                    <Button onClick={isSecondsRun ? handleTimer : handleTimer} type={"submit"} >
                        {isSecondsRun ? "Пауза" : "Старт"}
                    </Button>
                </div>
                <div className={'task_item__delete'} onClick={deleteHandler}>
                    <img src={trashIcon}/>
                </div>
            </div>
            <div className={`task_info additional ${isDetailed ? "" : "hide"}`}>
                <div className={'title'}> { (workPeriods.length != 0) ? "Таймлайн задачи" : "Нет информации о работах"} </div>
                <Timetable workTimes={workPeriods} containerWidth={1280}/>
            </div>

        </div>
    )
}

export default TaskItem;
