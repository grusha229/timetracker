import React, {InputHTMLAttributes} from 'react';
import s from './Input.module.css'

export interface iInputProps extends InputHTMLAttributes<HTMLInputElement>{
    ref?: any
}
s
const Input:React.FC<iInputProps> = ({placeholder,onChange,onKeyUp,value,ref}) => {
    return (
        <>
            <div className={s.inputs}>
                <input
                    className={s.messageInput}
                    placeholder={placeholder}
                    onChange={onChange}
                    onKeyUp={onKeyUp}
                    value={value}
                    ref={ref}
                />
            </div>
        </>
    );
}
s
export default Input
