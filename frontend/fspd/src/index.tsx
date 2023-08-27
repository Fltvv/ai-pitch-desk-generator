import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/App.css';
import {BrowserRouter, Route, Switch, Redirect, HashRouter} from 'react-router-dom';
import Layout from './layouts';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme';

ReactDOM.render(
	<ChakraProvider theme={theme}>
		<React.StrictMode>
			<BrowserRouter>
				<Switch>
					<Route path={`/`} component={Layout} />
					<Redirect exact from='/' to='/main' />
				</Switch>
			</BrowserRouter>
		</React.StrictMode>
	</ChakraProvider>,
	document.getElementById('root')
);
