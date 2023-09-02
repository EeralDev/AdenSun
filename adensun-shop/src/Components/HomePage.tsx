import { useContext } from 'react';
import { UserContext } from '../Context/UserContext';
import FakeHomePage from './FakeHomePage';
import ShoppingCartAccordion from './ACDN/ShoppingCartAccordion';
function HomePage() {

    const user = useContext(UserContext);

    return (
        <>
            <h1>Bienvenue dans la boutique Aden Sun's</h1>
            {(user.user === null) ?
                <h1>Vous n'êtes pas connecté</h1> :
                <p>Vous êtes connecté</p>}
            <br />
            <FakeHomePage />
            <ShoppingCartAccordion ShoppingCartIndex={0}/>
        </>
    );
}

export default HomePage;