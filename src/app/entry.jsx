'use strict ';

import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
// import { Router, Route } from 'react-router';

// import App from './containers/App';
import Generator from './components/Generator';

const store = configureStore();


ReactDOM.render(
<Provider store={store}>
		<Generator/>
</Provider>
, document.getElementById('root')
);
// ReactDOM.render(

// <Provider store={store}>
// 	<Router>
// 		<Route path="/" component={App}/>
// 		<Route path="/generator" component={Generator}/>
// 	</Router>
// </Provider>
// , document.getElementById('root')
// )
