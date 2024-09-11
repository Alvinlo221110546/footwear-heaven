import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';


function Layout(props) {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const Logout = async () => {
    try {
      await axios.delete('http://localhost:3020/logout', { withCredentials: false });
      Cookies.remove('refreshToken');
      localStorage.removeItem('user');
      navigate('/')
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary" style={{ padding: '10px' }}>
      <Container>
        <Navbar.Brand as={Link} to="/">Footwear Haven</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About us</Nav.Link>
            <Nav.Link as={Link} to="/Product">Product</Nav.Link>
          </Nav>
          <div className='d-flex justify-content-between'>
            <p className='text-white'>
              Welcome,{' '}
              {user && user.name ? (
                <span className="text-white" style={{ marginRight: '20px' }}>{user.name}</span>
              ) : null}
            </p>
            <Button onClick={Logout} variant="outline-light">Log Out</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Layout;
