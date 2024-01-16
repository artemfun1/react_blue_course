import { Button, TextField, Typography } from '@mui/material';

interface props {
	setPassword: Function;
	setEmail: Function;
}

export function LoginPage(props: any) {
	const { setPassword, setEmail,} = props;
	return (
		<>
			<Typography variant='h2' fontFamily='Popins' textAlign='center'>
				Авторизация
			</Typography>
			<Typography
				marginBottom={3}
				variant='body1'
				fontFamily='Popins'
				textAlign='center'
			>
				Введите ваш логин и пароль
			</Typography>
			<TextField
				fullWidth={true}
				margin='normal'
				id='outlined-basic1'
				label='Email'
				variant='outlined'
				placeholder='Введите ваш email'
				onChange={event => setEmail(event.target.value)}
			/>
			<TextField
				type='password'
				fullWidth={true}
				margin='normal'
				id='outlined-basic'
				label='Password'
				variant='outlined'
				placeholder='Введите ваш пароль'
				onChange={event => setPassword(event.target.value)}
			/>
			<Button
				type='submit'
				sx={{
					fontFamily: 'Popins',
					marginTop: 2,
					width: '60%',
					marginBottom: 2,
				}}
				variant='contained'
			>
				Войти
			</Button>
			<Typography
				variant='body1'
				sx={{
					fontFamily: 'Popins',
				}}
			>
				У вас нет аккаунта? <span className='incitingText'>Регистрация</span>
			</Typography>
		</>
	);
}
