import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
} from 'mdb-react-ui-kit';

function Footer() {

    return (
        <>



            <MDBFooter style={{ backgroundColor: '#26495c' }} className='text-white text-center text-lg-left'>
                <MDBContainer className='p-4'>
                    <MDBRow className="d-flex text-center justify-content-evenly align-items-center">
                        <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
                            <h5 className='footer-titre'>AdenSun</h5>

                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias.
                                Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam, est
                                atque cumque eum delectus sint!
                            </p>
                        </MDBCol>

                        <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>


                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <a href='/' className='footer-menu'>
                                        Acceuil
                                    </a>
                                </li>


                                <li>
                                    <a href='About' className='footer-menu'>
                                        A propos
                                    </a>
                                </li>
                                <li>
                                    <a href='Item/0/1' className='footer-menu'>
                                        Nos Produits
                                    </a>
                                </li>





                            </ul>
                        </MDBCol>



                        <MDBCol lg='3' md='6' className='footer-menu'>


                            <ul className='list-unstyled'>
                                <li>
                                    <a href='Account' className='text-white'>
                                        Mon Compte
                                    </a>
                                </li>
                                <li>
                                    <a href='ShoppingCart' className='text-white'>
                                        Mon panier
                                    </a>
                                </li>


                            </ul>
                        </MDBCol>










                    </MDBRow>
                </MDBContainer>

                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    &copy; {new Date().getFullYear()} Copyright:{' '}
                    <a className='text-white' href='https://mdbootstrap.com/'>
                        Aden's Sun
                    </a>
                </div>
            </MDBFooter>















        </>
    );
}

export default Footer;