import { Container, Nav, Navbar } from 'react-bootstrap';

function AccountNavbar() {
  return (
      <>
          <Navbar expand="lg" className="bg-body-tertiary">
              <Container>
                  <Navbar.Toggle aria-controls="ItemNavbar" />
                  <Navbar.Collapse id="ItemNavbar">
                      <Nav>
                          <Nav.Link href='/Account/myAccount'>Modifier Login/Mdp</Nav.Link>
                          <Nav.Link href='/Account/Orders'>Mes commandes</Nav.Link>
                      </Nav>
                  </Navbar.Collapse>
              </Container>
          </Navbar>
      </>
  );
}

export default AccountNavbar;