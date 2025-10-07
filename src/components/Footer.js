import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5 className="text-warning">TechFinance Blog</h5>
            <p className="text-muted">
              Your trusted source for the latest in technology trends and financial insights.
            </p>
            <div className="social-links">
              <a href="#" className="text-light me-3"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-light me-3"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="text-light me-3"><i className="fab fa-github"></i></a>
            </div>
          </Col>
          <Col md={2}>
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li><LinkContainer to="/"><a className="text-muted">Home</a></LinkContainer></li>
              <li><LinkContainer to="/tech"><a className="text-muted">Technology</a></LinkContainer></li>
              <li><LinkContainer to="/finance"><a className="text-muted">Finance</a></LinkContainer></li>
            </ul>
          </Col>
          <Col md={2}>
            <h6>Company</h6>
            <ul className="list-unstyled">
              <li><LinkContainer to="/about"><a className="text-muted">About</a></LinkContainer></li>
              <li><LinkContainer to="/contact"><a className="text-muted">Contact</a></LinkContainer></li>
            </ul>
          </Col>
          <Col md={2}>
            <h6>Legal</h6>
            <ul className="list-unstyled">
              <li><LinkContainer to="/privacy"><a className="text-muted">Privacy</a></LinkContainer></li>
              <li><LinkContainer to="/terms"><a className="text-muted">Terms</a></LinkContainer></li>
            </ul>
          </Col>
          <Col md={2}>
            <h6>Subscribe</h6>
            <div className="input-group mb-3">
              <input type="email" className="form-control" placeholder="Email" />
              <button className="btn btn-warning" type="button">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </Col>
        </Row>
        <hr className="my-4" />
        <Row>
          <Col className="text-center">
            <p className="text-muted mb-0">
              &copy; 2025 TechFinance Blog. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;