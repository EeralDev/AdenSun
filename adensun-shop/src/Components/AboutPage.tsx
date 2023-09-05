import { useState, useRef } from 'react';
import EPICE from '../../public/StaticImage/EPICE.jpeg';
import EPICE2 from '../../public/StaticImage/EPICE2.jpg';
import EPICE3 from '../../public/StaticImage/EPICE3.jpg';

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

import {
    MDBValidation,
    MDBValidationItem,
    MDBInput,
    MDBInputGroup,
    MDBBtn,
    MDBTextArea
} from 'mdb-react-ui-kit';

import emailjs from '@emailjs/browser';

function AboutPage() {

    const [expanded, setExpanded] = useState(false)
    const form = useRef();
    const [formV, setFormValue] = useState({
        fname: 'Nom',
        lname: 'Prenom',
        ltexte: '',

    });
    const sendEmail = (e) => {
        console.log("ok")
        e.preventDefault();
        emailjs.sendForm(
            "service_6tvcf3a",
            "template_2huzlwr",
            form.current,
            "PPj8GdtSbSxZnFk4o"
        ).then(res => {
            console.log(res);
            console.log("ok2")
        }).catch(err => console.log(err))
    }
    const onChange = (e) => {
        setFormValue({ ...formV, [e.target.name]: e.target.value });
    };

    return (
        <div className="container mt-3">
            <p className='titre-about'>A PROPOS</p>
            <div className="row"></div>
            <div className="row">
                <div className="col-md-5 mt-5">
                    <img src={EPICE}
                        className="img-fluid" // Utilisez la classe "img-fluid" pour rendre l'image réactive (largeur à 100% du conteneur parent)
                        style={{ width: '500px', height: 'auto' }} // Utilisez le style pour définir une taille spécifique (largeur de 200px, hauteur proportionnelle) 
                        alt="Card image" />
                </div>
                <div className="col-md-7 mt-5">
                    <p className="p1">Siquis enim militarium vel honoratorum aut nobilis inter suos rumore tenus esset insimulatus fovisse partes hostiles, iniecto onere catenarum in modum beluae trahebatur et inimico urgente vel nullo, quasi sufficiente hoc solo, quod nominatus esset aut delatus aut postulatus, capite vel multatione bonorum aut insulari solitudine damnabatur.

                        Soleo saepe ante oculos ponere, idque libenter crebris usurpare sermonibus, omnis nostrorum imperatorum, omnis exterarum gentium potentissimorumque populorum, omnis clarissimorum regum res gestas, cum tuis nec contentionum magnitudine nec numero proeliorum nec varietate regionum nec celeritate conficiendi nec dissimilitudine bellorum posse conferri; nec vero disiunctissimas terras citius passibus cuiusquam potuisse peragrari, quam tuis non dicam cursibus, sed victoriis lustratae sunt.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8 mt-5">
                    <p className="p1">Siquis enim militarium vel honoratorum aut nobilis inter suos rumore tenus esset insimulatus fovisse partes hostiles, iniecto onere catenarum in modum beluae trahebatur et inimico urgente vel nullo, quasi sufficiente hoc solo, quod nominatus esset aut delatus aut postulatus, capite vel multatione bonorum aut insulari solitudine damnabatur.

                        Soleo saepe ante oculos ponere, idque libenter crebris usurpare sermonibus, omnis nostrorum imperatorum, omnis exterarum gentium potentissimorumque populorum, omnis clarissimorum regum res gestas, cum tuis nec contentionum magnitudine nec numero proeliorum nec varietate regionum nec celeritate conficiendi nec dissimilitudine bellorum posse conferri; nec vero disiunctissimas terras citius passibus cuiusquam potuisse peragrari, quam tuis non dicam cursibus, sed victoriis lustratae sunt.</p>
                </div>
                <div className="col-md-4 mt-5">
                    <img src={EPICE2}
                        className="img-fluid" // Utilisez la classe "img-fluid" pour rendre l'image réactive (largeur à 100% du conteneur parent)
                        style={{ width: '500px', height: 'auto' }} // Utilisez le style pour définir une taille spécifique (largeur de 200px, hauteur proportionnelle) 
                        alt="Card image" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-5 mt-5">
                    <img src={EPICE3}
                        className="img-fluid" // Utilisez la classe "img-fluid" pour rendre l'image réactive (largeur à 100% du conteneur parent)
                        style={{ width: '500px', height: 'auto' }} // Utilisez le style pour définir une taille spécifique (largeur de 200px, hauteur proportionnelle)  
                        alt="Card image" />
                </div>
                <div className="col-md-7 mt-5">
                    <p className="p1">Siquis enim militarium vel honoratorum aut nobilis inter suos rumore tenus esset insimulatus fovisse partes hostiles, iniecto onere catenarum in modum beluae trahebatur et inimico urgente vel nullo, quasi sufficiente hoc solo, quod nominatus esset aut delatus aut postulatus, capite vel multatione bonorum aut insulari solitudine damnabatur.

                        Soleo saepe ante oculos ponere, idque libenter crebris usurpare sermonibus, omnis nostrorum imperatorum, omnis exterarum gentium potentissimorumque populorum, omnis clarissimorum regum res gestas, cum tuis nec contentionum magnitudine nec numero proeliorum nec varietate regionum nec celeritate conficiendi nec dissimilitudine bellorum posse conferri; nec vero disiunctissimas terras citius passibus cuiusquam potuisse peragrari, quam tuis non dicam cursibus, sed victoriis lustratae sunt.Quam quidem partem accusationis admiratus sum et moleste tuli potissimum esse Atratino datam. Neque enim decebat neque aetas illa postulabat neque, id quod animadvertere poteratis, pudor patiebatur optimi adulescentis in tali illum oratione versari. Vellem aliquis ex vobis robustioribus hunc male dicendi locum suscepisset; aliquanto liberius et fortius et magis more nostro refutaremus istam male dicendi licentiam. Tecum, Atratine, agam lenius, quod et pudor tuus moderatur orationi meae et meum erga te parentemque tuum beneficium tueri debeo.

                        Nec sane haec sola pernicies orientem diversis cladibus adfligebat. Namque et Isauri, quibus est usitatum saepe pacari saepeque inopinis excursibus cuncta miscere, ex latrociniis occultis et raris, alente inpunitate adulescentem in peius audaciam ad bella gravia proruperunt, diu quidem perduelles spiritus inrequietis motibus erigentes, hac tamen indignitate perciti vehementer, ut iactitabant, quod eorum capiti quidam consortes apud Iconium Pisidiae oppidum in amphitheatrali spectaculo feris praedatricibus obiecti sunt praeter morem.</p>
                </div>
            </div>
            <div className="col-md-8 mt-5">
                <article className='question'>
                    <header>
                        <h4 onClick={() => setExpanded(!expanded)} className='question-title'>

                        </h4>
                        <button className='btn' onClick={() => setExpanded(!expanded)}>Contact
                            {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
                        </button>
                    </header>
                    {expanded &&
                        <MDBValidation className='col-md-12 mt-5' ref={form}>
                            <MDBValidationItem className='mt -5 mb-5'>
                                <MDBInput
                                    value={formV.fname}
                                    name='fname'
                                    onChange={onChange}
                                    id='validationCustom01'
                                    required
                                    label='First name'
                                />

                            </MDBValidationItem>
                            <MDBValidationItem classname=" mt-5 mb-5" >
                                <MDBInput
                                    value={formV.lname}
                                    name='lname'
                                    onChange={onChange}
                                    id='validationCustom02'
                                    required
                                    label='Last name'
                                />
                            </MDBValidationItem    >
                            <MDBValidationItem feedback='Invalid e-mail' invalid className='mt-5 mb-5'>
                                <MDBInputGroup textBefore='@'>
                                    <input
                                        type='text'

                                        className='form-control'
                                        id='validationCustomUsername'
                                        placeholder='Username'

                                        required
                                    />
                                </MDBInputGroup>
                            </MDBValidationItem>



                            <MDBValidationItem className='mb-3 pb-1' feedback='Please enter a message in the textarea.' invalid>
                                <MDBTextArea
                                    name='ltexte'
                                    label='Textarea'
                                    id='validationTextarea'
                                    placeholder='Required example textarea'

                                    required
                                />
                            </MDBValidationItem>






                            <MDBValidationItem className='mt-5' feedback='You must agree before submitting.' invalid>

                            </MDBValidationItem>
                            <div className='mt-5'>
                                <MDBBtn type='submit' onClick={sendEmail}    >
                                    Submit form</MDBBtn>

                            </div>
                        </MDBValidation>
                    }
                </article>
            </div>
        </div>
    );
}

export default AboutPage;