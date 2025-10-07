import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="mt-5 pt-4">
      {/* Hero Section */}
      <Row className="mb-5">
        <Col lg={8} className="mx-auto text-center">
          <h1 className="display-4 fw-bold mb-4">About TechFinance Blog</h1>
          <p className="lead text-muted">
            Bridging the gap between cutting-edge technology and smart financial decisions.
          </p>
        </Col>
      </Row>

      {/* Mission Section */}
      <Row className="mb-5">
        <Col lg={10} className="mx-auto">
          <Card className="border-0 bg-light">
            <Card.Body className="p-5">
              <h2 className="text-center mb-4">Our Mission</h2>
              <p className="text-center fs-5">
                To empower individuals and businesses with actionable insights at the intersection 
                of technology and finance. We believe that understanding both domains is crucial 
                for success in today's digital economy.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* What We Cover */}
      <Row className="mb-5">
        <Col>
          <h2 className="text-center mb-5">What We Cover</h2>
        </Col>
      </Row>

      <Row>
        <Col lg={6} className="mb-4">
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body className="p-4">
              <div className="text-center mb-3">
                <i className="fas fa-laptop-code fa-3x text-primary mb-3"></i>
                <Card.Title>Technology</Card.Title>
              </div>
              <Card.Text>
                <ul className="list-unstyled">
                  <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Artificial Intelligence & Machine Learning</li>
                  <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Web Development & Programming</li>
                  <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Cybersecurity & Privacy</li>
                  <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Emerging Tech Trends</li>
                  <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Software Reviews & Comparisons</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6} className="mb-4">
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body className="p-4">
              <div className="text-center mb-3">
                <i className="fas fa-chart-line fa-3x text-success mb-3"></i>
                <Card.Title>Finance</Card.Title>
              </div>
              <Card.Text>
                <ul className="list-unstyled">
                  <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Investment Strategies</li>
                  <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Personal Finance Management</li>
                  <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Market Analysis & Trends</li>
                  <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Fintech Innovations</li>
                  <li className="mb-2"><i className="fas fa-check text-success me-2"></i>Economic Insights</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Team Section */}
      <Row className="mt-5">
        <Col>
          <h2 className="text-center mb-5">Our Expertise</h2>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col lg={8} className="text-center">
          <Card className="border-0">
            <Card.Body className="p-4">
              <div className="mb-4">
                <i className="fas fa-user-tie fa-4x text-warning mb-3"></i>
                <h4>Shashwath Karkera</h4>
                <p className="text-muted">Founder & Chief Editor</p>
              </div>
              <p className="fs-5 text-muted">
                With years of experience in both technology development and financial analysis, 
                I founded TechFinance Blog to share knowledge and insights that can help readers 
                navigate the complex world of tech-driven finance.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Stats Section */}
      <Row className="mt-5 py-5 bg-light rounded">
        <Col md={3} className="text-center mb-4">
          <h3 className="text-warning fw-bold">100+</h3>
          <p className="text-muted">Articles Published</p>
        </Col>
        <Col md={3} className="text-center mb-4">
          <h3 className="text-warning fw-bold">50K+</h3>
          <p className="text-muted">Monthly Readers</p>
        </Col>
        <Col md={3} className="text-center mb-4">
          <h3 className="text-warning fw-bold">2+</h3>
          <p className="text-muted">Years Experience</p>
        </Col>
        <Col md={3} className="text-center mb-4">
          <h3 className="text-warning fw-bold">24/7</h3>
          <p className="text-muted">Content Updates</p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;