import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchBar = ({ onSearch, isLoading }) => {
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (query.trim() && !isLoading) {
      onSearch(query.trim())
    }
  }

  return (
    <form onSubmit={handleSubmit} className="search-wrapper">
      <input
        type="text"
        className="search-input w-100"
        placeholder="Search for recipes... (e.g., pizza, pasta, chicken, burger)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        disabled={isLoading}
      />
      <button type="submit" className="search-btn" disabled={isLoading}>
        <FaSearch className="me-2" />
        Search
      </button>
    </form>
  )
}

export default SearchBar