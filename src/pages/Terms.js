import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Terms = () => {
  return (
    <Container className="mt-5 pt-4">
      <Row className="justify-content-center">
        <Col lg={8}>
          <h1 className="mb-4">Terms of Service</h1>
          <Card className="border-0">
            <Card.Body>
              <section className="mb-5">
                <h4>1. Acceptance of Terms</h4>
                <p>
                  By accessing and using TechFinance Blog, you accept and agree to be bound by the terms 
                  and provision of this agreement.
                </p>
              </section>

              <section className="mb-5">
                <h4>2. Use License</h4>
                <p>
                  Permission is granted to temporarily access the materials on TechFinance Blog for personal, 
                  non-commercial transitory viewing only.
                </p>
              </section>

              <section className="mb-5">
                <h4>3. User Account</h4>
                <p>
                  When you create an account with us, you must provide accurate and complete information. 
                  You are responsible for safeguarding your account credentials.
                </p>
              </section>

              <section className="mb-5">
                <h4>4. Content</h4>
                <p>
                  Our blog contains articles, opinions, and information related to technology and finance. 
                  This content is for informational purposes only and should not be considered financial advice.
                </p>
              </section>

              <section className="mb-5">
                <h4>5. Intellectual Property</h4>
                <p>
                  All content on this website, including text, graphics, logos, and images, is the property 
                  of TechFinance Blog and protected by copyright laws.
                </p>
              </section>

              <section className="mb-5">
                <h4>6. Limitations</h4>
                <p>
                  In no event shall TechFinance Blog or its suppliers be liable for any damages arising out 
                  of the use or inability to use the materials on our website.
                </p>
              </section>

              <section className="mb-5">
                <h4>7. Governing Law</h4>
                <p>
                  These terms and conditions are governed by and construed in accordance with the laws of 
                  your country, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
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

export default Terms;