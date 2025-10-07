import React from 'react';
import { Spinner, Container } from 'react-bootstrap';

const Splash = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
      <div className="text-center">
        <Spinner animation="border" variant="warning" style={{ width: '3rem', height: '3rem' }} />
        <h4 className="mt-3 text-muted">MangoToday</h4>
      </div>
    </Container>
  );
};

export default Splash;