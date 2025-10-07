import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Privacy = () => {
  return (
    <Container className="mt-5 pt-4">
      <Row className="justify-content-center">
        <Col lg={8}>
          <h1 className="mb-4">Privacy Policy</h1>
          <Card className="border-0">
            <Card.Body>
              <section className="mb-5">
                <h4>1. Information We Collect</h4>
                <p>
                  We collect information you provide directly to us, such as when you create an account, 
                  subscribe to our newsletter, or contact us for support. This may include:
                </p>
                <ul>
                  <li>Name and email address</li>
                  <li>Contact information</li>
                  <li>Account credentials</li>
                  <li>Communication preferences</li>
                </ul>
              </section>

              <section className="mb-5">
                <h4>2. How We Use Your Information</h4>
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Provide, maintain, and improve our services</li>
                  <li>Send you technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Send you newsletters and promotional communications</li>
                  <li>Monitor and analyze trends and usage</li>
                </ul>
              </section>

              <section className="mb-5">
                <h4>3. Information Sharing</h4>
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as described in this policy.
                </p>
              </section>

              <section className="mb-5">
                <h4>4. Data Security</h4>
                <p>
                  We implement appropriate technical and organizational security measures to protect 
                  your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section className="mb-5">
                <h4>5. Your Rights</h4>
                <p>You have the right to:</p>
                <ul>
                  <li>Access and receive a copy of your personal data</li>
                  <li>Rectify or update your personal data</li>
                  <li>Delete your personal data</li>
                  <li>Restrict or object to our processing of your data</li>
                  <li>Data portability</li>
                </ul>
              </section>

              <section className="mb-5">
                <h4>6. Contact Us</h4>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                  <br />
                  <strong>shashwathkarkera119@gmail.com</strong>
                </p>
              </section>

              <footer className="text-muted">
                <p><small>Last updated: {new Date().toLocaleDateString()}</small></p>
              </footer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Privacy;