import { useLocation } from 'react-router'
import { LoginPage } from './login'
import { RegisterPage } from './register'



export function AuthRootComponent(){

  const location = useLocation()

  return(
      location.pathname === '/login'? <LoginPage/> : <RegisterPage/>
  )
}