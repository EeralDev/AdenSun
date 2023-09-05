import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../Context/UserContext';
import { Col, Row } from 'react-bootstrap';
import { MDBContainer, MDBRow, MDBCol, MDBRipple, MDBTypography } from "mdb-react-ui-kit";
import { IItem } from '../DTO/DTOs';
import JumboCar1 from '../../public/StaticImage/JumbotronCarrousselSpice.jpg';
import JumboCar2 from '../../public/StaticImage/JumbotronCarrousselHerbs.jpg';
import JumboCar3 from '../../public/StaticImage/JumbotronCarrousselFamily.jpg';
import CartMask1 from '../../public/StaticImage/CategoryMaskSpice.jpg';
import CartMask2 from '../../public/StaticImage/CategoryMaskHerbs.jpg';
import CartMask3 from '../../public/StaticImage/CategoryMaskOther.jpg';
import { MDBCarousel, MDBCarouselItem} from 'mdb-react-ui-kit';
import Item from './Display/Item';

function HomePage() {

    const user = useContext(UserContext);
    const [items, setItems] = useState<IItem[]>([]);
    const [exhibitionitems, setExhibitionItem] = useState<IItem[]>([]);

    /*Ici on utilise useEffect comme un constructeur*/
    useEffect(() => {
        fetch('https://localhost:44316/api/Public/Item').then((res) => res.json()).then(data => {
            const tmpArray: IItem[] = [];
            setItems(data);
            for (let i = 0; i < 3; i++) {                
                tmpArray.push(data[Math.floor(Math.random() * data.length)]);
            }
            setExhibitionItem(tmpArray);
        });
    }, [])

    return (
        <>
            <div className="container-fluid" style={{ backgroundColor:"#e5e5dc" }}>
                <Row>
                    <Col>                    
                        <MDBCarousel style={{ height: "85vh", width: "100%" }} showIndicators fade dealy={3000}>
                            <MDBCarouselItem
                                style={{height: "85vh", width: "100%"}}
                                itemId={1}
                                src={JumboCar1}
                                alt='...'
                            >
                                <MDBTypography tag='div' className='display-1 pb-3 mb-3 border-bottom'>
                                    Ici nous vous proposons
                                </MDBTypography>
                                <MDBTypography variant='h1'>De magnifique saveur ...</MDBTypography>
                            </MDBCarouselItem>
                            <MDBCarouselItem
                                style={{ height: "85vh", width: "100%"}}
                                itemId={2}
                                src={JumboCar2}
                                alt='...'
                            >
                                <MDBTypography tag='div' className='display-1 pb-3 mb-3 border-bottom'>
                                    ... Ainsi que 
                                </MDBTypography>
                                <MDBTypography variant='h1'>De magnifique odeur ... </MDBTypography>
                            </MDBCarouselItem>
                            <MDBCarouselItem
                                style={{ height: "85vh", width: "100%"}}
                                itemId={3}
                                src={JumboCar3}
                                alt='...'
                            >
                                <MDBTypography tag='div' className='display-1 pb-3 mb-3 border-bottom'>
                                    ... Pour Accompagner 
                                </MDBTypography>
                                <MDBTypography variant='h1'>Vos plus beaux instants</MDBTypography>
                            </MDBCarouselItem>
                        </MDBCarousel>
                    </Col>
                </Row>
                <hr/>
                <Row className="row d-flex text-center justify-content-evenly">
                    <MDBTypography tag='div' className='display-3 pb-3 mb-3 border-bottom' style={{color:"#c66b3d"}}>
                        Nos Categories
                    </MDBTypography>
                    <Col xs={12} md={3} className="m-3 p-3" style={{border: "3px solid #c4a35a", }}>
                        <MDBRipple className='bg-image' rippleTag='div' rippleColor='light'>
                            <img src={CartMask1} style={{ height: "50%", width: "100%" }} className='card-image2 ' />
                            <a href='/Item/1/1'>
                                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                                    <div className='d-flex justify-content-center align-items-center h-100'>
                                        <p className='text-white mb-0'>Epices</p>
                                    </div>
                                </div>
                                <div className='hover-overlay'>
                                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                                </div>
                            </a>
                        </MDBRipple>
                    </Col>
                    <Col xs={12} md={3} className="m-3 p-3" style={{ border: "3px solid #c4a35a", }}>
                        <MDBRipple className='bg-image' rippleTag='div' rippleColor='light'>
                            <img src={CartMask2} style={{ height: "50%", width: "100%" }} className='card-image2 ' />
                            <a href='/Item/2/1'>
                                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                                    <div className='d-flex justify-content-center align-items-center h-100'>
                                        <p className='text-white mb-0'>Herbes Aromatiques</p>
                                    </div>
                                </div>
                                <div className='hover-overlay'>
                                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                                </div>
                            </a>
                        </MDBRipple>
                    </Col>
                    <Col xs={12} md={3} className="m-3 p-3" style={{ border: "3px solid #c4a35a", }}>
                        <MDBRipple className='bg-image' rippleTag='div' rippleColor='light'>
                            <img src={CartMask3} style={{ height: "50%", width: "100%" }} className='card-image2 ' />
                            <a href='/Item/3/1'>
                                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                                    <div className='d-flex justify-content-center align-items-center h-100'>
                                        <p className='text-white mb-0'>Autres</p>
                                    </div>
                                </div>
                                <div className='hover-overlay'>
                                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                                </div>
                            </a>
                        </MDBRipple>
                    </Col>                    
                </Row>
                <hr/>
                <Row>
                    <MDBContainer fluid className="my-2 text-center" >
                        <MDBTypography tag='div' className='display-3 pb-3 mb-3 border-bottom' style={{ color: "#c66b3d" }}>
                            Nos produits phares
                        </MDBTypography>
                        <MDBRow className="d-flex p-3" style={{ border: "3px solid #c4a35a", }}>
                            
                                    {
                                        exhibitionitems?.map((item) =>
                                        {
                                            return (
                                                <MDBCol xs={12} md={4} className="d-flex" >
                                                    <Item Item={item} />
                                                </MDBCol>
                                            )
                                        })
                                    }                                    
                        </MDBRow>
                    </MDBContainer>
                </Row>                
            </div>
        </>
    );
}

export default HomePage;