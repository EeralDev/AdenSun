import React, { useContext, useState } from 'react';
import { UserContext } from '../../Context/UserContext';
import { IUser } from '../../DTO/DTOs';
import { MDBCheckbox, MDBInput, MDBTypography } from 'mdb-react-ui-kit';
import { Col, Row } from 'react-bootstrap';

function MyAccountPage() {

    const user = useContext(UserContext);

    const [currentUser, setCurrentUser] = useState<IUser>(user.user);

    return (
        <React.Fragment>
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
        </React.Fragment>

  
    );
}

export default MyAccountPage;