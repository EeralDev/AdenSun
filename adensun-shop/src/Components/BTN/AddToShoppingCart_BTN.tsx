import { useContext} from 'react';
import Button from 'react-bootstrap/Button';
import { LoginModalContext } from '../../Context/LoginModalContext';
import { useCookies } from 'react-cookie';
import { IItem, IUser } from '../../DTO/DTOs';

function AddToShoppingCart_BTN(props) {

    const [tokenCookie] = useCookies(["Token"])

    /*R�cup�ration du context d'affichage de la modal*/
    const loginModal = useContext(LoginModalContext);

    const handleButton = () =>
    {
        if (tokenCookie.Token === undefined) {
            loginModal.OpenModal()
        }
        else
        {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Authorization': tokenCookie.Token }
            };
            fetch(`https://localhost:44316/api/Client/ShoppingCartItem/${props.shoppingCart.ShoppingCartID}?itemID=${props.item.Item_ID}&quantity=${props.quantity}`, requestOptions)
                .then((res) => res.json())
                .then(data => {
                    alert(data)
                    if (data !== 'E') {
                        const currentUser: IUser = JSON.parse(localStorage.getItem("User"));
                        currentUser.ShoppingCart.find((item) => item.ShoppingCartID === props.shoppingCart.ShoppingCartID).ShoppingCartItems.push(
                            {
                                Item: props.item as IItem,
                                ShoppingCartID: props.shoppingCart.ShoppingCartID,
                                ShoppingCartItemID: data,
                                Quantity: props.quantity
                            });
                        window.localStorage.setItem("User", JSON.stringify(currentUser));
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
            <Button onClick={handleButton} >Ajouter au panier</Button>
        </>
    );
}

export default AddToShoppingCart_BTN;