import { Navigate, Outlet } from 'react-router'

export const PrivateRoute = () => {
  

  const auth = true
  
  
  return(
    auth? <Outlet/> : <Navigate to='login'/>
  )
}


