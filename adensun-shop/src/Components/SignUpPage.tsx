import { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client';
import "./SignUpStyle.css";

function SignUp() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs)
  }

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(inputs)
                        };

    useEffect(() => {
    
        fetch('https://localhost:44316/api/Public/Register', requestOptions);
    }, [])

  return (
    <form onSubmit={handleSubmit}>
    <div className="container bg-white p-4">
      <div className="row justify-content-center m-4">
        <div className="card" style={{ width: '550px' }}>
          <div className="card-body m-3">
            <div className="text-end">
              <a href="home.html" className="text-end">
                <button type="button" className="btn-close"></button>
              </a>
              </div>
        <h2>Inscription Aden'Sun</h2>
        <div className="row mt-4">

        <div className="col-6">
            <label htmlFor="isProfessionnel" className="form-label">Etes-vous un professionnel ?</label>
            <input 
                type="text" 
                name = "isProfessionnel"
                className="form-control" 
                placeholder="Entrer Oui ou Non"
                onChange={handleChange}  />

            </div>
            <label htmlFor="PhoneNumber" className="form-label mt-3">Téléphone</label><br />
            <input 
                type="text" 
                name = "PhoneNumber"
                className="form-control w-75" 
                placeholder="Entrer votre n° de téléphone"
                onChange={handleChange}   />

            <label htmlFor="Mail" className="form-label mt-3">Email</label><br />
            <input 
                type="email" 
                name = "Mail"
                className="form-control w-75" 
                placeholder="Entrer votre adresse mail"
                onChange={handleChange}  />

            <label htmlFor="Password" className="form-label mt-3">Mot de passe</label><br />
            <input 
                type="current-password" 
                name= "Password"
                className="form-control w-75" 
                placeholder="Choisissez un mot de passe"
                onChange= {handleChange}  />
                    
            <div className="row">
            <label htmlFor="AdressLine" className="form-label mt-3">Adresse :</label><br />
            <input 
                type="text" 
                name="AdressLine"
                className="form-control" 
                placeholder="Entrer votre adresse"
                onChange= {handleChange}   />

            <div className="col-4">
            <label htmlFor="StreetNumber" className="form-label mt-3">N° de rue</label><br />
            <input 
                type="text" 
                name="StreetNumber"
                className="form-control" 
                placeholder="n° de la rue" 
                onChange={handleChange} />
            </div>
            <div className="col-6">
            <label htmlFor="StreetName" className="form-label mt-3">Rue</label><br />
            <input 
                type="text" 
                name = "StreetName"
                className="form-control" 
                placeholder="Entrer le nom de la rue" 
                onChange= {handleChange} />
            </div>
            <div className="col-6">
            <label htmlFor="ZipCode" className="form-label mt-3">Code Postal</label><br />
                <input 
                type="text" 
                name ="ZipCode"
                className="form-control" 
                placeholder="Code postal" 
                onChange= {handleChange}  />
            </div>
            <div className="col-6">
            <label htmlFor="City" className="form-label mt-3">Ville</label><br />
                <input 
                type="text" 
                name = "City"
                className="form-control" 
                placeholder="Entrer le nom de la ville" 
                onChange= {handleChange}  />
            </div>
            <div className="col-6">
            <label htmlFor="DepartmentID" className="form-label mt-3">N° de département</label><br />
                <input 
                type="text" 
                name ="DepartmentID"
                className="form-control" 
                placeholder="Id du département" 
                onChange= {handleChange}  />
            </div>
          </div>
        </div> 
    </div>
        <input type="submit" value="Inscription"  style:background-color="blue"/>
    </div>
    </div>
    </div>

    </form>
  )
}

export default SignUp;