import * as React from 'react';
import { myModalContextType, IMyModal } from '../Types/myModal';

interface Props {
    children: React.ReactNode;
}

export const LoginModalContext = React.createContext<myModalContextType | null>(null);

const LoginModalContextProvider: React.FC<Props> = ({ children }) => {
    const [myModal, setMyModal] = React.useState<IMyModal>(
        {
            isOpen : false
        });
    const OpenModal = () => {
        setMyModal({isOpen:true});
    };
    const CloseModal = () => {
        setMyModal({isOpen:false});
    };
    return <LoginModalContext.Provider value={{ myModal, OpenModal, CloseModal }}>{children}</LoginModalContext.Provider>;
};

export default LoginModalContextProvider;