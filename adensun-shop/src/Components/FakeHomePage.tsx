/*import React from 'react';*/

import React, { useEffect, useState } from "react";
import AddToShoppingCart_BTN from "./BTN/AddToShoppingCart_BTN";
import LoginLogout_BTN from "./BTN/LoginLogout_BTN"
import { IItem } from "../DTO/DTOs";

function FakeHomePage() {
    const [bearer, setBearer] = useState("");
    const [items, setItems] = useState < IItem[]>([]);


    /*Ici on utilise useEffect comme un constructeur*/
    useEffect(() =>
    {
        fetch('https://localhost:44316/api/Public/Item').then((res) => res.json()).then(data => setItems(data));
    }, [])

    useEffect(() =>
    {
        setBearer("Vous n'etes pas connecter");
    }, [])

    return (
        <>
            <h2>{bearer}</h2>
            <h3>Voici la liste de nos produits</h3>
            <ul>
                {items.map(item => {
                    return (
                        <React.Fragment key={"RC/" + item.Item_ID } >
                            <li key={"items_" + item.Item_ID}>{item.Name}</li>
                            <AddToShoppingCart_BTN key={"AddSC_BTN_" + item.Item_ID} item={item} shoppingCart={JSON.parse(localStorage.getItem("User")).ShoppingCart[0]} quantity={1} />
                        </React.Fragment>
                    )
                })}
            </ul>
            <LoginLogout_BTN/>
        </>
    );
}

export default FakeHomePage;