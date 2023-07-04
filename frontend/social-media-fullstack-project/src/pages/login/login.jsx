import React, { useContext, useState } from 'react';
import './login.scss';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/authContext';
import PropTypes from 'prop-types';

function Login () {

	const {login} = useContext(AuthContext);
	
	const [loginInputs, setLoginInputs] = useState({
		userNickName:'',
		userPassword:''
	});
	const [error, setError] = useState(null);

	const navigate = useNavigate();

	const handleChange = (e) => {
		setLoginInputs((prev) => (
			{...prev, [e.target.name]: e.target.value}
		));
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		try{
			await login(loginInputs);
			navigate('/');
		} catch(error){
			setError(error.response.data);
		}
	};

	return (
		<div className="login">
			<div className='card'>
				<div className='left'>
					<h1>Hello World.</h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quia totam. Corrupti ea cumque vero consequatur, velit veniam eligendi fuga, magni quia beatae dolore laudantium. Provident quam quis vel earum?</p>
					<span>Dont&apos;t you have an account?</span>
					<Link to='/register'>
						<button>Register</button>
					</Link>
				</div>
				<div className='right'>
					<h1>Login</h1>
					<form onSubmit={(e) => handleLogin(e)}>
						<input type='text' placeholder='Username' name='userNickName' onChange={(e) => handleChange(e)}/>
						<input type='password' placeholder='password' name='userPassword' onChange={(e) => handleChange(e)}/>
						{error && `${error}`}
						<button
							type='submit'
						>
							Login
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

Login.propTypes = {
	history: PropTypes.shape()
};

export default Login;