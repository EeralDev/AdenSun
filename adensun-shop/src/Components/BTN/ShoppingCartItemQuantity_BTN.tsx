import { useContext } from 'react';
import { IShoppingCartItem } from '../../DTO/DTOs';
import { Button, InputGroup } from 'react-bootstrap';
import { UserContext } from '../../Context/UserContext';
import { LoginModalContext } from '../../Context/LoginModalContext';

interface QuantityBTNProps {
    shoppingCartItem: IShoppingCartItem,
    BSClass: string
}

function ShoppingCartItemQuantity_BTN(props:QuantityBTNProps) {

    const user = useContext(UserContext);
    const loginModal = useContext(LoginModalContext);


    const handleButton = (quantity: number) => {

        if (quantity > 0 && quantity <= props.shoppingCartItem.Item.Quantity)
        {
            if (user.user === null) {
                loginModal.OpenModal()
            }
            else {
                const requestOptions = {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json', 'Authorization': user.token }
                };
                fetch(`https://localhost:44316/api/Client/ShoppingCartItem/${props.shoppingCartItem.ShoppingCartItemID}?quantity=${quantity}`, requestOptions)
                    .then((res) => res.json())
                    .then(data => {
                        console.log(data);
                        if (data[0] !== 'E') {
                            user.UpdateShoppingCartItemQuantity(props.shoppingCartItem.ShoppingCartID, props.shoppingCartItem.ShoppingCartItemID, quantity);
                            console.log(user.user);
                        }
                        else {
                            alert(data);
                        }
                    });
            }
        }        
    }

    return (
        <div className={props.BSClass}>
            <InputGroup>
                <Button type='button' className="quantity-left-minus btn-number" onClick={() => { handleButton(props.shoppingCartItem.Quantity - 1) }}>
                    <i className="fas fa-minus"></i>
                </Button>
                <input className="w-25" type="text" value={props.shoppingCartItem?.Quantity} style={{ textAlign: 'center' }} readOnly />
                <Button className="" onClick={() => { handleButton(props.shoppingCartItem.Quantity + 1) }}>
                    <i className="fas fa-plus"></i>
                </Button>
            </InputGroup>
        </div>
    );
}

export default ShoppingCartItemQuantity_BTN;