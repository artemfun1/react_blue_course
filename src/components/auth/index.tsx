import { Box } from '@mui/material';
import { useLocation } from 'react-router';
import { LoginPage } from './login';
import { RegisterPage } from './register';
import './style.scss';
import { useState } from 'react'
import axios from 'axios'

export function AuthRootComponent() {
	const location = useLocation();

  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')

  const handleSubmit = async (e:{preventDefault:()=> void}) => {
    e.preventDefault()
    const userData = {
      email,
      password
    }
    const user = await axios.post('https://65a686a374cf4207b4f0480f.mockapi.io/api/v1/mailandpass')

    console.log(user.data)


    
  }

	return (
		<div className='root'>
			<form className='form' onSubmit={handleSubmit}>
				<Box 
            display='flex'
            justifyContent='center'
            alignItems='center'
            flexDirection='column'
            maxWidth={640}
            margin='auto'
            padding={5}
            borderRadius={5}
            boxShadow={'5px 5px 10px #ccc'}

        >
          {location.pathname === '/login' ? <LoginPage  setEmail={setEmail} setPassword={setPassword}/> : location.pathname
					=== '/register' ?<RegisterPage /> : null }
				</Box>
			</form>
		</div>
	);
}
