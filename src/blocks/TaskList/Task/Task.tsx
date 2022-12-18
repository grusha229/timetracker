import React, {useState,useEffect} from 'react';
import "./Task.scss"
import Button from "../../../components/button/Button";
import Timer from "../../../components/Timer/Timer";

export interface Time {
    hours: number,
    minutes: number,
    seconds: number
}

export interface iTaskProps {
    status: boolean,
    name: string,
    description: string,
    time?: Time
}

const Task:React.FC<iTaskProps> = ({status,name,description,time}) => {

    const [Seconds, setSeconds] = useState(7190);
    const [isSecondsRun, setIsSecondsRun] = useState(false);

    useEffect(() => {
        if (isSecondsRun) {
            function increaseTime (seconds: number) {
                setSeconds(Seconds+seconds)
            }
            const interval = setInterval(() => increaseTime(1), 1000);

            const cleanup = () => {
                clearInterval(interval);
            };
            return cleanup;
        }
    });



    function handleTimer () {
        setIsSecondsRun(!isSecondsRun)
        console.log(isSecondsRun)
    }


    return (
        <div className={'task'}>
            <div>
                task status: {status ? "done" : "work in progress"}
            </div>
            <div>
                task name: {name}
            </div>
            <div>
                task description: {description}
            </div>
            <div>
                task time:
                <Timer seconds={Seconds}/>
            </div>
            <div>
                <Button onClick={handleTimer} type={"submit"} >
                    {isSecondsRun ? "Пауза" : "Старт"}
                </Button>
            </div>
        </div>
    )
}

export default Task;
