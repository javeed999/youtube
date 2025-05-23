import Cookies from 'js-cookie'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ element }) => {
  const jwtToken = Cookies.get('jwtToken')

  if (jwtToken===undefined) {
    return <Navigate to="/login" replace />
  }

  return <>{element}</>
}

export default ProtectedRoute
