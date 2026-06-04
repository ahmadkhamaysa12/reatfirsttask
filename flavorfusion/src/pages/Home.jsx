import { Container, Row, Col } from 'react-bootstrap'
import SearchBar from '../components/Search/SearchBar'
import RecipeCard from '../components/Recipe/RecipeCard'
import Loader from '../components/UI/Loader'
import ErrorMessage from '../components/UI/ErrorMessage'
import Pagination from '../components/UI/Pagination'
import RecipeModal from '../components/Recipe/RecipeModal'
import { useFetchRecipes } from '../hooks/useFetchRecipes'
import { useState } from 'react'

const categories = [
  { name: 'Pizza', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500', search: 'pizza' },
  { name: 'Burger', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500', search: 'burger' },
  { name: 'Pasta', image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500', search: 'pasta' },
]

const Home = () => {
  const { recipes, loading, error, currentPage, totalPages, handleSearch, setCurrentPage } = useFetchRecipes('pizza')
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe)
    setShowModal(true)
  }

  if (error) return <ErrorMessage message={error} />

  return (
    <>
      <div className="hero-section">
        <Container>
          <h1 className="hero-title">Discover Your Next Favorite Meal</h1>
          <p className="hero-subtitle">
            Explore thousands of delicious recipes from professional chefs and home cooks worldwide
          </p>
          <div className="mt-4">
            <SearchBar onSearch={handleSearch} isLoading={loading} />
          </div>
        </Container>
      </div>

      <Container>
        <section className="mb-5">
          <h2 className="text-center mb-4">Popular Categories</h2>
          <Row className="g-4">
            {categories.map((category, index) => (
              <Col md={4} key={index}>
                <div 
                  className="category-card d-flex align-items-center justify-content-center"
                  style={{ backgroundImage: `url(${category.image})` }}
                  onClick={() => handleSearch(category.search)}
                >
                  <h3 className="category-title">{category.name}</h3>
                </div>
              </Col>
            ))}
          </Row>
        </section>

        <section>
          <h2 className="text-center mb-4">Featured Recipes</h2>
          
          {loading ? (
            <Loader />
          ) : recipes.length === 0 ? (
            <p className="text-center text-muted">No recipes found. Try a different search!</p>
          ) : (
            <>
              <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                {recipes.map(recipe => (
                  <Col key={recipe.id}>
                    <RecipeCard 
                      recipe={recipe} 
                      onClick={() => handleRecipeClick(recipe)}
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
        </section>
      </Container>

      <RecipeModal 
        show={showModal}
        onHide={() => setShowModal(false)}
        recipe={selectedRecipe}
      />
    </>
  )
}

export default Home