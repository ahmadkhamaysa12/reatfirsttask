import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import RecipeCard from '../components/Recipe/RecipeCard'
import Loader from '../components/UI/Loader'
import ErrorMessage from '../components/UI/ErrorMessage'
import Pagination from '../components/UI/Pagination'
import RecipeModal from '../components/Recipe/RecipeModal'
import { useFetchRecipes } from '../hooks/useFetchRecipes'

const CategoryPage = () => {
  const { category } = useParams()
  const { recipes, loading, error, currentPage, totalPages, handleSearch, setCurrentPage } = useFetchRecipes(category)
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    if (category) {
      handleSearch(category)
    }
  }, [category])

  const categoryNames = {
    pizza: { title: 'Pizza Recipes', desc: 'Discover the best pizza recipes from around the world' },
    burger: { title: 'Burger Recipes', desc: 'Juicy, delicious burger recipes for every taste' },
    pasta: { title: 'Pasta Recipes', desc: 'Classic and modern pasta dishes for every occasion' }
  }

  const current = categoryNames[category] || { 
    title: `${category?.charAt(0).toUpperCase() + category?.slice(1)} Recipes`, 
    desc: `Discover amazing ${category} recipes` 
  }

  if (loading) return <Loader />
  if (error) return <ErrorMessage message={error} />

  return (
    <Container className="py-4">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold" style={{ color: '#2d6a4f' }}>{current.title}</h1>
        <p className="text-muted">{current.desc}</p>
      </div>

      {recipes.length === 0 ? (
        <p className="text-center text-muted">No recipes found in this category.</p>
      ) : (
        <>
          <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {recipes.map(recipe => (
              <Col key={recipe.id}>
                <RecipeCard 
                  recipe={recipe}
                  onClick={() => {
                    setSelectedRecipe(recipe)
                    setShowModal(true)
                  }}
                />
              </Col>
            ))}
          </Row>
          
          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}

      <RecipeModal 
        show={showModal}
        onHide={() => setShowModal(false)}
        recipe={selectedRecipe}
      />
    </Container>
  )
}

export default CategoryPage