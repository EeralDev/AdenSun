import { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LoginModalContext } from '../../Context/LoginModalContext';
import { useCookies } from 'react-cookie';
import { UserContext } from '../../Context/UserContext';


function LoginModal() {

    /*Cookie Testing */
    const [tokenCookie, setTokenCookie] = useCookies(["Token"]);

    /*Gestion du context d'affichage*/

    const show = useContext(LoginModalContext)

    /*Gestion du context d'utilisateur*/

    const user = useContext(UserContext);

    /*gestion de l'affichage de la modale*/

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const [isFormMessageHide, setIsFormMessageHide] = useState<boolean>(true)

    const handleClose = () => {
        show.CloseModal()
        setUserName("");
        setPassword("");
        setIsFormMessageHide(true);
    };

    /*D�finition des m�thode*/

    const handleFormSubmit = (event) =>
    {
        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "Mail": userName,
                "Password": password               
            })
        };
        fetch("https://localhost:44316/api/Public/Login", requestOptions).then((res) => res.json()).then(data =>
        {
            if (data !== null) {
                window.localStorage.setItem("User", JSON.stringify(data.User));
                setTokenCookie("Token", data.JWTToken, { path: "/", expires: new Date(new Date().getTime() + 24 * 60 * 60 * 1000) });
                user.LogIn(data.User);
                setIsFormMessageHide(true);
                handleClose()
            }
            else
            {
                setIsFormMessageHide(false);
            }
        });
    }

    return (
        <>
            <Modal show={show.myModal.isOpen} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Connectez-vous pour continuer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col className='bg-primary border-end border-3 '>
                                Mettre une image ici
                            </Col>
                            <Col>
                                <p id="FormMessage" hidden={isFormMessageHide}>L'adresse e-mail/identifiant de connexion ou le mot de passe est incorrect.</p>
                                <Form id='LoginForm' onSubmit={handleFormSubmit}>
                                    <Row>
                                        <Form.Group controlId="UserName">
                                            <Form.Label>Nom d'utilisateur</Form.Label>
                                            <Form.Control
                                                value={userName}
                                                type="email"
                                                placeholder="Entrer votre adresse mail"
                                                onChange={(e) => setUserName(e.target.value)}
                                            />
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                        <Form.Group controlId="Password">
                                            <Form.Label>Mot de passe</Form.Label>
                                            <Form.Control
                                                value={password}
                                                type="password"
                                                placeholder="Mot de Passe"
                                                onChange = {(e) => setPassword(e.target.value) }
                                            />
                                        </Form.Group>
                                    </Row>                     
                                </Form>
                            </Col>
                        </Row>
                    </Container> 
                </Modal.Body>
                <Modal.Footer>
                    <Container>
                        <Row>                            
                            <Col>
                                <Button variant="primary" href="/SignUp">
                                    Creer votre compte
                                </Button>
                            </Col>
                            <Col>
                                <Button form='LoginForm' variant="primary" type="submit" disabled={ password === ""}>
                                    Se connecter
                                </Button>
                            </Col>
                        </Row>
                    </Container> 
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default LoginModal;