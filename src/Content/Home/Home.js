import { Button, Card, Modal } from 'react-bootstrap';

import logo from './1.PNG';
function Home() {
    return (
        <div className="main-wrap">
            <div className='banner-wrap bg-green-light '>
                <div className='container pb-3' >
                    <div className="row mb-4 pt-5 pb-5">
                        <div className="col">

                            <h2 className="page-section-heading text-center text-uppercase text-secondary ">Lorem Ipsum</h2>

                            <div className="divider-custom">
                                <div className="divider-custom-line"></div>
                                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                <div className="divider-custom-line"></div>
                            </div>
                            <div className='banner-description mb-3'>
                                <p className='desc'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book.
                                </p>
                            </div>

                            <Button className='header-btn' variant="light">Read more</Button>
                        </div>
                        <div className="col">
                            <section className="masthead bg-primary text-white text-center">
                                <div className="container d-flex align-items-center flex-column">

                                    <img className="masthead-avatar mb-5" src="header.png" alt="..." />

                                    <h1 className="masthead-heading text-uppercase mb-0">Start Bootstrap</h1>

                                    <div className="divider-custom divider-light">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i class="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>

                                    <p className="masthead-subheading font-weight-light mb-0">Graphic Artist - Web Designer - Illustrator</p>
                                </div>
                            </section>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;