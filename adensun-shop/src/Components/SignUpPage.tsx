import { useState, useEffect } from "react";
import "./SignUpStyle.css";

import { IRegisterBriefCase } from "../Types/myRegisterBriefCase";
import React from "react";

function SignUp() {
  
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
            Password:null
      })
  
  useEffect(() =>
  {
  console.log(newUser);
  }, [newUser])
  
  /* appel a l'api */
  const handleFormSubmit = () =>
    {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser)
    };

    useEffect(() => {
       
        fetch('https://localhost:44316/api/Public/Register', requestOptions);
      }, [])
  }
  return (

    <form onSubmit={handleFormSubmit}>
    <div className="container bg-white p-4">
      <div className="row justify-content-center m-4">

          <div className="card-body m-3">
            <div className="text-end">
              <a href="home.html" className="text-end">
                <button type="button" className="btn-close"></button>
              </a>
              </div>
        <h2>Création de votre compte Aden'Sun</h2>

        <label htmlFor="Mail" className="form-label mt-3">Email</label><br />
        
            <input 
            
                type="email" 
                className="form-control w-75" 
                placeholder="Entrer votre adresse mail"
                onChange={(e) => { setNewUser({ ...newUser, NewUser: { ...newUser.NewUser, Mail:e.target.value } }) }}  />

        <div className="col-6">
        <label htmlFor="isProfessional" className="form-label mt-3">Etes-vous un professionnel ou un particulier ?</label><br />      
          <div className="form-check">
            <input className="form-check-input" 
            type="checkbox" 
            value="False" 
            id="flexCheckDefault" 
            onChange={(e) => { setNewUser({ ...newUser, NewUser: { ...newUser.NewUser, IsProfessional:Boolean(e.target.value) } }) }}  />

            <label className="form-check-label" htmlFor="flexCheckDefault">Particulier</label>
          </div>

          <div className="form-check">
            <input className="form-check-input" 
            type="checkbox" 
            value="True" 
            id="flexCheckChecked" 
            onChange={(e) => { setNewUser({ ...newUser, NewUser: { ...newUser.NewUser, IsProfessional:Boolean(e.target.value) } }) }}  />

            <label className="form-check-label" htmlFor="flexCheckChecked">Professionnel</label>
          </div>
  
            </div>
            <label htmlFor="PhoneNumber" className="form-label mt-3">Téléphone</label><br />
            <input 
                type="number" 
                className="form-control w-75" 
                placeholder="Entrer votre n° de téléphone"
                onChange={(e) => { setNewUser({ ...newUser, NewUser: { ...newUser.NewUser, PhoneNumber:parseInt(e.target.value) } }) }} />

            <label htmlFor="Password1" className="form-label mt-3">Mot de passe</label><br />
            <input 
                type="password" 
                className="password-input" 
                placeholder="Choisissez un mot de passe"
                onChange={(e) => { setNewUser({ ...newUser, Password: e.target.value } ) }} />
            
            <label htmlFor="Password2" className="form-label mt-3">Confirmer votre mot de passe</label><br />
            <input 
                type="password" 
                className="password-input"
                placeholder="Confirmation de votre mot de passe"
                onChange={(e) => { setNewUser({ ...newUser, Password: e.target.value } ) }}   />
                    
            <div className="row">
            <label htmlFor="AdressLine" className="form-label mt-3">Adresse :</label><br />
            <input 
                type="text" 
                className="form-control" 
                placeholder="Entrer votre adresse"
               
                onChange={(e) => { setNewUser({ ...newUser, NewUser: { ...newUser.NewUser, Adress: {...newUser.NewUser.Adress, AdressLine: e.target.value } },}) }}  />

            <div className="col-4">
            <label htmlFor="StreetNumber" className="form-label mt-3">N° de rue</label><br />
            <input 
                type="number" 
                className="form-control" 
                placeholder="Entrer le n° de la rue" 
                onChange={(e) => { setNewUser({ ...newUser, NewUser: { ...newUser.NewUser, Adress: {...newUser.NewUser.Adress, StreetNumber: parseInt(e.target.value) } },}) }}  />
            </div>
            <div className="col-6">
            <label htmlFor="StreetName" className="form-label mt-3">Rue</label><br />
            <input 
                type="text" 
                className="form-control" 
                placeholder="Entrer le nom de la rue" 
                onChange={(e) => { setNewUser({ ...newUser, NewUser: { ...newUser.NewUser, Adress: {...newUser.NewUser.Adress, StreetName: e.target.value } },}) }}  />
            </div>
            <div className="col-6">
            <label htmlFor="ZipCode" className="form-label mt-3">Code Postal</label><br />

                <input 
                type="text" 
                className="form-control" 
                placeholder="Entrer le code postal" 
                onChange={(e) => { setNewUser({ ...newUser, NewUser: { ...newUser.NewUser, Adress: {...newUser.NewUser.Adress, ZipCode: e.target.value } },}) }}  />
            </div>
            <div className="col-6">
            <label htmlFor="City" className="form-label mt-3">Ville</label><br />
                <input 
                type="text" 
                name = "City"
                id = "City"
                className="form-control" 
                placeholder="Entrer le nom de la ville" 
                onChange={(e) => { setNewUser({ ...newUser, NewUser: { ...newUser.NewUser, Adress: {...newUser.NewUser.Adress, City: e.target.value } },}) }}  />
            </div>
          </div>
        </div> 
    </div>
        
        <input type="submit" value="Inscription"/>
    </div>

    </form>
  )
}

export default SignUp;