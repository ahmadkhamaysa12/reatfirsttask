import { Container, Row, Col } from 'react-bootstrap'
import { FaHeart, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="mb-3">FlavorFusion</h5>
            <p className="text-muted">
              Discover thousands of delicious recipes from around the world. 
              Made with <FaHeart className="text-danger" /> for food lovers.
            </p>
          </Col>
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-muted text-decoration-none">About Us</a></li>
              <li className="mt-2"><a href="/privacy" className="text-muted text-decoration-none">Privacy Policy</a></li>
              <li className="mt-2"><a href="#" className="text-muted text-decoration-none">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 className="mb-3">Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-white"><FaGithub size={24} /></a>
              <a href="#" className="text-white"><FaTwitter size={24} /></a>
              <a href="#" className="text-white"><FaInstagram size={24} /></a>
            </div>
            <p className="mt-3 text-muted small">
              Powered by Forkify API
            </p>
          </Col>
        </Row>
        <hr className="bg-secondary mt-4" />
        <div className="text-center text-muted">
          <p className="mb-0">© {currentYear} FlavorFusion. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer