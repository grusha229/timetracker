import React, {useState,useEffect} from 'react';
import "./Task.scss"
import Button from "../../../components/Button/Button";
import Timer from "../../../components/Timer/Timer";
import {Task as TaskType} from "../../../redux/reducer/types";


const TaskItem:React.FC<TaskType> = ({name, time}) => {

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

    let date_parsed = new Date(time)
    let hours = date_parsed.toLocaleTimeString()
    let day = date_parsed.toLocaleDateString()
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
                    {`Создано ${day} в ${hours}`}
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

export default TaskItem;
