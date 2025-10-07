import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Tech = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
    const techPosts = savedPosts.filter(post => post.category === 'tech').reverse();
    setPosts(techPosts);
  }, []);

  return (
    <Container className="mt-5 pt-4">
      <Row className="mb-5">
        <Col>
          <h1 className="display-5 fw-bold">Technology</h1>
          <p className="lead text-muted">
            Latest trends, innovations, and insights from the world of technology.
          </p>
        </Col>
      </Row>

      <Row>
        {posts.length > 0 ? (
          posts.map(post => (
            <Col lg={4} md={6} className="mb-4" key={post.id}>
              <Card className="h-100 shadow-sm">
                {post.image && (
                  <Card.Img variant="top" src={post.image} style={{ height: '200px', objectFit: 'cover' }} />
                )}
                <Card.Body className="d-flex flex-column">
                  <Badge bg="primary" className="mb-2 align-self-start">TECHNOLOGY</Badge>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text className="text-muted flex-grow-1">
                    {post.excerpt}
                  </Card.Text>
                  <LinkContainer to={`/post/${post.id}`}>
                    <Button variant="outline-primary">Read More</Button>
                  </LinkContainer>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">
                    Published on {new Date(post.date).toLocaleDateString()}
                  </small>
                </Card.Footer>
              </Card>
            </Col>
          ))
        ) : (
          <Col className="text-center py-5">
            <i className="fas fa-laptop-code fa-4x text-muted mb-3"></i>
            <h4 className="text-muted">No technology posts yet.</h4>
            <p className="text-muted">Check back soon for the latest tech insights!</p>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Tech;