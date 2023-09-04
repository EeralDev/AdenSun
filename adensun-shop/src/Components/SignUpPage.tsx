import { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client';
import "./SignUpStyle.css";
import Form from 'react-bootstrap/Form';

function SignUp() {

  const isProfessionnelOptions = [
    { value: 'True', label: 'Professionnel' },
    { value: 'False', label: 'Particulier' },
  ]

  const formatDate = (inputDate) => {
    const d = new Date(inputDate);
    const day = d.getDate().toString().padStart(2, '0');
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const year = d.getFullYear().toString();
    const res = `${day}/${month}/${year}`;
    return res;
  };

  // Récupérer la date d'aujourd'hui
  const today = new Date();

  // Formater la date d'aujourd'hui
  const formattedDate = formatDate(today);
  console.log(formattedDate);

  const [inputs, setInputs] = useState(
    {
    NewUser: {
    Mail: "",
    IsProfessional: "",
    PhoneNumber: "",
    CreatedDate: formattedDate,
    Adress: {
    StreetNumber: "",
    StreetName: "",
    AdressLine: "",
    ZipCode: "",
    City: "",
    RegionID: "",
    DepartmentID: ""
    }
  },
    Password: ""
    }
      );

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit", inputs)
  }

  // const requestOptions = {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(inputs)
  //                       };

  //   useEffect(() => {
    
  //       fetch('https://localhost:44316/api/Public/Register', requestOptions);
  //   }, [])

  return (
    <form onSubmit={handleSubmit}>
    <div className="container bg-white p-4">
      <div className="row justify-content-center m-4">
        <div className="card" style={{ width: '650px' }}>
          <div className="card-body m-3">
            <div className="text-end">
              <a href="home.html" className="text-end">
                <button type="button" className="btn-close"></button>
              </a>
              </div>
        <h2>Inscription Aden'Sun</h2>

        <div className="row mt-4">
        <label htmlFor="CreatedDate" className="form-label">Date de création</label>
        <input 
            type= "text"
            name = "CreatedDate"
            id = "CreatedDate"
            className="form-control" 
            value= {inputs.NewUser.CreatedDate} readOnly/>
        </div>

        <div className="row mt-4">

        <label htmlFor="Mail" className="form-label mt-3">Email</label><br />
            <input 
                type="email" 
                name = "Mail"
                id = "Mail"
                className="form-control w-75" 
                placeholder="Entrer votre adresse mail"
                // value={inputs.NewUser.Mail}
                onChange={handleChange}  />

        <div className="col-6">
            <Form>
              <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Label>Etes-vous un professionnel ?</Form.Label>
                <Form.Select >
                  <option value="True"onChange={handleChange} >Professionnel</option >
                  <option value="False"onChange={handleChange} >Particulier</option>
                </Form.Select>
              </Form.Group>
            </Form>

            </div>
            <label htmlFor="PhoneNumber" className="form-label mt-3">Téléphone</label><br />
            <input 
                type="text" 
                name = "PhoneNumber"
                id = "PhoneNumber"
                className="form-control w-75" 
                placeholder="Entrer votre n° de téléphone"
                // value={inputs.NewUser.PhoneNumber}
                onChange={handleChange}   />

            <label htmlFor="Password" className="form-label mt-3">Mot de passe</label><br />
            <input 
                type="current-password" 
                name= "Password"
                id= "Password"
                className="form-control w-75" 
                placeholder="Choisissez un mot de passe"
                // value={inputs.Password}
                onChange= {handleChange}  />
            
            <label htmlFor="Password" className="form-label mt-3">Confirmer votre mot de passe</label><br />
            <input 
                type="current-password" 
                name= "Password"
                id= "Password"
                className="form-control w-75" 
                placeholder="Confirmation de votre mot de passe"
                // value={inputs.Password}
                onChange= {handleChange}  />
                    
            <div className="row">
            <label htmlFor="AdressLine" className="form-label mt-3">Adresse :</label><br />
            <input 
                type="text" 
                name="AdressLine"
                id="AdressLine"
                className="form-control" 
                placeholder="Entrer votre adresse"
                // value={inputs.NewUser.Adress.AdressLine}
                onChange= {handleChange}   />

            <div className="col-4">
            <label htmlFor="StreetNumber" className="form-label mt-3">N° de rue</label><br />
            <input 
                type="text" 
                name="StreetNumber"
                id="StreetNumber"
                className="form-control" 
                placeholder="N° de la rue" 
                // value={inputs.NewUser.Adress.StreetNumber}
                onChange={handleChange} />
            </div>
            <div className="col-6">
            <label htmlFor="StreetName" className="form-label mt-3">Rue</label><br />
            <input 
                type="text" 
                name = "StreetName"
                id = "StreetName"
                className="form-control" 
                placeholder="Entrer le nom de la rue" 
                // value={inputs.NewUser.Adress.StreetName}
                onChange= {handleChange} />
            </div>
            <div className="col-6">
            <label htmlFor="ZipCode" className="form-label mt-3">Code Postal</label><br />
                <input 
                type="text" 
                name ="ZipCode"
                id ="ZipCode"
                className="form-control" 
                placeholder="Code postal" 
                // value={inputs.NewUser.Adress.ZipCode}
                onChange= {handleChange}  />
            </div>
            <div className="col-6">
            <label htmlFor="City" className="form-label mt-3">Ville</label><br />
                <input 
                type="text" 
                name = "City"
                id = "City"
                className="form-control" 
                placeholder="Entrer le nom de la ville" 
                // value={inputs.NewUser.Adress.City}
                onChange= {handleChange}  />
            </div>
            <div className="col-6">
            <label htmlFor="DepartmentID" className="form-label mt-3">N° de département</label><br />
                <input 
                type="text" 
                name ="DepartmentID"
                id ="inputs.NewUser.Adress.DepartmentID"
                className="form-control" 
                placeholder="N° du département" 
                // value={inputs.NewUser.Adress.DepartmentID}
                onChange= {handleChange}  />
            </div>
          </div>
        </div> 
    </div>
        <input type="submit" value="Inscription"/>
    </div>
    </div>
    </div>

    </form>
  )
}

export default SignUp;