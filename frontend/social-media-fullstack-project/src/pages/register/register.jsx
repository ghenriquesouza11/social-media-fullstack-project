import React from 'react';
import './register.scss';
import { Link } from 'react-router-dom';

function Register () {
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
					<form>
						<input type='text' placeholder='Username' />
						<input type='text' placeholder='Email' />
						<input type='password' placeholder='password' />
						<input type='text' placeholder='Name' />
						<button>Register</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Register;