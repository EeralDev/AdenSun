import { useState, useEffect } from "react";
import { IRegisterBriefCase } from "../Types/RegisterBriefCase";
import { MDBBtn, MDBCheckbox, MDBInput, MDBTypography } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import React from "react";

function SignIn() {

    const navigate = useNavigate();

    const [newUser, setNewUser] = useState<IRegisterBriefCase>(
        {
            NewUser: {
                Mail: null,
                PhoneNumber: null,
                CreatedDate: new Date,
                IsProfessional: null,
                Adress: {
                    StreetNumber: null,
                    StreetName: null,
                    AdressLine: null,
                    ZipCode: null,
                    City: null,
                    RegionID: 1,
                    DepartmentID: 1
                }
            },
            Password: null
        })

    useEffect(() => {
        console.log(newUser);
    }, [newUser])

    /* appel a l'api */
    const handleRegister = () => {        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser)
        };
        fetch("https://localhost:44316/api/Public/Register", requestOptions).then((res) => res.json()).then(data => {
            if (data !== null) {
                alert(data)
                navigate('/');
            }
            else {
                alert("Error : l'API a renvoyer Null");
            }
        });
    }
    return (
        <React.Fragment>
            <form>
                <MDBTypography tag='div' className='h-5 pt-3 pb-3 mb-3'>
                    Identite
                </MDBTypography>
                <Row className="row mb-4">
                    <Col xs lg={6}>
                        <MDBInput className='mb-4' type='email' label='Adresse mail' onChange={(e) => { setNewUser({ ...newUser, NewUser: { ...newUser.NewUser, Mail: e.target.value } }) }} />
                    </Col>
                    <Col xs lg={6}>
                        <MDBInput className='mb-4' type='tel' label='Numero de telephone' onChange={(e) => { setNewUser({ ...newUser, NewUser: { ...newUser.NewUser, PhoneNumber: parseInt(e.target.value) } }) }} />
                    </Col>
                    <Col xs lg={6}>
                        <MDBInput className='mb-4' type='password' label='Password' onChange={(e) => { setNewUser({ ...newUser, Password: e.target.value }) }} />
                    </Col>
                    <Col xs lg={12}>
                        <MDBCheckbox className='mb-4' label='Compte pro' onChange={(e) => { setNewUser({ ...newUser, NewUser: { ...newUser.NewUser, IsProfessional: e.target.checked } }) }} />
                    </Col>
                </Row>
                <hr />
                <MDBTypography tag='div' className='h-5 pt-3 pb-3 mb-3'>
                    Adresse
                </MDBTypography>
                <Row>
                    <Col>
                        <MDBInput className='mb-4' type='number' label='Numero de rue' onChange={(e) => { setNewUser({ ...newUser, NewUser: { ...newUser.NewUser, Adress: { ...newUser.NewUser.Adress, ZipCode: e.target.value } }, }) }} />
                    </Col>
                    <Col>
                        <MDBInput className='mb-4' type='text' label='Nom de rue' onChange={(e) => { setNewUser({ ...newUser, NewUser: { ...newUser.NewUser, Adress: { ...newUser.NewUser.Adress, StreetName: e.target.value } }, }) }} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <MDBInput className='mb-4' type='text' label="Complement d'adresse" onChange={(e) => { setNewUser({ ...newUser, NewUser: { ...newUser.NewUser, Adress: { ...newUser.NewUser.Adress, AdressLine: e.target.value } }, }) }} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <MDBInput className='mb-4' type='text' label="Ville" onChange={(e) => { setNewUser({ ...newUser, NewUser: { ...newUser.NewUser, Adress: { ...newUser.NewUser.Adress, City: e.target.value } }, }) }} />
                    </Col>
                    <Col>
                        <MDBInput className='mb-4' type='text' label='Code Postal' onChange={(e) => { setNewUser({ ...newUser, NewUser: { ...newUser.NewUser, Adress: { ...newUser.NewUser.Adress, ZipCode: e.target.value } }, }) }} />
                    </Col>
                </Row>
            </form>
            <MDBBtn onClick={handleRegister}>S'inscrire</MDBBtn>
        </React.Fragment>
    )
}

export default SignIn;
