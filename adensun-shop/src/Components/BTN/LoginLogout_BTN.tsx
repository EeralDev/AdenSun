import { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button'
import { LoginModalContext } from '../../Context/LoginModalContext';
import { UserContext } from '../../Context/UserContext';
import { useCookies } from 'react-cookie';
import { redirect } from 'react-router-dom';


function LoginLogout_BTN() {

    const user = useContext(UserContext)

    const loginModal = useContext(LoginModalContext);

    const [button, setButton] = useState(<Button />);
    useEffect(() =>
    {
        
        {
            user.user === null ?
                setButton(< Button onClick = { logIn } > Login</Button >):
            setButton(<Button onClick={logOut}>Logout</Button>)
        }
    }, [user.user])

    const logOut = () =>
    {
        user.LogOut();
        redirect('/');
    }

    const logIn = () =>
    {
        loginModal.OpenModal();
    }

    return (
        <>
            { button }
        </>    
    );
}

export default LoginLogout_BTN;