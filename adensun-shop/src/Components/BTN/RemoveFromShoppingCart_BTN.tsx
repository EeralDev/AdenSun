import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { LoginModalContext } from '../../Context/LoginModalContext';
import { useCookies } from 'react-cookie';
import { UserContext } from '../../Context/UserContext';
import { IShoppingCartItem } from '../../DTO/DTOs';

interface RemoveShoppingCartItemProps {
    BSclass: string
    shoppingCartItem: IShoppingCartItem
}

function RemoveShoppingCartItem_BTN(props: RemoveShoppingCartItemProps) {
    const [tokenCookie] = useCookies(["Token"])

    /*Récupération du context d'affichage de la modal*/
    const loginModal = useContext(LoginModalContext);
    const user = useContext(UserContext);


    const handleButton = () => {
        if (tokenCookie.Token === undefined) {
            loginModal.OpenModal()
        }
        else {
            const requestOptions = {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json', 'Authorization': tokenCookie.Token }
            };
            fetch(`https://localhost:44316/api/Client/ShoppingCartItem/${props.shoppingCartItem.ShoppingCartItemID}`, requestOptions)
                .then((res) => res.json())
                .then(data => {
                    alert(data)
                    if (data[0] !== 'E') {
                        user.RemoveItemFromShoppingCart(props.shoppingCartItem);
                    }
                    else {
                        alert(data);
                    }
                }
            );
        }
    }

    return (
        <>
            <Button bsPrefix={props.BSclass} onClick={handleButton} type='button'>Supprimer du panier</Button>
        </>
    );
}

export default RemoveShoppingCartItem_BTN;