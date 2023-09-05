import { MDBBtn, MDBCard, MDBCardBody, MDBCardHeader, MDBCheckbox, MDBCol, MDBInput, MDBListGroup, MDBListGroupItem, MDBRow, MDBTypography } from 'mdb-react-ui-kit';
import React, { useContext, useState } from 'react';
import { UserContext } from '../../Context/UserContext';
import { Col, Row } from 'react-bootstrap';
import { IItem, IUser } from '../../DTO/DTOs';
import { useNavigate, useParams } from 'react-router-dom';
import LoadingSpinner from '../Loading/LoadingSpinner';

function ValidateOrderPage() {

    const navigate = useNavigate();

    const user = useContext(UserContext);

    const urlParams = useParams();

    const [currentUser, setCurrentUser] = useState<IUser>(user.user);

    const discountPrice = (item: IItem): number => {
        let result = item.Price;
        item.Discounts.forEach((discount) => {
            result = result - parseFloat((item.Price * discount.Amount / 100).toFixed(2));

        })
        console.log(result);
        return result
    }

    const getTotalwithDiscounts = (): string => {
        let total = user.user?.ShoppingCart[parseInt(urlParams.shoppingCartIndex)].Total;
        user.user?.ShoppingCart[parseInt(urlParams.shoppingCartIndex)].ShoppingCartItems.forEach((item) => {
            item.Item.Discounts.forEach((discount) => {
                total = total - parseFloat((item.Item.Price * discount.Amount / 100).toFixed(2)) * item.Quantity;
            })
        })
        return total?.toFixed(2);
    }

    if (user.user === undefined)
    {
        return (<LoadingSpinner/>)
    }

    const handleOrder = () =>
    {
        if (user.user === null) {
            alert("Error vous ne semblez pas connecter vous ne pouvez valider cette commande.");
        }
        else {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Authorization': user.token }
            };
            fetch(`https://localhost:44316/api/Client/Order/${user.user?.ShoppingCart[parseInt(urlParams.shoppingCartIndex)].ShoppingCartID}`, requestOptions)
                .then((res) => res.json())
                .then(data => {
                    alert(data);                    
                }
            );
            navigate("/Account");
        }
    }

    return (
        <React.Fragment>
            <MDBRow>
                <MDBCol className="col-md-8 mb-4">
                    <MDBCard className="mb-4">
                        <MDBCardHeader className="py-3">
                            <h3 className="mb-2">Information Client</h3>
                        </MDBCardHeader>
                        <MDBCardBody>
                            <form>
                                <MDBTypography tag='div' className='h-5 pt-3 pb-3 mb-3'>
                                    Identite
                                </MDBTypography>
                                <Row className="row mb-4">
                                    <Col xs lg={6}>
                                        <MDBInput className='mb-4' type='email' label='Adresse mail' defaultValue={currentUser?.Mail} readonly />
                                    </Col>
                                    <Col xs lg={6}>
                                        <MDBInput className='mb-4' type='tel' label='Numero de telephone' defaultValue={currentUser?.PhoneNumber} onChange={(e) => { setCurrentUser({ ...currentUser, PhoneNumber: e.target.value }) }} />
                                    </Col>
                                    <Col xs lg={12}>
                                        <MDBCheckbox className='mb-4' label='Compte pro' defaultChecked={currentUser?.IsProfessional} onChange={(e) => { setCurrentUser({ ...currentUser, IsProfessional: e.target.checked }) }} />
                                    </Col>
                                </Row>
                                <hr />
                                <MDBTypography tag='div' className='h-5 pt-3 pb-3 mb-3'>
                                    Adresse
                                </MDBTypography>
                                <Row>
                                    <Col>
                                        <MDBInput className='mb-4' type='number' label='Numero de rue' defaultValue={currentUser?.Adress.StreetNumber} onChange={(e) => { setCurrentUser({ ...currentUser, Adress: { ...currentUser.Adress, StreetNumber: parseInt(e.target.value) } }) }} />
                                    </Col>
                                    <Col>
                                        <MDBInput className='mb-4' type='text' label='Nom de rue' defaultValue={currentUser?.Adress.StreetName} onChange={(e) => { setCurrentUser({ ...currentUser, Adress: { ...currentUser.Adress, StreetName: e.target.value } }) }} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <MDBInput className='mb-4' type='text' label="Complement d'adresse" defaultValue={currentUser?.Adress.AdressLine} onChange={(e) => { setCurrentUser({ ...currentUser, Adress: { ...currentUser.Adress, AdressLine: e.target.value } }) }} />
                                    </Col>                               
                                </Row>
                                <Row>
                                    <Col>
                                        <MDBInput className='mb-4' type='text' label="Ville" defaultValue={currentUser?.Adress.City} onChange={(e) => { setCurrentUser({ ...currentUser, Adress: { ...currentUser.Adress, City: e.target.value } }) }} />
                                    </Col>
                                    <Col>
                                        <MDBInput className='mb-4' type='text' label='Code Postal' defaultValue={currentUser?.Adress.ZipCode} onChange={(e) => { setCurrentUser({ ...currentUser, Adress: { ...currentUser.Adress, ZipCode: parseInt(e.target.value) } }) }} />
                                    </Col>
                                </Row>
                            </form>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <Col className="col-md-4 mb-4">
                    <MDBCard className="mb-4">
                        <MDBCardHeader className="py-3">
                            <h5 className="mb-0">Resume de la commande</h5>
                        </MDBCardHeader>
                        <MDBCardBody>
                            <MDBListGroup className="list-group-flush">
                                {
                                    user.user.ShoppingCart[parseInt(urlParams.shoppingCartIndex)]?.ShoppingCartItems.map((shoppingCartItem) =>
                                        <div className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                            <span>{shoppingCartItem.Quantity}x  <b>{shoppingCartItem.Item.Name}</b></span>
                                            <span>{((discountPrice(shoppingCartItem.Item) * shoppingCartItem.Quantity)).toFixed(2)}</span>
                                            </div>
                                    )
                                }
                                <MDBListGroupItem className="d-flex justify-content-between align-items-center px-0">
                                    Livraison
                                    <span>Offerte</span>
                                </MDBListGroupItem>
                                <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                    <div>
                                        <strong>Total : </strong>
                                    </div>
                                    <span><strong>{getTotalwithDiscounts()}</strong></span>
                                </MDBListGroupItem>
                            </MDBListGroup>
                            <MDBBtn type="button" onClick={handleOrder} className="btn btn-primary btn-lg btn-block">
                                Confirmer l'achat
                            </MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </Col>
            </MDBRow>
        </React.Fragment>
  );
}

export default ValidateOrderPage;