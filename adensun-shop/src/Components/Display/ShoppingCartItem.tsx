import React from 'react';
import { IItem, IShoppingCartItem } from '../../DTO/DTOs';
import { Button, InputGroup } from 'react-bootstrap';
import RemoveShoppingCartItem_BTN from '../BTN/RemoveFromShoppingCart_BTN';
import ShoppingCartItemQuantity_BTN from '../BTN/ShoppingCartItemQuantity_BTN';

interface itemInListProps
{
    shoppingCartItem: IShoppingCartItem
}

function ShoppingCartItem(props: itemInListProps)
{

    /*Fonction de calcul des prix réduit*/
    const discountPrice = (item: IItem): number =>
    {
        let result = item.Price;
        item.Discounts.forEach((discount) =>
        {
            result = result - item.Price * discount.Amount / 100;
        })
        return Math.ceil(result*100)/100
    }

    return (
        <section style={{ backgroundColor: '#eee' }} >
            <div className="container py-1">
                <div className="row justify-content-center mb-3">
                    <div className="col-md-12 col-xl-10">
                        <div className="card shadow-0 border rounded-3">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                                        <div className="bg-image hover-zoom ripple rounded ripple-surface">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp"
                                                className="w-100" />
                                            <a href="#!">
                                                <div className="hover-overlay">
                                                    <div className="mask"></div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-xl-6">
                                        <h5>{props.shoppingCartItem.Item.Name}</h5>
                                        <div className="d-flex flex-row">                        
                                            <span>Note Client : NaN</span>
                                        </div>
                                        <div className="d-flex flex-row">
                                            <span>Quantite :
                                                <ShoppingCartItemQuantity_BTN BSClass="quantity-input" shoppingCartItem={props.shoppingCartItem}/>                                                  
                                            </span>
                                        </div>
                                        <div className="mb-2 text-muted small">
                                            {
                                                props.shoppingCartItem.Item.Categories.map((tree, index) =>
                                                    <>
                                                        <span>{tree[tree.length - 1].Name}</span>
                                                        {
                                                            (props.shoppingCartItem.Item.Categories.length - 1 !== index) ?
                                                                <span className="text-primary">-</span > :
                                                                <></>
                                                        }                                                        
                                                    </>
                                                )
                                            }
                                        </div>
                                        <p className="text-truncate mb-4 mb-md-0">
                                            {props.shoppingCartItem.Item.CatchPhrase}
                                        </p>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                                        {
                                            (props.shoppingCartItem.Item.Discounts.length === 0) ?
                                                <>
                                                    <div className="d-flex flex-row align-items-center mb-1">
                                                        <h4 className="mb-1 me-1">{props.shoppingCartItem.Item.Price * props.shoppingCartItem.Quantity} EUR</h4>
                                                    </div>
                                                </>
                                                :
                                                <>
                                                    <div className="d-flex flex-row align-items-center mb-1">
                                                        <h4 className="mb-1 me-1">{discountPrice(props.shoppingCartItem.Item) * props.shoppingCartItem.Quantity} EUR</h4>
                                                        <span className="text-danger"><s>{ props.shoppingCartItem.Item.Price } EUR</s></span>
                                                    </div>
                                                    <h6 className="text-success">{props.shoppingCartItem.Item.Discounts.length} reduction(s) sur cette article</h6>
                                                </>
                                        }
                                        <div className="d-flex flex-column mt-4">
                                            <Button bsPrefix="btn btn-primary btn-sm" type="button" href={`/Item/${props.shoppingCartItem.Item.Item_ID}`}>Details</Button>
                                            <RemoveShoppingCartItem_BTN BSclass="btn btn-outline-primary btn-sm mt-2" shoppingCartItem={props.shoppingCartItem} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}



export default ShoppingCartItem;