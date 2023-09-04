import { useLocation, useNavigate } from 'react-router-dom';
import LoginLogout_BTN from '../BTN/LoginLogout_BTN';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { useContext } from 'react';
import { LoginModalContext } from '../../Context/LoginModalContext';
import { UserContext } from '../../Context/UserContext';


function GlobalNavBar() {

    /*Hook permettant de recupérer le chemin courant */
    const location = useLocation();

    /*Hook permettant de gérer la navigation*/
    const navigate = useNavigate();

    /*Récupération du contexté d'affichage de la modale*/
    const loginModal = useContext(LoginModalContext);
    const user = useContext(UserContext);

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">Aden's Sun</Navbar.Brand>
                    <Navbar.Toggle aria-controls="GlobalNavbar" />
                    <Navbar.Collapse id="GlobalNavbar">
                        <Nav activeKey={location.pathname} variant="underline" className="me-auto">
                            <Nav.Link href="/">Accueil</Nav.Link>
                            <Nav.Link href="/About" eventKey="/About">A propos</Nav.Link>
                            <NavDropdown title="Nos Produits" id="Item-dropdown">
                                <NavDropdown.Item href="/Item" eventKey="/Item1">Fruits & Baies séchées</NavDropdown.Item>
                                <NavDropdown.Item href="/Item" eventKey="/Item2">Poivre de la Jamaique</NavDropdown.Item>
                                <NavDropdown.Item href="/Item" eventKey="/Item3">Anis étoilé</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/Item" eventKey="/Item4">Ail</NavDropdown.Item>
                            </NavDropdown>
                            
                            <Nav.Link onClick={() => { (user.user === null) ? loginModal.OpenModal() : navigate('/ShoppingCart') }} eventKey="/ShoppingCart">Mon Panier</Nav.Link>
                            <Nav.Link onClick={() => { (user.user === null) ? loginModal.OpenModal() : navigate('/Account') }} eventKey="/Account">Mon Compte</Nav.Link>
                            <Nav.Link href="/SignUp" eventKey="/SignUp">S'inscrire</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <LoginLogout_BTN/>
                </Container>
            </Navbar>
        </>
    );
}

export default GlobalNavBar;