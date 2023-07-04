import './App.scss';
import React, { useContext } from 'react';
import Login from './pages/login/login';
import Register from './pages/register/register';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/navbar';
import LeftBar from './components/leftbar/leftbar';
import RightBar from './components/rightbar/rightbar';
import Home from './pages/home/home';
import Profile from './pages/profile/profile';
import PropTypes from 'prop-types';
import { DarkModeContext } from './contexts/darkModeContex';
import { AuthContext } from './contexts/authContext';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
	const {currentUser} = useContext(AuthContext);
	const {darkMode} = useContext(DarkModeContext);

	const queryClient = new QueryClient();

	const Layout = () => {
		return(
			<QueryClientProvider client={queryClient}>
				<div className={`theme-${darkMode ? 'dark' : 'light'}`}>
					<NavBar />
					<div style={ {display: 'flex'}}>
						<LeftBar />
						<div style={{flex: 6}}>
							<Outlet />
						</div>
						<RightBar />
					</div>
				</div>
			</QueryClientProvider>
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
