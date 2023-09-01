import { useContext, useState } from 'react';
import ShoppingCartAccordion from './ACDN/ShoppingCartAccordion';
import { UserContext } from '../Context/UserContext';
import { Button } from 'react-bootstrap';
import ShoppingCartItem from './Display/ShoppingCartItem';

function ShoppingCartPage() {

    /*Import du Context définissant l'utilisateur */
    const user = useContext(UserContext);

    /*Création de l'état de la page*/
    const [currentShoppingCart, setCurrentShoppingCart] = useState(0)

    const handleButtonClick = (index:number) =>
    {
        setCurrentShoppingCart(index)
    }

    return (
        <>
            <p>L'utilisateur possede actuellement {user.user?.ShoppingCart[currentShoppingCart].ShoppingCartItems.length} panier</p>
            <>
                {user.user?.ShoppingCart.map((item, index) =>
                    <Button key={`Button_ShoppingCart_${user.user.ShoppingCart[index].ShoppingCartID}`} onClick={() => handleButtonClick(index)}>Panier numero {index + 1}</Button>)
                }
            </> 
            {
                user.user?.ShoppingCart[currentShoppingCart].ShoppingCartItems.map((item, index) =>
                    <ShoppingCartItem key={`Shopping_ItemInList_${item.ShoppingCartItemID}`} shoppingCartItem={item} />
                )
            }
        </>
    );
}

export default ShoppingCartPage;