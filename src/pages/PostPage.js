import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
    const foundPost = savedPosts.find(p => p.id === parseInt(id));
    setPost(foundPost);
  }, [id]);

  if (!post) {
    return (
      <Container className="mt-5 pt-5 text-center">
        <h3>Post not found</h3>
      </Container>
    );
  }

  return (
    <Container className="mt-5 pt-4">
      <Row className="justify-content-center">
        <Col lg={8}>
          <article>
            {/* Post Header */}
            <header className="mb-4">
              <Badge bg={post.category === 'tech' ? 'primary' : 'success'} className="mb-3">
                {post.category.toUpperCase()}
              </Badge>
              <h1 className="display-5 fw-bold mb-3">{post.title}</h1>
              <div className="text-muted mb-4">
                <span>By {post.author} • </span>
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
            </header>

            {/* Featured Image */}
            {post.image && (
              <div className="mb-5">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="img-fluid rounded shadow"
                  style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }}
                />
              </div>
            )}

            {/* Post Content */}
            <div className="post-content mb-5">
              {post.content.split('\n').map((paragraph, index) => (
                <p key={index} className="fs-5 mb-4" style={{ lineHeight: '1.8' }}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Post Footer */}
            <Card className="border-0 bg-light">
              <Card.Body className="text-center">
                <h5>Enjoyed this article?</h5>
                <p className="text-muted mb-3">
                  Share it with others who might find it useful!
                </p>
                <div className="social-share">
                  <button className="btn btn-outline-primary me-2">
                    <i className="fab fa-twitter me-1"></i>Twitter
                  </button>
                  <button className="btn btn-outline-primary me-2">
                    <i className="fab fa-linkedin me-1"></i>LinkedIn
                  </button>
                  <button className="btn btn-outline-primary">
                    <i className="fab fa-facebook me-1"></i>Facebook
                  </button>
                </div>
              </Card.Body>
            </Card>
          </article>
        </Col>
      </Row>
    </Container>
  );
};

export default PostPage;