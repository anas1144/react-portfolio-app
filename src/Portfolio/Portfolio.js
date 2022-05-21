import { Button, Card, Modal } from 'react-bootstrap';
import React, { useState, setShow } from 'react';

function Portfolio() {
    const images = ['cabin.png', 'cake.png', 'circus.png', 'game.png', 'safe.png', 'submarine.png'];
    const [portfolioModal, setShow] = useState(false);
    const [image, setimage] = useState('');
    function showModal(image) {
        console.log(image);
        setimage(image);
        setShow(true);
    }


    const handleClose = () => setShow(false);



    return (

        <div className="main-wrap">
            <section className="page-section portfolio" id="portfolio">
                <div className="container">

                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>

                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>

                    <div className="row justify-content-center">
                        {images.map((value, index) => (
                            <div className="col-md-6 col-lg-4 mb-5">
                                <div className="portfolio-item mx-auto" onClick={() => showModal(value)} data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src={value} alt="..." />
                                </div>
                            </div>

                        ))}

                    </div>
                </div>
            </section>
            {/* model  */}
            <Modal show={portfolioModal} onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Log Cabin</h2>
                                <img className="img-fluid rounded mb-5" src={image} alt="..." />
                                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                <button className="btn btn-primary" data-bs-dismiss="modal" onClick={handleClose}>
                                    <i className="fas fa-xmark fa-fw"></i>
                                    Close Window
                                </button>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>

    );
}

export default Portfolio;