import React, { useState } from 'react';
import './register.scss';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register () {

	const navigate = useNavigate();

	const [registerInputs, setRegisterInputs] = useState({
		userNickName:'',
		userEmail:'',
		userPassword:'',
		userName:'',
	});

	const [error, setError] = useState(null);

	const handleChange = (e) => {
		setRegisterInputs((prev) => (
			{...prev, [e.target.name]:e.target.value}
		));
	};

	const halndleSubmit = async (e) => {
		e.preventDefault();
		try{
			await axios.post('http://localhost:3333/register', registerInputs);
			navigate('/');
			navigate(0);
		} catch(error){
			setError(error.response.data);
		}
	};

	return (
		<div className="register">
			<div className='card'>
				<div className='left'>
					<h1>Hello World.</h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quia totam. Corrupti ea cumque vero consequatur, velit veniam eligendi fuga, magni quia beatae dolore laudantium. Provident quam quis vel earum?</p>
					<span>Do you have an account?</span>
					<Link to='/login'>
						<button>Login</button>
					</Link>
				</div>
				<div className='right'>
					<h1>Register</h1>
					<form onSubmit={(e) => halndleSubmit(e)}>
						<input type='text' placeholder='Username' name='userNickName' onChange={(e) => handleChange(e)}/>
						<input type='text' placeholder='Email' name='userEmail' onChange={(e) => handleChange(e)}/>
						<input type='password' placeholder='password' name='userPassword' onChange={(e) => handleChange(e)}/>
						<input type='text' placeholder='Name' name='userName' onChange={(e) => handleChange(e)}/>
						{error && `${error}`}
						<button type='submit'>Register</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Register;