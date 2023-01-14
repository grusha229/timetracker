import React from 'react';
import "./Header.scss"
import Button from "../../components/Button/Button";
import {useSelector} from "react-redux";
import {logout} from "../../redux/userSlice";


interface iHeaderProps {
    userName: string
}

const Header:React.FC = ({}) => {

    // @ts-ignore
    const userName = useSelector((state) => state.user.user.fullName);

    return (
        <div className={`header`}>
            <div className={'container'}>
                <div className={'content'}>
                    <div className={`username`}>
                        {userName}
                    </div>
                    <div className={`logout`}>
                        <Button onClick={logout}>
                            Выйти
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
