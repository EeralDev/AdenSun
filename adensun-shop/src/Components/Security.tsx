import { Navigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../Context/UserContext';

function Security({ children }) {

    const user = useContext(UserContext);
    const [isLogin, setIsLogin] = useState(user.user === null)

    useEffect(() =>
    {
        console.log("je suis dans le useEffect de la sécurité");
        if (user.user === null)
        {
            setIsLogin(user.user === null)
        }
        
    }, [user.user])

    if (user.user === undefined)
    {
        return <div>Loading</div>
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