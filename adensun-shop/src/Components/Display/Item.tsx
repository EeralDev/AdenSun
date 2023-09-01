import React from 'react';
import { IItem } from '../../DTO/DTOs';

interface itemProps {
    Item: IItem
}

function Item(props: itemProps) {



    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                    <div className="card">
                        <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                            data-mdb-ripple-color="light">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/belt.webp"
                                className="w-100" />
                            <a href="#!">
                                <div className="mask">
                                    <div className="d-flex justify-content-start align-items-end h-100">
                                        <h5><span className="badge bg-danger ms-2">-10 %</span></h5>
                                    </div>
                                </div>
                                <div className="hover-overlay">
                                    <div className="mask"></div>
                                </div>
                            </a>
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">{props.Item.Name}</h4>
                                <h6 className="card-subtitle mb-2 text-muted">Style: VA33TXRJ5</h6>
                                <p className="card-text">
                                    The Vans All-Weather MTE Collection features footwear and apparel designed to withstand the elements whilst still looking cool.             </p>
                                <div className="options d-flex flex-fill">
                                    <select className="custom-select mr-1">
                                        <option selected>Color</option>
                                        <option value="1">Green</option>
                                        <option value="2">Blue</option>
                                        <option value="3">Red</option>
                                </select>
                                <select className="custom-select mr-1">
                                    <option selected>Color</option>
                                    <option value="1">Green</option>
                                    <option value="2">Blue</option>
                                    <option value="3">Red</option>
                                </select>
                            </div>

                                <div className="buy d-flex justify-content-between align-items-center">
                                    <div className="price text-success"><h5 className="mt-4">$125</h5></div>
                                    <a href="#" className="btn btn-danger mt-3"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;