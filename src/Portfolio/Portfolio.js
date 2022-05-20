import { Button, Card, Modal } from 'react-bootstrap';
import React ,{ useState,setShow} from 'react';

function Portfolio() {

    const [portfolioModal1, setShow1] = useState(false);
    const [portfolioModal2, setShow2] = useState(false);
    const [portfolioModal3, setShow3] = useState(false);
    const [portfolioModal4, setShow4] = useState(false);
    const [portfolioModal5, setShow5] = useState(false);
    const [portfolioModal6, setShow6] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleClose2 = () => setShow2(false);
  const handleClose3 = () => setShow3(false);
  const handleClose4 = () => setShow4(false);
  const handleClose5 = () => setShow5(false);
  const handleClose6 = () => setShow6(false);
  const handleShow1 = () => setShow1(true);
  const handleShow2 = () => setShow2(true);
  const handleShow3 = () => setShow3(true);
  const handleShow4 = () => setShow4(true);
  const handleShow5 = () => setShow5(true);
  const handleShow6 = () => setShow6(true);

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
                   
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" onClick={handleShow1} data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src="cabin.png" alt="..." />
                        </div>
                    </div>
               
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto"  onClick={handleShow2} data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src="cake.png" alt="..." />
                        </div>
                    </div>
                    
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto"  onClick={handleShow3} data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src="circus.png" alt="..." />
                        </div>
                    </div>
                    
                    <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                        <div className="portfolio-item mx-auto"  onClick={handleShow4} data-bs-toggle="modal" data-bs-target="#portfolioModal4">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src="game.png" alt="..." />
                        </div>
                    </div>
                    
                    <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                        <div className="portfolio-item mx-auto"  onClick={handleShow5} data-bs-toggle="modal" data-bs-target="#portfolioModal5">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src="safe.png" alt="..." />
                        </div>
                    </div>
                  
                    <div className="col-md-6 col-lg-4">
                        <div className="portfolio-item mx-auto"  onClick={handleShow6} data-bs-toggle="modal" data-bs-target="#portfolioModal6">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src="submarine.png" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </section>


{/* 1model  */}
        <Modal show={portfolioModal1} onHide={handleClose1} 
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
                                
                                   
                                    
                                    <img className="img-fluid rounded mb-5" src="cabin.png" alt="..." />
                                 
                                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <button className="btn btn-primary" data-bs-dismiss="modal" onClick={handleClose1}>
                                        <i className="fas fa-xmark fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
        </Modal.Body>
        
        
        </Modal>


        {/* 2model  */}
        <Modal show={portfolioModal2} onHide={handleClose2} 
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
                                
                                   
                                    
                                    <img className="img-fluid rounded mb-5" src="cake.png" alt="..." />
                                 
                                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <button className="btn btn-primary" data-bs-dismiss="modal" onClick={handleClose2}>
                                        <i className="fas fa-xmark fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
        </Modal.Body>
        
        
        </Modal>
        {/* 3model  */}
        <Modal show={portfolioModal3} onHide={handleClose3} 
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
                                
                                   
                                    
                                    <img className="img-fluid rounded mb-5" src="circus.png" alt="..." />
                                 
                                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <button className="btn btn-primary" data-bs-dismiss="modal" onClick={handleClose3}>
                                        <i className="fas fa-xmark fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
        </Modal.Body>
        
        
        </Modal>
        {/* 4model  */}
        <Modal show={portfolioModal4} onHide={handleClose4} 
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
                                
                                   
                                    
                                    <img className="img-fluid rounded mb-5" src="game.png" alt="..." />
                                 
                                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <button className="btn btn-primary" data-bs-dismiss="modal" onClick={handleClose4}>
                                        <i className="fas fa-xmark fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
        </Modal.Body>
        
        
        </Modal>
        {/* 5model  */}
        <Modal show={portfolioModal5} onHide={handleClose5} 
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
                                
                                   
                                    
                                    <img className="img-fluid rounded mb-5" src="safe.png" alt="..." />
                                 
                                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <button className="btn btn-primary" data-bs-dismiss="modal" onClick={handleClose5}>
                                        <i className="fas fa-xmark fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
        </Modal.Body>
        
        
        </Modal>
        {/* 6model  */}
        <Modal show={portfolioModal6} onHide={handleClose6} 
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
                                
                                   
                                    
                                    <img className="img-fluid rounded mb-5" src="submarine.png" alt="..." />
                                 
                                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <button className="btn btn-primary" data-bs-dismiss="modal" onClick={handleClose6}>
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