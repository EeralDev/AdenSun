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

    const [isFormCorrect, setIsFormCorrect] = useState(false);

    useEffect(() => {        
        checkNewUser();
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
                console.log(`L'API a retourner le message suivant : ${data}`)
                navigate('/');
            }
            else {
                alert("Une erreur s'est produite. Veuillez reessayer ulterieurement.");
            }
        });
    }
    const checkNewUser = () =>
    {

        // Vérification de l'adresse e-mail
        const isMailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(newUser.NewUser.Mail);

        // Vérification du numéro de téléphone
        const isPhoneNumberValid = /^0\d{9}$/.test(newUser.NewUser.PhoneNumber);

        // Vérification de l'adresse
        const isAddressValid = newUser.NewUser.Adress.ZipCode !== null && !isNaN(newUser.NewUser.Adress.ZipCode)
            && newUser.NewUser.Adress.StreetName !== null && newUser.NewUser.Adress.StreetName !== ""
            && newUser.NewUser.Adress.StreetNumber !== null && !isNaN(newUser.NewUser.Adress.StreetNumber)
            && newUser.NewUser.Adress.City !== null && newUser.NewUser.Adress.City !== "";

        // Si toutes les vérifications sont vraies, isFormCorrect est vrai, sinon faux
        const isFormCorrect = isMailValid && isPhoneNumberValid && isAddressValid && newUser.Password !== null;
        console.log(newUser.NewUser.Adress.ZipCode);

        setIsFormCorrect(isFormCorrect);
    }

    return (
        <React.Fragment>
            <Row>
                <form className="p-4">
                    <MDBTypography tag='div' className='display-6 mb-3'>
                        Identite
                    </MDBTypography>
                    <Row className="row mb-4">
                        <Col xs lg={6}>
                            <MDBInput className='mb-4' type='email' label='Adresse mail' onChange={(e) => { setNewUser({ ...newUser, NewUser: { ...newUser.NewUser, Mail: e.target.value } }) }} />
                        </Col>
                        <Col xs lg={6}>
                            <MDBInput className='mb-4' type='text' label='Numero de telephone' onChange={(e) => { setNewUser({ ...newUser, NewUser: { ...newUser.NewUser, PhoneNumber: e.target.value } }) }} />
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
                            <MDBInput className='mb-4' type='number' label='Numero de rue' onChange={(e) => { setNewUser({ ...newUser, NewUser: { ...newUser.NewUser, Adress: { ...newUser.NewUser.Adress, StreetNumber: parseInt(e.target.value) } }, }) }} />
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
                            <MDBInput className='mb-4' type='text' label='Code Postal' onChange={(e) => { setNewUser({ ...newUser, NewUser: { ...newUser.NewUser, Adress: { ...newUser.NewUser.Adress, ZipCode: parseInt(e.target.value) } }, }) }} />
                        </Col>
                    </Row>
                </form>
            </Row>

            <Row className="d-flex align-items-center mb-3">
                <MDBBtn style={{ backgroundColor: "#29465c", borderColor: "#000" }} className="text-center" onClick={handleRegister} disabled={!isFormCorrect}>S'inscrire</MDBBtn>
            </Row>
           
        </React.Fragment>
    )
}

export default SignIn;
