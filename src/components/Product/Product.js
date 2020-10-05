import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import Features from '../Features/Features';
import { Link } from 'react-router-dom';

const Product = (props) => {

    const product = props.product;
    const features = product.features;
    // console.log(product);

    return (
        <div className="product">
            <Row>
                <Col md={2} className="border-none">

                </Col>
                <Col md={10} className="border-bottom">
                        <Row>
                            <Col md={3}>
                                <img width={200} src={product.img} alt=""/>
                            </Col>
                            <Col md={9} >
                                <h6 style={{marginTop: '10px'}}> <Link to={"/product/"+product.key}>{product.name}</Link> </h6>
                                <Row>
                                    <Col md={6}>
                                        <p><small>by: {product.seller}</small></p>
                                        <p>${product.price}</p>
                                        <p><small>Only {product.stock} left in stock - order soon</small></p>
                                        {props.showAddToCart && <button onClick={() =>props.addCartHandler(product)} style={{marginBottom : '20px'}}  className="add-to-cart-button"><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>} 
                                    </Col>
                                    <Col md={6}>
                                        <h5>Features</h5>
                                        {
                                            features.map((feature, index)=> <Features key={index} feature={feature}></Features> )
                                        }
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                </Col>
            </Row>
        </div>
    );
};

export default Product;