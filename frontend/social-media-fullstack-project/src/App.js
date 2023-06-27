import './App.css';
import React from 'react';
import Login from './pages/login/login';
import Register from './pages/register/register';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/navbar';
import LeftBar from './components/leftbar/leftbar';
import RightBar from './components/rightbar/rightbar';
import Home from './pages/home/home';
import Profile from './pages/profile/profile';
import PropTypes from 'prop-types';

function App() {
	const currentUser = false;

	const Layout = () => {
		return(
			<div>
				<NavBar />
				<div style={ {display: 'flex'}}>
					<LeftBar />
					<Outlet />
					<RightBar />
				</div>
			</div>
		);
	};

	const ProtectedRoutes = ({children}) => {
		if(!currentUser) {
			return <Navigate to='/login' />;
		}
		return children;
	};
	return (
		<Routes>
			<Route exact path='/' element={ <ProtectedRoutes> <Layout /> </ProtectedRoutes> }>
				<Route exact path='/' element={ <Home /> }/>
				<Route exact path='/profile/:id' element={ <Profile /> }/>
			</Route>
			<Route exact path='/login' element={ <Login /> } />
			<Route exact path='/register' element={ <Register /> } />
		</Routes>
	);
}

App.propTypes = {
	children: PropTypes.func
};

export default App;
