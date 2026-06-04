import { Modal, Button, Badge } from 'react-bootstrap'
import { FaClock, FaUser, FaGlobe, FaExternalLinkAlt } from 'react-icons/fa'

const RecipeModal = ({ show, onHide, recipe }) => {
  if (!recipe) return null

  return (
    <Modal show={show} onHide={onHide} size="lg" centered className="recipe-modal">
      <Modal.Header closeButton>
        <Modal.Title>{recipe.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-md-6">
            <img 
              src={recipe.image_url} 
              alt={recipe.title}
              className="img-fluid rounded-3 mb-3"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <Badge bg="primary" className="me-2">{recipe.publisher}</Badge>
              <Badge bg="success">Popular Recipe</Badge>
            </div>
            
            <div className="mb-3">
              <p className="mb-2">
                <FaClock className="me-2 text-primary" />
                <strong>Preparation Time:</strong> ~30 minutes
              </p>
              <p className="mb-2">
                <FaUser className="me-2 text-primary" />
                <strong>Servings:</strong> 4 people
              </p>
              <p className="mb-2">
                <FaGlobe className="me-2 text-primary" />
                <strong>Source:</strong> {recipe.source_url ? 'Online Recipe' : 'Community Recipe'}
              </p>
            </div>
            
            <div className="mt-4">
              <Button 
                variant="success"
                href={recipe.source_url || '#'}
                target="_blank"
                className="w-100"
                disabled={!recipe.source_url}
              >
                <FaExternalLinkAlt className="me-2" />
                View Full Recipe Instructions
              </Button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default RecipeModal