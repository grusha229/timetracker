import React, {ButtonHTMLAttributes} from 'react';
import styles from './Button.module.css';
import {Time} from "../../blocks/TaskList/Task/Task";

export interface iTimer {
    seconds: number
}

const Timer: React.FC<iTimer> = ({seconds}) => {

    let parsedSeconds: number = seconds % 60
    let parsedMinutes: number = Math.trunc(seconds/60)
    let parsedHours: number = Math.trunc(parsedMinutes/60)
    parsedMinutes = parsedMinutes % 60

    return(
        <div>
            <p>{parsedHours.toString().padStart(2,'0')}:{parsedMinutes.toString().padStart(2,'0')}:{parsedSeconds.toString().padStart(2,'0')}</p>
        </div>
    );
};

export default Timer;
