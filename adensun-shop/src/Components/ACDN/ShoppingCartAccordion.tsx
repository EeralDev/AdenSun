import { Fragment, useContext } from 'react';
import { Accordion } from 'react-bootstrap';
import RemoveShoppingCartItem_BTN from '../BTN/RemoveFromShoppingCart_BTN';
import { UserContext } from '../../Context/UserContext';

function ShoppingCartAccordion(props) {

    const user = useContext(UserContext);

    return (
        <Accordion>
            {
                user.user?.ShoppingCart[props.ShoppingCartIndex].ShoppingCartItems.map(shoppingCartItem => {
                    return (
                        <Fragment key={`SCI_ACDN_${shoppingCartItem.ShoppingCartItemID}`}>
                            <Accordion.Item eventKey={`${shoppingCartItem.Item.Item_ID}`}>
                                <Accordion.Header>{`${shoppingCartItem.Item.Name}/${shoppingCartItem.Quantity}`}</Accordion.Header>
                                <Accordion.Body>
                                    {JSON.stringify(shoppingCartItem)}
                                    <RemoveShoppingCartItem_BTN key={`Remove_${shoppingCartItem.ShoppingCartItemID}_BTN`}  shoppingCartItem={shoppingCartItem} />
                                </Accordion.Body>
                            </Accordion.Item>
                        </Fragment>
                    )
                })
            }
      </Accordion>
  );
}

export default ShoppingCartAccordion;