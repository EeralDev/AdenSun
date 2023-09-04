import  { Fragment, useContext, useEffect, useState } from 'react';
import { IItem } from '../../DTO/DTOs';
import { MDBInput } from 'mdb-react-ui-kit';
import AddToShoppingCart_BTN from '../BTN/AddToShoppingCart_BTN';
import { UserContext } from '../../Context/UserContext';
import { Form} from 'react-bootstrap';
import LoadingSpinner from '../Loading/LoadingSpinner';
import ShoppingCartItemQuantity_BTN from '../BTN/ShoppingCartItemQuantity_BTN';
import RemoveShoppingCartItem_BTN from '../BTN/RemoveFromShoppingCart_BTN';

interface itemProps {
    Item: IItem
}

function Item(props: itemProps) {

    /*Ajout du context utilisateur*/

    const user = useContext(UserContext);

    const [itemInShoppingCart, setItemInShoppingCart] = useState(false);

    const [itemQuantity, setItemQuantity] = useState<number>(1);

    const [shoppingCartIndex, setShoppingCartIndex] = useState<number>(0);

    useEffect(() => {
        setItemInShoppingCart(isItemInShoppingCart())
        console.log(props.Item);
    }, [user, shoppingCartIndex])

    const discountPrice = (item: IItem): number => {
        let result = item.Price;
        item.Discounts.forEach((discount) => {
            result = result - item.Price * discount.Amount/100;
        })
        return Math.ceil(result * 100) / 100
    }

    const isItemInShoppingCart = ():boolean =>
    {
        let result = false;
        if (user.user !== null && user.user !== undefined)
        {
            result = user.user.ShoppingCart[shoppingCartIndex].ShoppingCartItems
                .findIndex((shoppingCartItem) => shoppingCartItem.Item.Item_ID === props.Item.Item_ID) !== -1;
        }
        return result
    }




    if (user.user === undefined)
    {
        return (
            <LoadingSpinner/>
    )
    }
    return (
        <div className="container">
            <div className="row">
                <div className="">
                    <div className="card">
                        <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                            data-mdb-ripple-color="light">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/belt.webp"
                                className="w-100" />
                            <a href="#!">
                                <div className="mask">
                                    <div className="d-flex justify-content-start align-items-end h-100">
                                        {
                                            props.Item.Discounts.map((discount) =>

                                                <h5 key={`Discount${discount.Discount_ID}OnItem${props.Item.Item_ID}_h5`}>
                                                    <span key={`Discount${discount.Discount_ID}OnItem${props.Item.Item_ID}_span`} className="badge bg-danger ms-2">
                                                        -{discount.Amount} %
                                                    </span>
                                                </h5>
                                            )
                                        }
                                    </div>
                                </div>
                                <div className="hover-overlay">
                                    <div className="mask"></div>
                                </div>
                            </a>
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">{props.Item.Name}</h4>
                            <h6 className="card-subtitle mb-2 text-muted">
                                {
                                    props.Item.Categories.map((tree, index) =>
                                        <Fragment key={`Categorie${tree[tree.length - 1].CategoryID}_list`}>
                                            <span key={`Categorie${tree[tree.length - 1].CategoryID}_span`}>{tree[tree.length - 1].Name}</span>
                                            {
                                                (props.Item.Categories.length - 1 !== index) ?
                                                    <span key={`Categorie${tree[tree.length - 1].CategoryID}_divider`} className="text-primary">-</span > :
                                                    <Fragment key={`Categorie${tree[tree.length - 1].CategoryID}_end`}></Fragment>
                                            }
                                        </Fragment>
                                    )
                                }
                            </h6>
                            <p className="card-text">
                                {props.Item.Description}
                            </p>
                            <div className="options d-flex flex-fill">
                                <div className="form-outline">
                                    <div className="row">
                                        {
                                            (user.user !== null) ?
                                                <div className="col">
                                                    <Form.Select aria-label="Item Card Select" onChange={(e) => { setShoppingCartIndex(parseInt(e.target.value)); }}>                                                        
                                                        {
                                                            user.user.ShoppingCart.map((shoppingCart, index) =>
                                                                <option key={`ShoppingCart${shoppingCart.ShoppingCartID}_option`} value={index}>{index + 1}</option>
                                                            )
                                                        }
                                                    </Form.Select>
                                                </div> :
                                                <></>
                                        }
                                        <div className="col">
                                            {
                                                (itemInShoppingCart) ?
                                                    <ShoppingCartItemQuantity_BTN BSClass="quantity-input" shoppingCartItem={user.user?.ShoppingCart[shoppingCartIndex].ShoppingCartItems.find((shoppingCartItem) => shoppingCartItem.Item.Item_ID === props.Item.Item_ID)} />
                                                    :
                                                    <MDBInput label='Quantite' type="number" id="ItemQuantity" min="1" max={`${props.Item.Quantity}`} defaultValue={1} onChange={(e) => { setItemQuantity(parseInt(e.target.value)); }} />

                                            }
                                        </div>
                                    </div>
                                </div> 
                            </div>

                            <div className="buy d-flex justify-content-between align-items-center">
                                {
                                    (props.Item.Discounts.length === 0) ?
                                        <>
                                            <div className="price text-dark">
                                                <h5 className="mb-1 me-1">{props.Item.Price} EUR</h5>
                                            </div>
                                        </>
                                        :
                                        <>
                                            <div className="price text-dark">
                                                <h5 className="mb-1 me-1">{discountPrice(props.Item) } EUR</h5>
                                                <span className="text-danger"><s>{props.Item.Price} EUR</s></span>
                                            </div>
                                        </>
                                }
                                {
                                    (itemInShoppingCart)?
                                        <RemoveShoppingCartItem_BTN BSclass="btn btn-outline-primary btn-sm mt-2" shoppingCartItem={user.user?.ShoppingCart[shoppingCartIndex].ShoppingCartItems.find((shoppingCartItem) => shoppingCartItem.Item.Item_ID === props.Item.Item_ID)} />
                                        :
                                        <AddToShoppingCart_BTN onClick={() => setItemInShoppingCart(false)} key={"AddSC_BTN_" + props.Item.Item_ID} item={props.Item} shoppingCart={user.user?.ShoppingCart[shoppingCartIndex]} quantity={itemQuantity} />

                                }
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;