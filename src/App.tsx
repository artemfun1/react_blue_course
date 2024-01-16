import { Route, Routes } from 'react-router';
import { AuthRootComponent } from './components/auth';
import { Home } from './components/home';
import { PrivateRoute } from './components/utils/router/privateRoute';

export function App() {
	return (
		<div className='app'>
			<Routes>
				<Route element={<PrivateRoute />}>
					<Route path='/' element={<Home />} />
				</Route>

				<Route path='/login' element={<AuthRootComponent />} />
				<Route path='/register' element={<AuthRootComponent />} />
			</Routes>
		</div>
	);
}
