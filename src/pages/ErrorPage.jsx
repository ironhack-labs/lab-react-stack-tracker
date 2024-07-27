


import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div>
        <h1>404</h1>
        <h3>Page not found</h3>
        <Link to={`/`}>Back to Home page</Link>
    </div>
  )
}

export default ErrorPage
