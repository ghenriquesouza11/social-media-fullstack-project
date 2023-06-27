import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
	const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

	const login = () => {
		const currentUserInfo = {
			id: 1,
			name: 'John Doe',
			profilePic: 'https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600' 
		}; 
		setCurrentUser(currentUserInfo);
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