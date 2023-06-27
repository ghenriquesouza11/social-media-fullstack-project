import './App.css';
import React from 'react';
import Login from './pages/login/login';
import Register from './pages/register/register';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<Routes>
			<Route exact path='/login' Component={ Login } />
			<Route exact path='/register' Component={ Register } />
		</Routes>
	);
}

export default App;
