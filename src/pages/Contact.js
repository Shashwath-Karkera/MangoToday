import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert, Spinner } from 'react-bootstrap';
import { initEmailJS, sendContactEmail } from '../utils/emailService';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [alertType, setAlertType] = useState('success');
  const [alertMessage, setAlertMessage] = useState('');
  const [emailJSReady, setEmailJSReady] = useState(false);

  useEffect(() => {
    // Initialize EmailJS
    try {
      initEmailJS();
      setEmailJSReady(true);
    } catch (error) {
      console.error('Failed to initialize EmailJS:', error);
      setEmailJSReady(false);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (emailJSReady) {
        await sendContactEmail(formData);
        setAlertType('success');
        setAlertMessage('Thank you for your message! We\'ll get back to you within 24 hours.');
      } else {
        // Fallback: just log the data
        console.log('Form data (EmailJS not configured):', formData);
        setAlertType('info');
        setAlertMessage('Message received! For now, please email us directly at shashwathkarkera119@gmail.com while we set up our contact system.');
      }
      
      setShowAlert(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setShowAlert(false), 8000);
    } catch (error) {
      console.error('Error sending message:', error);
      setAlertType('danger');
      setAlertMessage('Failed to send message. Please try again or email us directly at shashwathkarkera119@gmail.com');
      setShowAlert(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container className="mt-5 pt-4">
      <Row className="justify-content-center">
        <Col lg={8}>
          <h1 className="text-center mb-4">Contact Us</h1>
          <p className="text-center text-muted mb-5">
            Have questions about technology or finance? We'd love to hear from you.
          </p>

          {!emailJSReady && (
            <Alert variant="warning" className="mb-4">
              <strong>Note:</strong> Contact form is in demo mode. Messages will be logged to console. For immediate assistance, email us directly.
            </Alert>
          )}

          {showAlert && (
            <Alert variant={alertType} className="mb-4" dismissible onClose={() => setShowAlert(false)}>
              {alertMessage}
            </Alert>
          )}

          <Card className="shadow border-0">
            <Card.Body className="p-4">
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-semibold">Full Name *</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                        disabled={isLoading}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-semibold">Email Address *</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email"
                        disabled={isLoading}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Subject *</Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is this regarding?"
                    disabled={isLoading}
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label className="fw-semibold">Message *</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={6}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your inquiry..."
                    disabled={isLoading}
                  />
                </Form.Group>

                <div className="text-center">
                  <Button 
                    variant="warning" 
                    type="submit" 
                    size="lg" 
                    className="px-5"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Spinner animation="border" size="sm" className="me-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane me-2"></i>
                        Send Message
                      </>
                    )}
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>

          {/* Contact Information */}
          <Row className="mt-5">
            <Col md={6} className="text-center mb-4">
              <Card className="border-0 h-100 bg-light">
                <Card.Body className="p-4">
                  <i className="fas fa-envelope fa-2x text-warning mb-3"></i>
                  <h5>Email Directly</h5>
                  <a 
                    href="mailto:shashwathkarkera119@gmail.com"
                    className="fw-bold text-decoration-none"
                  >
                    shashwathkarkera119@gmail.com
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="text-center mb-4">
              <Card className="border-0 h-100 bg-light">
                <Card.Body className="p-4">
                  <i className="fas fa-clock fa-2x text-warning mb-3"></i>
                  <h5>Response Time</h5>
                  <p className="text-success fw-bold mb-0">Within 24 Hours</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;