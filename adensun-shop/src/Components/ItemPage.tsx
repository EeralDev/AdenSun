import React, { useContext, useEffect, useState } from 'react';
import { IItem } from '../DTO/DTOs';
import AddToShoppingCart_BTN from './BTN/AddToShoppingCart_BTN';
import { UserContext } from '../Context/UserContext';
import Item from './Display/Item';

function ItemPage() {

    const user = useContext(UserContext);

    const [items, setItems] = useState<IItem[]>([]);

    useEffect(() => {
        fetch('https://localhost:44316/api/Public/Item').then((res) => res.json()).then(data => setItems(data));
    }, [])


    return (
        <>
            <ul>
                {items.map(item => {
                    return (
                        <React.Fragment key={"RC/" + item.Item_ID} >
                            <li key={"items_" + item.Item_ID}><Item Item={item} /></li>
                            <AddToShoppingCart_BTN key={"AddSC_BTN_" + item.Item_ID} item={item} shoppingCart={user.user?.ShoppingCart[0]} quantity={1} />
                        </React.Fragment>
                    )
                })}
            </ul>
        </>
    );
}

export default ItemPage;