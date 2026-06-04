import { Container, Row, Col, Card } from 'react-bootstrap'

const Privacy = () => {
  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold" style={{ color: '#2d6a4f' }}>Privacy Policy</h1>
        <p className="text-muted">Your privacy matters to us</p>
      </div>

      <Row className="justify-content-center">
        <Col lg={8}>
          <Card className="shadow-sm border-0 mb-4">
            <Card.Body className="p-4">
              <h4 className="mb-3">Data Collection</h4>
              <p>
                FlavorFusion is committed to protecting your privacy. We do not collect any 
                personal information from our users. Your searches and interactions are 
                completely anonymous.
              </p>
            </Card.Body>
          </Card>

          <Card className="shadow-sm border-0 mb-4">
            <Card.Body className="p-4">
              <h4 className="mb-3">Cookies & Tracking</h4>
              <p>
                We do not use cookies or any tracking mechanisms on our website. 
                Your browsing experience is completely private and untracked.
              </p>
            </Card.Body>
          </Card>

          <Card className="shadow-sm border-0 mb-4">
            <Card.Body className="p-4">
              <h4 className="mb-3">Third-Party Services</h4>
              <p>
                Our website uses the Forkify API to fetch recipe data. When you search for 
                recipes, your search terms are sent to the Forkify API, but no personal 
                information is shared.
              </p>
            </Card.Body>
          </Card>

          <Card className="shadow-sm border-0">
            <Card.Body className="p-4">
              <h4 className="mb-3">Contact Us</h4>
              <p>
                If you have any questions about this privacy policy, please contact us at:
                <br />
                <strong className="text-primary">privacy@flavorfusion.com</strong>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Privacy