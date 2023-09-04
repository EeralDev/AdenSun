import React, { useEffect, useState } from 'react';
import { IRegisterBriefCase } from '../Types/myRegisterBriefCase';

function SignIn() {

const [newUser, setNewUser] = useState<IRegisterBriefCase>(
{
NewUser: {
          Mail: null,
          PhoneNumber: null,
          CreatedDate: null,
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

<h2>Inscription Aden'Sun</h2>

        <label htmlFor="CreatedDate" className="form-label" >Date de création</label>

<input type="text" 
onChange={(e) => { setNewUser({ ...newUser, NewUser: { ...newUser.NewUser, Mail:e.target.value } }) }} />


</React.Fragment>
);

}

export default SignIn;

