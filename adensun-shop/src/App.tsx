/*import './App.css'*/
import FakeHomePage from './Components/FakeHomePage'
import LoginModal from './Components/LoginModal';
import LoginModalContextProvider from "./Context/LoginModalContext";
import { CookiesProvider } from "react-cookie";

function App() {

    return (
        <>
            <CookiesProvider>
                <LoginModalContextProvider>
                    <h1>Bienvenue dans la boutique Aden Sun's</h1>
                    <br />
                    <FakeHomePage />
                    <LoginModal />
                </LoginModalContextProvider>
            </CookiesProvider> 
        </>
    )
}

export default App
