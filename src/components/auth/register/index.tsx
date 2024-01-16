import { Button, TextField, Typography } from '@mui/material';

export function RegisterPage() {
	return (
		<>
			<Typography variant='h2' fontFamily='Popins' textAlign='center'>
				Регистрация
			</Typography>
			<Typography
				marginBottom={3}
				variant='body1'
				fontFamily='Popins'
				textAlign='center'
			>
				Введите данные для регистрации
			</Typography>
			<TextField
				fullWidth={true}
				margin='normal'
				id='outlined-basic'
				label='Name'
				variant='outlined'
				placeholder='Введите ваше имя'
			/>
			<TextField
				fullWidth={true}
				margin='normal'
				id='outlined-basic'
				label='Username'
				variant='outlined'
				placeholder='Введите ваш username'
			/>

			<TextField
				fullWidth={true}
				margin='normal'
				id='outlined-basic'
				label='Email'
				variant='outlined'
				placeholder='Введите ваш email'
			/>
			<TextField
      type='password'
				fullWidth={true}
				margin='normal'
				id='outlined-basic'
				label='Password'
				variant='outlined'
				placeholder='Введите ваш пароль'
			/>
			<TextField
      type='password'
				fullWidth={true}
				margin='normal'
				id='outlined-basic'
				label='Repeat Password'
				variant='outlined'
				placeholder='Повторите ваш пароль'
			/>
			<Button
				sx={{
					fontFamily: 'Popins',
					marginTop: 2,
					width: '60%',
					marginBottom: 2,
				}}
				variant='contained'
			>
				Регистрация
			</Button>
			<Typography
				variant='body1'
				sx={{
					fontFamily: 'Popins',
				}}
			>
				У вас есть аккаунта? <span className='incitingText'>Авторизация</span>
			</Typography>
		</>
	);
}
