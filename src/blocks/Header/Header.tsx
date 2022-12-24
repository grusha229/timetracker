import React from 'react';
import "./Header.scss"

interface iHeaderProps {
    userName: string
}

const Header:React.FC<iHeaderProps> = ({userName}) => {

    return (
        <div className={`header`}>
            <div className={'container'}>
                <div className={'content'}>
                    <div className={`username`}>
                        {userName}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
