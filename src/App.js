import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { loadUser } from './actions/auth';
import {styled, injectGlobal} from 'styled-components';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Account from './components/auth/Account';
import Login from './components/auth/Login';
import { logout } from './actions/auth';


import Dashboard from './components/layout/Dashboard';
import Search from './components/results/Search';
import Collection from './components/results/Collection';
import setAuthToken from './utils/setAuthToken';
import Alert from './components/auth/Alert';
import {createGlobalStyle} from 'styled-components'

import PrivateRoute from './routing/PrivateRoute';
//const history = createBrowserHistory();


const GlobalStyle = createGlobalStyle`
	body{
		width: 100%;
		height: 100%;
		margin: 0
		padding: 0;
		overflow: hidden;

		// font scale //
		h1 {
			font-size: 5.9vw;
			@media(min-width: 800px){
				font-size: 5vw;
				padding-bottom: 2.5vh;
			}	
			@media(min-width: 1250px) {
				font-size: 4.5vw;
			}
			@media(min-width: 1400px){ font-size: 4vw}
			@media(min-width: 1600px){ font-size: 3.5vw}
		}

		h2 {
			font-size: 7vw;
			@media(min-width: 700px){ font-size: 6vw;}
			@media(min-width: 900px){ font-size: 5vw;}
		}
		h3 {
			font-size: 3.75vw;
			@media(min-width: 700px){ font-size: 3vw;}
			@media(min-width: 900px){ font-size: 2.5vw;}
			@media(min-width: 1100px){ font-size: 2vw;}
			@media(min-width: 1350px){ font-size: 1.5vw;}
		}

		h5 {
			@media(min-width: 600px){ 
				font-size: 1.25em;
				padding: 1.5vh 0 3vh;
			}
			@media(min-width: 800px){ 
				padding: 3vh 0 4vh;
			}
		}

		h6 {
			font-size: 3.5vw;
			padding-top: 9px;
			@media(min-width: 600px){
				font-size: 3vw
			}
			@media(min-width: 750px){
				font-size: 2.75vw
			}
		}

		p {
			font-size: 4.5vmin;
			@media(min-width: 600px){
				font-size: 4vw;
				padding-bottom: 3.5vh;
			}
			@media(min-width: 800px){
				font-size: 3.5vw;
				padding-bottom: 3.5vh;
			}
			@media(min-width: 1200px){
				font-size:3vw;
			@media(min-width: 1400px){ font-size: 2.5vw}

			}


			
		}
	}
`

const App = () => {
	useEffect(() => {
		setAuthToken(localStorage.token);
		store.dispatch(loadUser());
	}, []);

	return (
		<React.Fragment>
			<Provider store={store}>
				<Alert></Alert>
				<Router>
					<Route exact path='/' component={Landing} />
					<Switch>
						<Route exact path='/register' component={Register} />
						<Route exact path='/login' component={Login} />
						<PrivateRoute exact path='/dashboard' component={Dashboard} />
						<PrivateRoute exact path='/search' component={Search} />
						<PrivateRoute exact path='/collection' component={Collection} />
						<PrivateRoute exact path='/account' component={Account} />
					</Switch>
				</Router>
			</Provider>
			<GlobalStyle />
		</React.Fragment>
	);
};

export default App;
