/*import React from 'react';*/

import React, { useContext, useEffect, useState } from "react";
import AddToShoppingCart_BTN from "./BTN/AddToShoppingCart_BTN";
import { IItem } from "../DTO/DTOs";
import { UserContext } from "../Context/UserContext";

function FakeHomePage() {
    const [items, setItems] = useState < IItem[]>([]);

    const user = useContext(UserContext);

    /*Ici on utilise useEffect comme un constructeur*/
    useEffect(() =>
    {
        fetch('https://localhost:44316/api/Public/Item').then((res) => res.json()).then(data => setItems(data));
    }, [])
    console.log("Console.log daprès déconnexion1");
    console.log(user.user)
    console.log("Console.log daprès déconnexion2");
    return (
        <>
            <h3>Voici la liste de nos produits</h3>
            <ul>
                {items.map(item => {
                    return (
                        <React.Fragment key={"RC/" + item.Item_ID } >
                            <li key={"items_" + item.Item_ID}>{item.Name}</li>
                            <AddToShoppingCart_BTN key={"AddSC_BTN_" + item.Item_ID} item={item} shoppingCart={user.user?.ShoppingCart[0]} quantity={1} />
                        </React.Fragment>
                    )
                })}
            </ul>
        </>
    );
}

export default FakeHomePage;