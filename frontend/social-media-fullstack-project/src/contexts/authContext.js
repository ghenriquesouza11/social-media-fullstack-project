import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
	const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

	const login = async (loginInputs) => {
		const res = await axios.post('http://localhost:3333/login', loginInputs, {
			withCredentials:true
		});
		setCurrentUser(res.data);
	};

	useEffect(() => {
		localStorage.setItem('user', JSON.stringify(currentUser));
	}, [currentUser]);

	return (
		<AuthContext.Provider value={{currentUser, login}}>
			{children}
		</AuthContext.Provider>
	);
};

AuthContextProvider.propTypes = {
	children: PropTypes.shape().isRequired
};