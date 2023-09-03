import { Navigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../Context/UserContext';
import LoadingSpinner from './Loading/LoadingSpinner';

function Security({ children }) {

    const user = useContext(UserContext);
    const [isLogin, setIsLogin] = useState(user.user === null)

    useEffect(() =>
    {
        if (user.user === null)
        {
            setIsLogin(user.user === null)
        }
        
    }, [user.user])

    if (user.user === undefined)
    {
        return <LoadingSpinner/>
    }

    return (
        <>{
            isLogin ?
                <Navigate to='/' /> :
                children
        }
        </>
    )
}

export default Security;