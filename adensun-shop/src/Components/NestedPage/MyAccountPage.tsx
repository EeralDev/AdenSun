import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../Context/UserContext';
import { IUser } from '../../DTO/DTOs';
import { MDBCard, MDBCheckbox, MDBInput, MDBTypography } from 'mdb-react-ui-kit';
import { Col, Row } from 'react-bootstrap';
import UpdateUserBTN from '../BTN/UpdateUserBTN';

function MyAccountPage() {

    const user = useContext(UserContext);    

    const [currentUser, setCurrentUser] = useState<IUser>({ ...user.user });

    const [isFormCorrect, setIsFormCorrect] = useState(false);

    useEffect(() => {
        checkNewUser();
    }, [currentUser])

    const checkNewUser = () => {

        // Vérification de l'adresse e-mail
        const isMailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(currentUser.Mail);

        // Vérification du numéro de téléphone
        const isPhoneNumberValid = /^0\d{9}$/.test(currentUser.PhoneNumber);

        // Vérification de l'adresse
        const isAddressValid = currentUser.Adress.ZipCode !== null && !isNaN(currentUser.Adress.ZipCode)
            && currentUser.Adress.StreetName !== null && currentUser.Adress.StreetName !== ""
            && currentUser.Adress.StreetNumber !== null && !isNaN(currentUser.Adress.StreetNumber)
            && currentUser.Adress.City !== null && currentUser.Adress.City !== ""
        // Si toutes les vérifications sont vraies, isFormCorrect est vrai, sinon faux
        const isFormCorrect = isMailValid && isPhoneNumberValid && isAddressValid;

        setIsFormCorrect(isFormCorrect);
    }

    return (
        <React.Fragment>
            <form>
                <MDBCard className="p-3 m-3">
                    <MDBTypography tag='div' className='h-5 pb-2'>
                        Identite
                    </MDBTypography>
                    <Row className="row mb-4">
                        <Col xs lg={6}>
                            <MDBInput className='mb-4' type='email' label='Adresse mail' defaultValue={currentUser?.Mail} readonly />
                        </Col>
                        <Col xs lg={6}>
                            <MDBInput className='mb-4' type='text' label='Numero de telephone' defaultValue={currentUser?.PhoneNumber} onChange={(e) => { setCurrentUser({ ...currentUser, PhoneNumber: e.target.value }) }} />
                        </Col>
                        <Col xs lg={12}>
                            <MDBCheckbox className='mb-4' label='Compte pro' defaultChecked={currentUser?.IsProfessional} onChange={(e) => { setCurrentUser({ ...currentUser, IsProfessional: e.target.checked }) }} />
                        </Col>
                    </Row>
                    <hr />
                    <MDBTypography tag='div' className='h-5 pb-2'>
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
                    <UpdateUserBTN UpdateUser={currentUser} isDisabled={!isFormCorrect} />
                </MDBCard>                
            </form>
        </React.Fragment>

  
    );
}

export default MyAccountPage;