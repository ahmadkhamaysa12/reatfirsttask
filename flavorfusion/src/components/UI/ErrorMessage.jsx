import { FaExclamationTriangle } from 'react-icons/fa'

const ErrorMessage = ({ message }) => {
  return (
    <div className="text-center py-5">
      <FaExclamationTriangle size={48} className="text-warning mb-3" />
      <h3 className="text-danger">Oops! Something went wrong</h3>
      <p className="text-muted">{message || 'Failed to load recipes. Please try again.'}</p>
      <button 
        className="btn btn-primary mt-3"
        onClick={() => window.location.reload()}
      >
        Refresh Page
      </button>
    </div>
  )
}

export default ErrorMessage