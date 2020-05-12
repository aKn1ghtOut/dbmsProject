import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Header from './components/Header';

import "./main.scss";
import Footer from './components/Footer';

import HomePage from './views/Home';
import GetinPage from './views/Account/Getin';
import ProductContainer from './views/Product';
import VendorPageContainer from './views/Vendor';
import EditProductPageContainer from './views/Vendor/editProduct';
import CartPageContainer from './views/Cart';
import OrderPageContainer from './views/Orders';
import SearchPageContainer from './views/Search';

const appHistory = createBrowserHistory();

const App = () => (
	<Router history={appHistory}>
		<Header/>
		<Switch>
			<Route path="/" exact component={HomePage} />
			<Route path="/c/:category" component={HomePage}/>
			<Route path="/p/:id" component={ProductContainer}/>
			<Route path="/s/:query" component={SearchPageContainer}/>
			<Route path="/getin" exact component={GetinPage}/>
			<Route path="/cart" exact component={CartPageContainer}/>
			<Route path="/orders" exact component={OrderPageContainer}/>
			<Route path="/vendor" exact component={VendorPageContainer}/>
			<Route path="/v/p/:id" component={EditProductPageContainer}/>
		</Switch>
		<Footer/>
	</Router>
);

Meteor.startup(() => {
	render(<App/>, document.getElementById('container'));
});
