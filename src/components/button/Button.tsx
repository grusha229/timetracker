import React, {ButtonHTMLAttributes} from 'react';
import styles from './Button.module.css';

export interface iButtonProps extends
    ButtonHTMLAttributes<HTMLButtonElement> {
    onClick: () => void
}

const Button: React.FC<iButtonProps> = ({children, onClick, type}) => {
    return(
        <button
            className={styles.button}
            type={type}
            onClick={onClick}
        >{children}
        </button>
    );
};

export default Button;
