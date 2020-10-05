import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './ReviewDetail.css';
import Features from '../Features/Features';
import { Link } from 'react-router-dom';

const ReviewDetail = (props) => {
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
                                        <p><small>Quantity : {product.quantity}</small></p>
                                        <button onClick={() =>props.removeCartHandler(product.key)} style={{marginBottom : '20px'}}  className="add-to-cart-button">Remove from Cart</button> 
                                    </Col>
                                    <Col md={6}>
                                        <h5>Shipping and Handling</h5>
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

export default ReviewDetail;