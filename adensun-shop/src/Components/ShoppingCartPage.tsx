import { useContext, useState } from 'react';
import { UserContext } from '../Context/UserContext';
import { Button, Col, Container, Row } from 'react-bootstrap';
import ShoppingCartItem from './Display/ShoppingCartItem';
import { MDBBtn, MDBCard, MDBCardBody, MDBIcon, MDBInput, MDBTypography } from 'mdb-react-ui-kit';
import NoITemInShoppingCart from '../../public/NoItemInShoppingCart.jpg'

function ShoppingCartPage() {

    /*Import du Context définissant l'utilisateur */
    const user = useContext(UserContext);

    /*Création de l'état de la page*/
    const [currentShoppingCart, setCurrentShoppingCart] = useState(0)

    const handleButtonClick = (index:number) =>
    {
        setCurrentShoppingCart(index)
    }

    const getTotalwithDiscounts = ():number =>
    {
        let total = user.user?.ShoppingCart[currentShoppingCart].Total;
        user.user?.ShoppingCart[currentShoppingCart].ShoppingCartItems.forEach((item) =>
        {
            item.Item.Discounts.forEach((discount) =>
            {
                total = total - ((item.Item.Price * (discount.Amount / 100)) * item.Quantity);
            })
        })
        return Math.ceil(total * 100) / 100
    }

    return (
        <>
            <Container fluid>
                <MDBTypography tag='div' className='text-center display-1 pt-3 pb-3 mb-3'>
                    Vos Paniers
                </MDBTypography>
                <Row>
                    <Col className="text-center">
                        {user.user?.ShoppingCart.map((item, index) =>
                            <Button key={`Button_ShoppingCart_${user.user.ShoppingCart[index].ShoppingCartID}`} onClick={() => handleButtonClick(index)}>Panier numero {index + 1}</Button>)
                        }
                    </Col> 
                </Row>
                <MDBCard className="mt-3 mb-3">
                    <MDBCardBody>
                        <Row>
                            <Col xs={12} md={9} className="border-end">
                                <MDBTypography tag='div' className='text-center display-6 pt-3 pb-3 mb-3'>
                                    Vos Produits
                                </MDBTypography>
                                {
                                    (user.user?.ShoppingCart[currentShoppingCart].ShoppingCartItems.length === 0)?
                                        <div>
                                            <Row>
                                                <Col className="text-center">
                                                    <p>N'auriez-vous pas oublie vos epices ?</p>
                                                </Col>
                                            </Row>
                                            <Row >
                                                <Col className="d-flex align-items-center justify-content-center">
                                                    <img
                                                        src={NoITemInShoppingCart}
                                                        className='hover-shadow img-thumbnail my-auto'
                                                        alt='Vous avez déçu le cuisinier !'
                                                    />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col className="text-center">
                                                    <MDBBtn href="/Item/0/1">
                                                        Acheter des epices.
                                                    </MDBBtn>
                                                </Col>
                                            </Row>
                                        </div>
                                        :
                                        <div>
                                            {
                                                user.user?.ShoppingCart[currentShoppingCart].ShoppingCartItems.map((item) =>
                                                    <ShoppingCartItem key={`Shopping_ItemInList_${item.ShoppingCartItemID}`} shoppingCartItem={item} />
                                                )
                                            }
                                        </div>
                                }                                  

                                <Row className="text-end">
                                    <Col className="border">
                                        <h4 className="mb-1 me-1">Total : {getTotalwithDiscounts()} <span><MDBIcon fas className="ms-1" size="xs" icon="euro-sign" /></span></h4>
                                        <span className="text-danger"><s>{user.user?.ShoppingCart[currentShoppingCart].Total}<span><MDBIcon fas className="ms-1" size="xs" icon="euro-sign" /></span></s></span>

                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={12} md={3} >
                                <MDBTypography tag='div' className='text-center display-6 pt-3 pb-3 mb-3'>
                                   Paiements
                                </MDBTypography>
                                <form className="mb-5">

                                    
                                        <MDBInput type="text" id="typeText" className="form-control form-control-lg" size="17"
                                            value="1234 5678 9012 3457" minLength={19} maxLength={19} />
                                        <label className="form-label" htmlFor="typeText">Card Number</label>                                    

                                    
                                        <MDBInput type="text" id="typeName" className="form-control form-control-lg" size="17"
                                            value="John Smith" />
                                        <label className="form-label" htmlFor="typeName">Name on card</label>                            

                                    <div className="row">
                                        <div className="col-md-6 mb-5">
                                                <MDBInput type="text" id="typeExp" className="form-control form-control-lg" value="01/22"
                                                    size="7" minLength={7} maxLength={7} />
                                                <label className="form-label" htmlFor="typeExp">Expiration</label>
                                            
                                        </div>
                                        <div className="col-md-6 mb-5">
                                            
                                                <MDBInput type="password" id="typeText" className="form-control form-control-lg"
                                                    value="&#9679;&#9679;&#9679;" size="1" minLength={3} maxLength={3} />
                                                <label className="form-label" htmlFor="typeText">Cvv</label>
                                            
                                        </div>
                                    </div>
                                    <MDBBtn type="button" className="btn btn-primary btn-block btn-lg" disabled={user.user?.ShoppingCart[currentShoppingCart].ShoppingCartItems.length === 0}>Confirmer le paiement</MDBBtn>

                                    <MDBBtn tag='a' className="text-center mt-5 "href='/Item/0/1'>
                                        Continuer vos achats
                                    </MDBBtn>

                                </form>
                            </Col>
                        </Row>
                    </MDBCardBody>
                </MDBCard>

            </Container>
        </>
    );
}

export default ShoppingCartPage;