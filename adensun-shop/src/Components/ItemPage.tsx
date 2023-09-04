import React, { useEffect, useState } from 'react';
import { IItem } from '../DTO/DTOs';
import Item from './Display/Item';
import { Col, Container, Row } from 'react-bootstrap';
import { MDBPagination, MDBPaginationItem, MDBPaginationLink, MDBTypography } from 'mdb-react-ui-kit';
import { useParams } from 'react-router-dom';

function ItemPage() {

    const urlParams=useParams()

    const [items, setItems] = useState<IItem[]>([]);
    const [totalItems, setTotalItems] = useState<number>(0);

    useEffect(() => {
        if (urlParams.categorieID === "0") {
            fetch(`https://localhost:44316/api/Public/Item/`).then((res) => res.json())
                .then(data => {
                    setTotalItems(data.length);
                    setItems(data.slice(9 * (parseInt(urlParams.page) - 1), (parseInt(urlParams.page) * 9 > data.length) ? data.length : parseInt(urlParams.page) * 9))
                });
        }
        else
        {
            fetch(`https://localhost:44316/api/Public/Item/Category/${urlParams.categorieID}`).then((res) => res.json())
                .then(data => {
                    setTotalItems(data.length);
                    setItems(data.slice(9 * (parseInt(urlParams.page) - 1), (parseInt(urlParams.page) * 9 > data.length) ? data.length : parseInt(urlParams.page) * 9))
                });
        }
    }, [])


    return (
        <>
            <Container fluid>
                <Col className="mb-5">
                    <Row>
                        <div className='p-5 text-center bg-image' style={{ backgroundSize: "cover", backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: '40vh' }}>
                            <div className='d-flex justify-content-center align-items-center h-100'>
                                <div className='text-white'>
                                    <MDBTypography tag='div' className='display-1 pt-3 pb-3 mb-3'>
                                        Un gout de Soleil dans votre assiette
                                    </MDBTypography>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Col>
                <Row>
                    {items.map(item => {
                        return (
                            <React.Fragment key={"RC/" + item.Item_ID} >
                                <Col key={"Col/" + item.Item_ID} xs="12" md="6" lg="4">
                                    <Item key={"Item/" + item.Item_ID} Item={item} />
                                    </Col>
                            </React.Fragment>
                        )
                    })}
                </Row>
                <nav>
                    <MDBPagination key='Pagination' center className='mb-0'>
                        <MDBPaginationItem key={`PaginationPrevItem}`} disabled={(urlParams.page === "1") ? true : false}>
                            <MDBPaginationLink key={`PaginationPrevLink`} href={`/Item/${urlParams.categorieID}/${parseInt(urlParams.page) - 1 }`}>
                                Previous
                            </MDBPaginationLink>
                        </MDBPaginationItem>
                        {
                            Array(Math.ceil(totalItems / 9)).fill(0).map((v, i) => {
                                return (
                                    <React.Fragment key={`FC/PaginationItem${i}/${v}`}>
                                        <MDBPaginationItem key={`PaginationItem${i}/${v}`} disabled={(urlParams.page === (i +1).toString()) ? true : false}>
                                            <MDBPaginationLink key={`PaginationLink${i}/${v}`} href={`/Item/${urlParams.categorieID}/${i+1}`}>{i+1}</MDBPaginationLink>
                                        </MDBPaginationItem>
                                    </React.Fragment>
                                )
                            })
                        }
                        <MDBPaginationItem key={`PaginationNextItem`} disabled={(urlParams.page === Math.ceil(totalItems / 9).toString()) ? true : false}>
                            <MDBPaginationLink key={`PaginationLink`} href={`/Item/${urlParams.categorieID}/${parseInt(urlParams.page) + 1}`}>Next</MDBPaginationLink>
                        </MDBPaginationItem>
                    </MDBPagination>
                </nav>
            </Container>            
        </>
    );
}

export default ItemPage;