import { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button'
import { LoginModalContext } from '../../Context/LoginModalContext';
import { useCookies } from 'react-cookie';


function LoginLogout_BTN() {

    //eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [tokenCookie, setTokenCookie, removeTokenCookie] = useCookies(["Token"]);

    const [isLogIn, setIsLogIn] = useState(tokenCookie.Token !== undefined)

    const loginModal = useContext(LoginModalContext);

    useEffect(() =>
    {
        setIsLogIn(tokenCookie.Token !== undefined);
    }, [tokenCookie])

    const logOut = () =>
    {
        window.localStorage.removeItem("User");
        removeTokenCookie("Token");
        setIsLogIn(false)
    }

    const logIn = () =>
    {
        loginModal.OpenModal();
    }

    return (
        <>
            { isLogIn === false ? 
                <Button onClick={logIn}>Login</Button>:
            <Button onClick={logOut}>Logout</Button>
            }
        </>    
    );
}

export default LoginLogout_BTN;