import React, { useContext } from 'react';
import { UserContext } from '../../Context/UserContext';
import { Button } from 'react-bootstrap';

function AddShoppingCartBtn() {

    const user = useContext(UserContext);

    const handleClick = () =>
    {
        if (user.user?.ShoppingCart.length >= 3) {
            alert("Vous n'avez pas le droit d'avoir plus de trois panier")
        }
        else
        {
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'Authorization': user.token }
            };
            fetch(`https://localhost:44316/api/Client/ShoppingCart`, requestOptions)
                .then((res) => res.json())
                .then(data => {
                    console.log(data);
                    if (data[0] !== 'E') {
                        user.AddShoppingCart(data);
                    }
                    else {
                        alert("Une erreur s'est produite. Veuillez reessayer ulterieurement.");
                    }
                });
        }
    }

    return (
        <Button onClick={handleClick} style={{ backgroundColor: "#29465c", borderColor: "#000" }}>Obtenir un nouveau panier</Button>
    );
}

export default AddShoppingCartBtn;