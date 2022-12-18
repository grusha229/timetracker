import React, {useState,useEffect} from 'react';
import "./Task.scss"
import Button from "../../../components/Button/Button";
import Timer from "../../../components/Timer/Timer";
import {iTaskProps} from "../TaskList";

export interface Time {
    hours: number,
    minutes: number,
    seconds: number
}

interface iTaskInternal extends iTaskProps {
    status?: "Done" | "Pause" | "InProgress",
}

const Task:React.FC<iTaskInternal> = ({name,description}) => {

    const [Seconds, setSeconds] = useState(0);
    const [isSecondsRun, setIsSecondsRun] = useState(false);

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



    function handleTimer () {
        setIsSecondsRun(!isSecondsRun)
        console.log(isSecondsRun)
    }


    return (
        <div className={'task'}>
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
                    {description}
                </div>
            </div>
            <div className={`task_item__time ${isSecondsRun ? "active" : "paused"}`}>
                <Timer seconds={Seconds}/>
            </div>
            <div className={'task_item__button'}>
                <Button onClick={handleTimer} type={"submit"} >
                    {isSecondsRun ? "Пауза" : "Старт"}
                </Button>
            </div>
        </div>
    )
}

export default Task;
