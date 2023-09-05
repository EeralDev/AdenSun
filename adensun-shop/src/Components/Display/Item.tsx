import  { Fragment, useContext, useEffect, useState } from 'react';
import { IItem } from '../../DTO/DTOs';
import { MDBCard, MDBCardBody, MDBCardSubTitle, MDBCardText, MDBCardTitle, MDBContainer, MDBIcon, MDBInput, MDBRow } from 'mdb-react-ui-kit';
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
            result = result - parseFloat((item.Price * discount.Amount / 100).toFixed(2));
        })
        return result
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
        <MDBContainer fluid >
            <MDBRow  className="flex-row">
                <MDBCard className="d-flex">
                    <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light d-flex"
                        data-mdb-ripple-color="light">
                        <img src={`../../public/DynamicImage/${props.Item.Image}.jpg`}
                            className="w-100" />
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
                    </div>
                    <MDBCardBody className="card-body">
                        <MDBCardTitle>{props.Item.Name}</MDBCardTitle>
                        <MDBCardSubTitle className="card-subtitle mb-2 text-muted">
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
                        </MDBCardSubTitle>
                        <MDBCardText className="card-text">
                            {props.Item.Description}
                        </MDBCardText>
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
                        <div className="d-flex justify-content-between align-items-center">
                            {
                                (props.Item.Discounts.length === 0) ?
                                    <>
                                        <div className="text-dark">
                                            <h5 className="mb-1 me-1">{props.Item.Price} <span><MDBIcon fas className="ms-1" size="xs" icon="euro-sign" /></span></h5>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div className="d-flex text-dark align-items-center" >
                                            <h5 className="mb-1 me-1">{discountPrice(props.Item)} <span><MDBIcon fas className="ms-1" size="xs" icon="euro-sign" /></span></h5>
                                            <span className="text-danger"><s>{props.Item.Price}<MDBIcon fas className="ms-1" size="xs" icon="euro-sign" /></s></span>
                                        </div>
                                    </>
                            }
                            {
                                (itemInShoppingCart) ?
                                    <RemoveShoppingCartItem_BTN BSclass="btn btn-outline btn-sm mt-2" shoppingCartItem={user.user?.ShoppingCart[shoppingCartIndex].ShoppingCartItems.find((shoppingCartItem) => shoppingCartItem.Item.Item_ID === props.Item.Item_ID)} />
                                    :
                                    <AddToShoppingCart_BTN onClick={() => setItemInShoppingCart(false)} key={"AddSC_BTN_" + props.Item.Item_ID} item={props.Item} shoppingCart={user.user?.ShoppingCart[shoppingCartIndex]} quantity={itemQuantity} />
                                }
                        </div>
                    </MDBCardBody>
                </MDBCard>
            </MDBRow>
        </MDBContainer>
    );
}

export default Item;