import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

// Components
import Layout from './components/Layout';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Tech from './pages/Tech';
import Finance from './pages/Finance';
import PostPage from './pages/PostPage';
import Admin from './pages/Admin';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/tech" element={<Tech />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Layout>
        <Footer />
      </div>
    </Router>
  );
}

export default App;