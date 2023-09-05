import * as React from 'react';
import { IItem, IShoppingCartItem, IUser, myUserContextType } from '../DTO/DTOs';
import { useCookies } from 'react-cookie';

interface Props{
    children:React.ReactNode
}

export const UserContext = React.createContext<myUserContextType | null>(null)

const UserContextProvider: React.FC<Props> = ({ children }) => {

    const [cookies, setCookies, removeCookies] = useCookies(["Token"]);
    const [user, setUser] = React.useState<IUser | null>(undefined);
    const [token, setToken] = React.useState<string | null>(() => {
        return cookies.Token === undefined ? null : cookies.Token
    })

    React.useEffect(() => {

        async function fetchUser() {
            if (cookies.Token === undefined || cookies.Token === "None") {
                return null;
            } else {
                const requestOptions = {
                    method: 'Get',
                    headers: { 'Content-Type': 'application/json', 'Authorization': cookies.Token }
                };
                try {
                    const response = await fetch("https://localhost:44316/api/Client", requestOptions);
                    const data = await response.json();
                    if (data !== null) {
                        return data;
                    } else {
                        return null;
                    }
                } catch (error) {
                    console.error('Error fetching user data:', error);
                    return null;
                }
            }
        }
        fetchUser().then(data => { setUser(data) }).then(() => {
            setToken(cookies.Token === undefined ? null : cookies.Token);
        });       
    }, [cookies.Token]);

    const LogIn = (user: IUser) => {
        setUser(user);
    }
    const LogOut = () => {
        removeCookies("Token", {path:'/'});
        setUser(null);
        setToken(null);
    }
    const AddItemToShoppingCart = (shoppingCartId: number, shoppingCartItemID: number, Quantity: number, item: IItem) => {
        const updatedUser = { ...user };
        updatedUser.ShoppingCart.find((i) => i.ShoppingCartID == shoppingCartId).ShoppingCartItems.push(
            {
                Item: item,
                ShoppingCartID: shoppingCartId,
                ShoppingCartItemID: shoppingCartItemID,
                Quantity: Quantity,
            })
        updatedUser.ShoppingCart.find((i) => i.ShoppingCartID == shoppingCartId).Total = updatedUser.ShoppingCart.find((i) => i.ShoppingCartID == shoppingCartId).Total + parseFloat((item.Price * Quantity).toFixed(2))
        setUser(updatedUser);
    }
    const UpdateShoppingCartItemQuantity = (shoppingCartId:number, shoppingCartItemID: number, quantity: number) =>
    {
        const updatedUser = { ...user };
        updatedUser.ShoppingCart.find((i) => i.ShoppingCartID == shoppingCartId).Total = updatedUser.ShoppingCart.find((i) => i.ShoppingCartID == shoppingCartId).Total -
            parseFloat(((updatedUser.ShoppingCart.find((i) => i.ShoppingCartID == shoppingCartId).ShoppingCartItems.find((i) => i.ShoppingCartItemID == shoppingCartItemID).Quantity * updatedUser.ShoppingCart.find((i) => i.ShoppingCartID == shoppingCartId).ShoppingCartItems.find((i) => i.ShoppingCartItemID == shoppingCartItemID).Item.Price)).toFixed(2)) +
            parseFloat((quantity * updatedUser.ShoppingCart.find((i) => i.ShoppingCartID == shoppingCartId).ShoppingCartItems.find((i) => i.ShoppingCartItemID == shoppingCartItemID).Item.Price).toFixed(2))
        updatedUser.ShoppingCart.find((i) => i.ShoppingCartID == shoppingCartId).ShoppingCartItems.find((i) => i.ShoppingCartItemID == shoppingCartItemID).Quantity = quantity;        
        setUser(updatedUser);
    }
    const RemoveItemFromShoppingCart = (shoppingCartItem: IShoppingCartItem) => {
        const updatedUser = { ...user };
        console.log(shoppingCartItem);
        const indexOfShoppingCart = user.ShoppingCart
            .findIndex((item) => item.ShoppingCartID === shoppingCartItem.ShoppingCartID);
        if (indexOfShoppingCart !== -1) {
            const indexToRemove = user.ShoppingCart[indexOfShoppingCart].ShoppingCartItems.findIndex((i) => i.ShoppingCartItemID == shoppingCartItem.ShoppingCartItemID);
            if (indexToRemove !== -1) {
                updatedUser.ShoppingCart[indexOfShoppingCart].Total = updatedUser.ShoppingCart[indexOfShoppingCart].Total - parseFloat((shoppingCartItem.Item.Price * shoppingCartItem.Quantity).toFixed(2)); 
                updatedUser.ShoppingCart[indexOfShoppingCart].ShoppingCartItems.splice(indexToRemove, 1);
                setUser(updatedUser);
            }
        }
    }

    return (
        <UserContext.Provider value={{ user, token, LogIn, LogOut, AddItemToShoppingCart, UpdateShoppingCartItemQuantity, RemoveItemFromShoppingCart }}>
            {children}
        </UserContext.Provider>
    )
    
}

export default UserContextProvider;