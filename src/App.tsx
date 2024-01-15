import { Route, Routes } from 'react-router';
import { LoginPage } from './components/auth/login';
import { Home } from './components/home';
import { PrivateRoute } from './components/utils/router/privateRoute';
import { RegisterPage } from './components/auth/register'


export function App() {
	return (
		<div className='app'>
			<Routes>
				<Route element={<PrivateRoute />}>
					<Route path='/' element={<Home />} />
				</Route>



				<Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
			</Routes>
		</div>
	);
}
