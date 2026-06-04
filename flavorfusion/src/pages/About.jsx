import { Container, Row, Col, Card } from 'react-bootstrap'
import { FaHeart, FaCode, FaUtensils, FaUsers } from 'react-icons/fa'

const About = () => {
  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold" style={{ color: '#2d6a4f' }}>About FlavorFusion</h1>
        <p className="text-muted fs-5">Your ultimate destination for culinary inspiration</p>
      </div>

      <Row className="g-4 mb-5">
        <Col md={6}>
          <Card className="h-100 shadow-sm border-0">
            <Card.Body className="text-center p-4">
              <FaHeart size={48} className="text-primary mb-3" />
              <h3>Our Mission</h3>
              <p className="text-muted">
                To inspire home cooks around the world with delicious, easy-to-follow recipes 
                and make cooking an enjoyable experience for everyone.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="h-100 shadow-sm border-0">
            <Card.Body className="text-center p-4">
              <FaUtensils size={48} className="text-primary mb-3" />
              <h3>Our Story</h3>
              <p className="text-muted">
                Founded by food enthusiasts, FlavorFusion brings together thousands of recipes 
                from professional chefs and home cooks from around the globe.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="g-4">
        <Col md={6}>
          <Card className="h-100 shadow-sm border-0">
            <Card.Body className="text-center p-4">
              <FaCode size={48} className="text-primary mb-3" />
              <h3>Technology</h3>
              <p className="text-muted">
                Built with React, Bootstrap, and powered by the Forkify API. 
                Fast, responsive, and user-friendly experience.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="h-100 shadow-sm border-0">
            <Card.Body className="text-center p-4">
              <FaUsers size={48} className="text-primary mb-3" />
              <h3>Community</h3>
              <p className="text-muted">
                Join our growing community of food lovers. Share your creations, 
                discover new recipes, and connect with fellow cooking enthusiasts.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default About