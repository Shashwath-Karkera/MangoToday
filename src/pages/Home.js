import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [featuredPosts, setFeaturedPosts] = useState([]);

  useEffect(() => {
    // Load posts from localStorage
    const savedPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
    
    // Show latest 6 posts
    const latestPosts = savedPosts.slice(-6).reverse();
    setPosts(latestPosts);
    
    // Get featured posts (first 2 posts)
    const featured = savedPosts.slice(-2).reverse();
    setFeaturedPosts(featured);
  }, []);

  // Sample posts if none exist
  const defaultPosts = [
    {
      id: 1,
      title: "The Future of Artificial Intelligence in Finance",
      excerpt: "Exploring how AI is revolutionizing financial services, from algorithmic trading to personalized banking experiences.",
      content: "Artificial Intelligence is transforming the financial industry in unprecedented ways...",
      category: "finance",
      author: "Shashwath Karkera",
      date: new Date().toISOString(),
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      title: "React 18: What's New and Why It Matters",
      excerpt: "A comprehensive look at the latest features in React 18 and how they improve developer experience.",
      content: "React 18 represents a significant milestone in the evolution of the popular JavaScript library...",
      category: "tech",
      author: "Shashwath Karkera",
      date: new Date().toISOString(),
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      title: "Cryptocurrency Market Trends 2024",
      excerpt: "Analyzing the current state of cryptocurrency markets and predicting future trends.",
      content: "The cryptocurrency market continues to evolve at a rapid pace...",
      category: "finance",
      author: "Shashwath Karkera",
      date: new Date().toISOString(),
      image: "https://images.unsplash.com/photo-1621761191311-89dc49eb86e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  // Initialize with sample posts if empty
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
    if (savedPosts.length === 0) {
      localStorage.setItem('blogPosts', JSON.stringify(defaultPosts));
      setPosts(defaultPosts.slice(-6).reverse());
      setFeaturedPosts(defaultPosts.slice(-2).reverse());
    }
  }, []);

  return (
    <Container className="mt-5 pt-4">
      {/* Hero Section */}
      <Row className="hero-section py-5 mb-5 rounded">
        <Col lg={8} className="mx-auto text-center">
          <h1 className="display-4 fw-bold mb-4 text-white">
            Welcome to <span className="text-warning">TechFinance</span> Blog
          </h1>
          <p className="lead mb-4 text-light">
            Stay updated with the latest technology trends and financial insights. 
            Expert analysis, breaking news, and in-depth articles.
          </p>
          <div className="hero-buttons">
            <LinkContainer to="/tech">
              <Button variant="warning" size="lg" className="me-3 mb-2">
                Explore Technology
              </Button>
            </LinkContainer>
            <LinkContainer to="/finance">
              <Button variant="outline-light" size="lg" className="mb-2">
                Explore Finance
              </Button>
            </LinkContainer>
          </div>
        </Col>
      </Row>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <Row className="mb-5">
          <Col>
            <h2 className="mb-4 text-center">Featured Articles</h2>
            <Row>
              {featuredPosts.map(post => (
                <Col lg={6} key={post.id} className="mb-4">
                  <Card className="h-100 shadow-sm featured-card">
                    {post.image && (
                      <Card.Img 
                        variant="top" 
                        src={post.image} 
                        style={{ height: '250px', objectFit: 'cover' }} 
                      />
                    )}
                    <Card.Body className="d-flex flex-column">
                      <div className="mb-2">
                        <Badge bg={post.category === 'tech' ? 'primary' : 'success'}>
                          {post.category.toUpperCase()}
                        </Badge>
                      </div>
                      <Card.Title className="fw-bold">{post.title}</Card.Title>
                      <Card.Text className="text-muted flex-grow-1">
                        {post.excerpt}
                      </Card.Text>
                      <div className="mt-auto">
                        <LinkContainer to={`/post/${post.id}`}>
                          <Button variant="outline-warning" className="w-100">
                            Read Full Article
                          </Button>
                        </LinkContainer>
                      </div>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        Published on {new Date(post.date).toLocaleDateString()}
                      </small>
                    </Card.Footer>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      )}

      {/* Latest Posts */}
      <Row className="mb-5">
        <Col>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>Latest Articles</h2>
            <LinkContainer to="/tech">
              <Button variant="outline-primary" size="sm">
                View All
              </Button>
            </LinkContainer>
          </div>
        </Col>
      </Row>

      <Row>
        {posts.length > 0 ? (
          posts.map(post => (
            <Col lg={4} md={6} className="mb-4" key={post.id}>
              <Card className="h-100 shadow-sm blog-card">
                {post.image && (
                  <Card.Img 
                    variant="top" 
                    src={post.image} 
                    style={{ height: '200px', objectFit: 'cover' }} 
                  />
                )}
                <Card.Body className="d-flex flex-column">
                  <div className="mb-2">
                    <Badge bg={post.category === 'tech' ? 'primary' : 'success'}>
                      {post.category.toUpperCase()}
                    </Badge>
                  </div>
                  <Card.Title className="h5">{post.title}</Card.Title>
                  <Card.Text className="text-muted flex-grow-1">
                    {post.excerpt}
                  </Card.Text>
                  <div className="mt-auto">
                    <LinkContainer to={`/post/${post.id}`}>
                      <Button variant="outline-primary" size="sm">
                        Read More
                      </Button>
                    </LinkContainer>
                  </div>
                </Card.Body>
                <Card.Footer className="bg-transparent border-top-0">
                  <small className="text-muted">
                    Published on {new Date(post.date).toLocaleDateString()}
                  </small>
                </Card.Footer>
              </Card>
            </Col>
          ))
        ) : (
          <Col className="text-center py-5">
            <div className="empty-state">
              <i className="fas fa-newspaper fa-4x text-muted mb-3"></i>
              <h4 className="text-muted">No posts yet</h4>
              <p className="text-muted mb-4">Check back soon for amazing content!</p>
              <LinkContainer to="/admin">
                <Button variant="warning">
                  Create Your First Post
                </Button>
              </LinkContainer>
            </div>
          </Col>
        )}
      </Row>

      {/* Categories Section */}
      <Row className="mt-5 py-5 categories-section">
        <Col md={6} className="mb-4">
          <div className="category-card tech-card p-4 rounded text-white h-100">
            <div className="text-center">
              <i className="fas fa-laptop-code fa-3x mb-3"></i>
              <h3>Technology</h3>
              <p className="mb-4">
                Latest in AI, Web Development, Cybersecurity, and emerging technologies. 
                Stay ahead with cutting-edge tech insights.
              </p>
              <LinkContainer to="/tech">
                <Button variant="light" className="px-4">
                  Explore Tech Articles
                </Button>
              </LinkContainer>
            </div>
          </div>
        </Col>
        <Col md={6} className="mb-4">
          <div className="category-card finance-card p-4 rounded text-white h-100">
            <div className="text-center">
              <i className="fas fa-chart-line fa-3x mb-3"></i>
              <h3>Finance</h3>
              <p className="mb-4">
                Investment strategies, market analysis, personal finance tips, 
                and financial technology innovations.
              </p>
              <LinkContainer to="/finance">
                <Button variant="light" className="px-4">
                  Explore Finance Articles
                </Button>
              </LinkContainer>
            </div>
          </div>
        </Col>
      </Row>

      {/* Newsletter Section */}
      <Row className="my-5 py-5 bg-light rounded newsletter-section">
        <Col lg={6} className="mx-auto text-center">
          <h3 className="mb-3">Stay Updated</h3>
          <p className="text-muted mb-4">
            Get the latest tech and finance articles delivered to your inbox. 
            No spam, just valuable insights.
          </p>
          <div className="newsletter-form">
            <div className="input-group mb-3">
              <input 
                type="email" 
                className="form-control form-control-lg" 
                placeholder="Enter your email address" 
                aria-label="Email address"
              />
              <button className="btn btn-warning btn-lg" type="button">
                Subscribe
              </button>
            </div>
            <small className="text-muted">
              You can unsubscribe at any time. We respect your privacy.
            </small>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;