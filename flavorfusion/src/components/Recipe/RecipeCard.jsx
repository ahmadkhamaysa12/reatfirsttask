import { Card, Badge } from 'react-bootstrap'

const RecipeCard = ({ recipe, onClick }) => {
  const getPublisherBadge = (publisher) => {
    const colors = {
      'BBC Good Food': 'success',
      'Food Network': 'warning',
      'Jamie Oliver': 'danger'
    }
    const color = colors[publisher] || 'secondary'
    return <Badge bg={color}>{publisher}</Badge>
  }

  return (
    <Card className="recipe-card h-100" onClick={onClick} style={{ cursor: 'pointer' }}>
      <div style={{ overflow: 'hidden' }}>
        <Card.Img 
          variant="top" 
          src={recipe.image_url} 
          alt={recipe.title}
        />
      </div>
      <Card.Body>
        <div className="mb-2">
          {getPublisherBadge(recipe.publisher)}
        </div>
        <Card.Title className="fs-6 fw-bold mb-2">
          {recipe.title.length > 45 ? recipe.title.slice(0, 45) + '...' : recipe.title}
        </Card.Title>
        <Card.Text className="text-muted small">
          ⏱️ Ready in ~30 min
        </Card.Text>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <small className="text-primary">
            👨‍🍳 by {recipe.publisher}
          </small>
          <span className="text-primary">
            View Recipe →
          </span>
        </div>
      </Card.Body>
    </Card>
  )
}

export default RecipeCard