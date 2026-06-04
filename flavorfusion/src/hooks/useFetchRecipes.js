import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

const API_BASE = 'https://forkify-api.jonas.io/api/v2/recipes'
const RESULTS_PER_PAGE = 12

export const useFetchRecipes = (initialQuery = 'pizza') => {
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  const [searchQuery, setSearchQuery] = useState(initialQuery)

  const fetchRecipes = useCallback(async (query, page = 1) => {
    setLoading(true)
    setError('')
    
    try {
      const response = await axios.get(`${API_BASE}?search=${query}`)
      const allRecipes = response.data.data.recipes || []
      setTotalResults(allRecipes.length)
      
      const start = (page - 1) * RESULTS_PER_PAGE
      const paginated = allRecipes.slice(start, start + RESULTS_PER_PAGE)
      setRecipes(paginated)
      
      if (allRecipes.length === 0) {
        setError('No recipes found. Try a different search term!')
      }
    } catch (err) {
      setError('Unable to fetch recipes. Please check your connection.')
      console.error('API Error:', err)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchRecipes(searchQuery, currentPage)
  }, [searchQuery, currentPage, fetchRecipes])

  const handleSearch = (query) => {
    setSearchQuery(query)
    setCurrentPage(1)
  }

  const totalPages = Math.ceil(totalResults / RESULTS_PER_PAGE)

  return {
    recipes,
    loading,
    error,
    currentPage,
    totalPages,
    searchQuery,
    handleSearch,
    setCurrentPage
  }
}