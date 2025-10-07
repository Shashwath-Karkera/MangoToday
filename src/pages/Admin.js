import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';

const Admin = () => {
  const [post, setPost] = useState({
    title: '',
    content: '',
    category: 'tech',
    excerpt: '',
    image: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save to localStorage or send to backend
    const posts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
    posts.push({
      ...post,
      id: Date.now(),
      date: new Date().toISOString(),
      author: 'Admin'
    });
    localStorage.setItem('blogPosts', JSON.stringify(posts));
    alert('Blog post published successfully!');
    setPost({ title: '', content: '', category: 'tech', excerpt: '', image: '' });
  };

  return (
    <Container className="mt-5 pt-5">
      <Row>
        <Col>
          <h2 className="mb-4">Admin Panel - Create New Post</h2>
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    value={post.title}
                    onChange={(e) => setPost({...post, title: e.target.value})}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Category</Form.Label>
                  <Form.Select
                    value={post.category}
                    onChange={(e) => setPost({...post, category: e.target.value})}
                  >
                    <option value="tech">Technology</option>
                    <option value="finance">Finance</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Excerpt</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    value={post.excerpt}
                    onChange={(e) => setPost({...post, excerpt: e.target.value})}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Featured Image URL</Form.Label>
                  <Form.Control
                    type="url"
                    value={post.image}
                    onChange={(e) => setPost({...post, image: e.target.value})}
                    placeholder="https://example.com/image.jpg"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Content</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={10}
                    value={post.content}
                    onChange={(e) => setPost({...post, content: e.target.value})}
                    required
                  />
                </Form.Group>

                <Button variant="warning" type="submit" className="px-4">
                  Publish Post
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Admin;