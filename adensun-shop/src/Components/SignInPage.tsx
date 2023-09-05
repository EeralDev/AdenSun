import React, { useEffect, useState } from 'react';
import { IRegisterBriefCase } from '../Types/RegisterBriefCase';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCheckbox, MDBCol, MDBContainer, MDBInput, MDBInputGroup, MDBRow, MDBValidation, MDBValidationItem } from 'mdb-react-ui-kit';

function SignIn() {



    const [newUser, setNewUser] = useState<IRegisterBriefCase>(
        {
            NewUser: {
                Mail: null,
                PhoneNumber: null,
                CreatedDate: new Date(),
                IsProfessional: null,
                Adress: {
                    StreetNumber: null,
                    StreetName: null,
                    AdressLine: null,
                    ZipCode: null,
                    City: null,
                    RegionID: null,
                    DepartmentID: null
                }
            },
            Password:null
        })

    useEffect(() =>
    {
        console.log(newUser);
    }, [newUser])


    return (
        <React.Fragment>
            <MDBInput type="text" onChange={(e) => { setNewUser({ ...newUser, NewUser: { ...newUser.NewUser, Mail:e.target.value } }) }} />
        </React.Fragment>
  );
}

export default SignIn;