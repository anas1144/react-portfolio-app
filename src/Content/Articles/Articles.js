import React from 'react';

import { Button, Card, Modal } from 'react-bootstrap';
function Articles() {
    return (
        <div className='main-wrap'>

            <div className="inner-beader-section">
                <div className='container cards-wrap pt-5 pb-5'>
                    
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Articles</h2>

                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Card border="warning" style={{ width: '16rem' }}>
                                <Card.Img variant="top" src="184.webp" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col">
                            <Card border="warning" style={{ width: '16rem' }}>
                                <Card.Img variant="top" src="182.webp" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col">
                            <Card border="warning" style={{ width: '16rem' }}>
                                <Card.Img variant="top" src="img.jpg" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col">
                            <Card border="warning" style={{ width: '16rem' }}>
                                <Card.Img variant="top" src="062.webp" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Articles;