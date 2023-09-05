import './App.css';
import LoginModal from './Components/MDL/LoginModal';
import LoginModalContextProvider from "./Context/LoginModalContext";
import { CookiesProvider } from "react-cookie";
import UserContextProvider from './Context/UserContext';
import HomePage from './Components/HomePage';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './Components/AboutPage';
import ShoppingCartPage from './Components/ShoppingCartPage';
import AccountPage from './Components/AccountPage';
import ItemPage from './Components/ItemPage';
import GlobalNavBar from './Components/NAV/GlobalNavBar';
import ErrorPage from './Components/ErrorPage';
import Orders from './Components/NestedPage/Orders';
import MyAccountPage from './Components/NestedPage/MyAccountPage';
import OrderDetails from './Components/DynamicPage/OrderDetails';
import Security from './Components/Security';
import ItemDetails from './Components/DynamicPage/ItemDetails';
import SignIn from './Components/SignInPage';
import ConfirmOrderPage from './Components/OrderProcess/ConfirmOrderPage';
import ValidateOrderPage from './Components/OrderProcess/ValidateOrderPage';

function App() {

    return (
        <>
            <CookiesProvider>
                <LoginModalContextProvider>
                    <UserContextProvider>
                        <GlobalNavBar/>
                        <Routes>
                            <Route path='/' element={<HomePage />} />
                            <Route path='About' element={<AboutPage />} />
                            S
                            <Route path='Account' element={<Security><AccountPage /></Security>}> 
                            </Route>
                            <Route path='Account/Orders/Order/:orderId' element={<Security><OrderDetails /></Security>} /> 

                            <Route path='Item/:categorieID/:page' element={<ItemPage />} />
                            <Route path='Item/:itemId' element={<ItemDetails />} />

                            <Route path='ShoppingCart' element={<Security><ShoppingCartPage /></Security>} />
                            <Route path='ValidateOrder/:shoppingCartIndex' element={<Security><ValidateOrderPage /></Security>} />
                            <Route path='ConfirmOrder' element={<Security><ConfirmOrderPage /></Security>} />

                            <Route path='SignIn' element={<SignIn />} />

                            <Route path='*' element={<ErrorPage /> } />
                        </Routes>
                        <LoginModal />
                    </UserContextProvider>
                </LoginModalContextProvider>
            </CookiesProvider> 
        </>
    )
}

export default App
