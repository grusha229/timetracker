import React, {InputHTMLAttributes} from 'react';
import s from './Input.module.css'

export interface iInputProps extends InputHTMLAttributes<HTMLInputElement>{

}

const Input:React.FC<iInputProps> = ({placeholder}) => {
    return (
        <>
            <div className={s.inputs}>
                <input
                    className={s.messageInput}
                    placeholder={placeholder}
                />
            </div>
        </>
    );
}
s
export default Input
