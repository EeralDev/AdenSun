import { useContext} from 'react';
import Button from 'react-bootstrap/Button';
import { LoginModalContext } from '../../Context/LoginModalContext';
import { UserContext } from '../../Context/UserContext';

function AddToShoppingCart_BTN(props) {



    /*Récupération des context : affichage de la modal, utilisateur*/
    const loginModal = useContext(LoginModalContext);
    const user = useContext(UserContext);

    const handleButton = () =>
    {
        if (user.user === null) {
            loginModal.OpenModal()
        }
        else
        {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Authorization': user.token }
            };
            fetch(`https://localhost:44316/api/Client/ShoppingCartItem/${props.shoppingCart.ShoppingCartID}?itemID=${props.item.Item_ID}&quantity=${props.quantity}`, requestOptions)
                .then((res) => res.json())
                .then(data => {
                    alert(data);
                    if (data[0] !== 'E') {
                        user.AddItemToShoppingCart(props.shoppingCart.ShoppingCartID, data, props.quantity, props.item);
                    }
                    else
                    {
                        alert(data);
                    }
                });
        }
    }

    return (
        <>
            <Button onClick={handleButton} style={{ backgroundColor: "#29465c", borderColor: "#000" }}><i className="fas fa-shopping-cart"></i> Ajouter au panier</Button>
        </>
    );
}

export default AddToShoppingCart_BTN;