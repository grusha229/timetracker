import React, {InputHTMLAttributes} from 'react';
import s from './Input.module.css'

export interface iInputProps extends InputHTMLAttributes<HTMLInputElement>{

}

const Input:React.FC<iInputProps> = ({placeholder,onChange}) => {
    return (
        <>
            <div className={s.inputs}>
                <input
                    className={s.messageInput}
                    placeholder={placeholder}
                    onChange={onChange}
                />
            </div>
        </>
    );
}
s
export default Input
