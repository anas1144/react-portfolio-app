import React,{ useState } from 'react';

import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Navbar , Nav ,Container,Modal,Form,Button } from 'react-bootstrap';      
function Header() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
   
    const form = event.currentTarget;
   
    if (form.checkValidity() === false) {
      
      event.preventDefault();
      event.stopPropagation();
    }
  if(setValidated(true)){
   
    console.log(form.elements.email.value);
    console.log(form.pass.value);
    return;
  }
   
    
    
  };
  const [login, setShowlogin] = useState(false);

  const handleCloselogin = () => setShowlogin(false);
  const handleShowlogin = () => setShowlogin(true);

  const [signup, setShowsignup] = useState(false);

  const handleClosesignup = () => setShowsignup(false);
  const handleShowsignup = () => setShowsignup(true);

  return (
    <div className='main-wrap'>

        <Navbar className="bg-green-light" expand="lg">
          <Container >
            <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
            <Nav>
            <Link to='/' className='nav-link'>HOME</Link>
            <Link to='about' className='nav-link'>ABOUT</Link>
            <Link to='contact' className='nav-link'>CONTACT</Link>
            <Link to='portfolio' className='nav-link'>PORTFOLIO</Link>
            <Link to='articles' className='nav-link'>ARTICLES</Link>
            <Link to='' className='nav-link' onClick={handleShowlogin}>LOGIN</Link>
            <Link to='' className='nav-link' onClick={handleShowsignup}>SIGN UP</Link>

            </Nav>
          </Container>
        </Navbar>

        {/* login */}
        <Modal show={login} onHide={handleCloselogin}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit} >
            <Form.Group   className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                name="email"
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group 
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
              
            >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password"
                placeholder="Password"
                required
                name="pass"
                 />
            </Form.Group>
            <Button variant="primary" type="submit" className="btn-gobol" >
           Login
          </Button>
          </Form>
        </Modal.Body>
       
      </Modal>        
        {/* signup */}
        <Modal show={signup} onHide={handleClosesignup}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                required
                name="email"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password"
                placeholder="Password"
                required
                minLength={8}
                name="pass"
                 />
            </Form.Group>
            <Button variant="primary" type="submit" className="btn-gobol" >
            Sign Up
          </Button>
          </Form>
        </Modal.Body>
        
      </Modal>
      
    </div>
  );
}

export default Header;