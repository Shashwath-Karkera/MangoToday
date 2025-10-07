import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button, Dropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import AuthModal from './AuthModal';

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    setIsLoggedIn(authStatus === 'true');
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    setIsLoggedIn(false);
    window.location.reload();
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="shadow">
        <Container>
          <Navbar.Brand href="/" className="fw-bold text-warning">
            <i className="fas fa-chart-line me-2"></i>
            MangoToday
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/tech">
                <Nav.Link>Technology</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/finance">
                <Nav.Link>Finance</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
            </Nav>
            
            <Nav>
              {isLoggedIn ? (
                <Dropdown align="end">
                  <Dropdown.Toggle variant="outline-warning" id="user-dropdown">
                    <i className="fas fa-user me-1"></i> Admin
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <LinkContainer to="/admin">
                      <Dropdown.Item>Admin Panel</Dropdown.Item>
                    </LinkContainer>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <Button variant="outline-warning" onClick={() => setShowAuthModal(true)}>
                  Login
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <AuthModal show={showAuthModal} onHide={() => setShowAuthModal(false)} />
    </>
  );
};

export default NavBar;