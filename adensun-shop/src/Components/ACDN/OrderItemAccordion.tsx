import { Col, Row } from 'react-bootstrap';
import { IItem, IOrder } from '../../DTO/DTOs';
import { MDBAccordionItem, MDBBtn, MDBIcon, MDBModal, MDBModalBody, MDBModalContent, MDBModalDialog, MDBModalFooter, MDBModalHeader, MDBModalTitle, MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
import LoadingSpinner from '../Loading/LoadingSpinner';
import React, { useState } from 'react';

interface orderItemAccordionProps
{
    Order: IOrder
    collapseID: number
}

function OrderItemAccordion(props: orderItemAccordionProps) {

    const [isOrderDetailsModalOpen, setIsOrderDetailsModalOpen] = useState(false);
    const [isDeliveryModalOpen, setIsDeliveryModalOpen] = useState(false)

    const getTotalwithDiscounts = (order: IOrder): string => {
        let total = order?.Total;
        order?.OrderItems.forEach((item) => {
            item.Item.Discounts.forEach((discount) => {
                total = total - parseFloat((item.Item.Price * discount.Amount / 100).toFixed(2)) * item.Quantity;
            })
        })
        return total?.toFixed(2);
    }

    const discountPrice = (item: IItem): number => {
        let result = item.Price;
        item.Discounts?.forEach((discount) => {
            result = result - parseFloat((item.Price * discount.Amount / 100).toFixed(2));

        })
        return result
    }

    const openOrderDetailsModal = () =>
    {
        setIsOrderDetailsModalOpen(!isOrderDetailsModalOpen);
    }
    const openDeliveryModal = () => {
        setIsDeliveryModalOpen(!isDeliveryModalOpen);
    }


    if (props.Order === undefined)
    {
        return
        {
            <LoadingSpinner/>
        }
    }

    return (
        <React.Fragment>
            <MDBAccordionItem collapseId={props.collapseID} headerTitle={`Commande numero : ${props.Order?.OrderID} du ${props.Order?.CreationDate.toString().slice(0, 10)}`}>
                <Row>
                    <Col xs={6} md={6}>
                        <span>N de commande : <b>{props.Order?.OrderID}</b></span>
                        <br />
                        <span>Date de commande : <b>{props.Order?.CreationDate.toString().slice(0, 10)}</b></span>
                        <br />
                        <span>Date de  Validation : <b>{(props.Order?.ValidationDate === null) ? "Commande non valide" : props.Order?.ValidationDate.toString().slice(0, 10)}</b></span>
                        <br />
                        <span>Date d'expedition : <b>{(props.Order?.ValidationDate === null) ? "Commande non expedie" : props.Order?.ValidationDate.toString().slice(0, 10)}</b></span>
                    </Col>
                    <Col xs={6} md={6}>
                        <h6 className="mb-1 me-1 text-end">Total : {getTotalwithDiscounts(props.Order)} <span><MDBIcon fas className="ms-1" size="xs" icon="euro-sign" /></span></h6>
                        <p className="text-danger text-end"><s>{props.Order?.Total?.toFixed(2)}<span><MDBIcon fas className="ms-1" size="xs" icon="euro-sign" /></span></s></p>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <div className="d-grid  col-6">
                        <MDBBtn onClick={openOrderDetailsModal}>Afficher les articles commande</MDBBtn>
                    </div>
                    <div className="d-grid col-6">
                        <MDBBtn onClick={openDeliveryModal}>Statut de la livraison</MDBBtn>
                    </div>
                </Row>
            </MDBAccordionItem>
            <MDBModal tabIndex='-1' show={isOrderDetailsModalOpen} setShow={setIsOrderDetailsModalOpen}>
                <MDBModalDialog size='fullscreen'>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Details de la commande numero {props.Order?.OrderID}</MDBModalTitle>
                            <MDBBtn
                                type='button'
                                className='btn-close'
                                color='none'
                                onClick={openOrderDetailsModal}
                            ></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <Row>
                                <Col>
                                    <MDBTable>
                                        <MDBTableHead light>
                                            <tr>
                                                <th scope='col'>Identifiant</th>
                                                <th scope='col'>Nom</th>
                                                <th scope='col'>Prix</th>
                                                <th scope='col'>Prix apres reduction</th>
                                                <th scope='col'>Quantite</th>
                                            </tr>
                                        </MDBTableHead>
                                        <MDBTableBody>
                                            {
                                                props.Order.OrderItems.map((orderItem) =>
                                                {
                                                    return (
                                                        <React.Fragment>
                                                            <tr>
                                                                <th scope='row'>{orderItem.OrderItemID}</th>
                                                                <td>{orderItem.Item.Name}</td>
                                                                <td>{orderItem.Item.Price}</td>
                                                                <td>{(orderItem.Item.Discounts.length === 0)?"None":discountPrice(orderItem.Item)}</td>
                                                                <td>{orderItem.Quantity}</td>
                                                            </tr>                                                            
                                                        </React.Fragment>
                                                    )
                                                })
                                            }                                            
                                        </MDBTableBody>
                                    </MDBTable> 
                                </Col>
                            </Row>                                                       
                        </MDBModalBody>
                        <MDBModalFooter>
                            <h6 className="mb-1 me-1 text-end">Total : {getTotalwithDiscounts(props.Order)} <span><MDBIcon fas className="ms-1" size="xs" icon="euro-sign" /></span></h6>
                            <p className="text-danger text-end"><s>{props.Order?.Total?.toFixed(2)}<span><MDBIcon fas className="ms-1" size="xs" icon="euro-sign" /></span></s></p>
                            <MDBBtn type='button' color='secondary' onClick={openOrderDetailsModal}>
                                Close
                            </MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
            <MDBModal className="modal fade" show={isDeliveryModalOpen} setShow={setIsDeliveryModalOpen} tabIndex={-1}>
                <MDBModalDialog size="lg">
                    <MDBModalContent style={{ borderRadius: "10px" }}>
                        <MDBModalHeader className="border-bottom-0">
                            <MDBBtn
                                type='button'
                                className='btn-close'
                                color='none'
                                onClick={openDeliveryModal}
                            ></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody className="text-start px-4 pt-0 pb-4">
                            <div className="text-center">
                                <h5 className="mb-3">Details de livraison</h5>
                                <h5 className="mb-3">Numero de suivie {props.Order?.Delivery?.TrackingNumber}</h5>
                                <h3 className="m-5 border">Statut de la commande : <b>{props.Order?.Delivery?.IsReceived ? "Colis recu" : "Colis en transite"}</b></h3>
                                <h5 className="mb-3">Expediteur : {props.Order?.Delivery?.Sender}</h5>
                                <h5 className="mb-3">Date d'expedition : {(props.Order?.ValidationDate === null) ? "Commande non expedie" : props.Order?.ValidationDate.toString().slice(0, 10)}</h5>
                            </div>
                        </MDBModalBody>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </React.Fragment>
    );
}

export default OrderItemAccordion;