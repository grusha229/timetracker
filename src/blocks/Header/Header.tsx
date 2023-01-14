import React, {useCallback} from 'react';
import "./Header.scss"
import Button from "../../components/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/userSlice";


interface iHeaderProps {
    userName: string
}

const Header:React.FC = ({}) => {

    const dispatch = useDispatch()

    const handleLogout = useCallback(() => {
        localStorage.removeItem('token');
        dispatch(logout())
    },[dispatch])

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
                        <Button onClick={handleLogout}>
                            Выйти
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
