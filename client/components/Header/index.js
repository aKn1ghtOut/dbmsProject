import React, { Component } from "react";

import { withRouter } from "react-router";

import "./Header.scss";
import AccountMenu from "./AccountMenu";
import { Link } from "react-router-dom";

class Header extends Component
{
	constructor(props)
	{
		super(props);

		this.search = this.search.bind(this);
		this.searchQuery = React.createRef();
	}

	state = {
	};

	search(e)
	{
		e.preventDefault();
		e.stopPropagation();

		const val = this.searchQuery.current.value;

		this.props.history.push(`/s/${val}`);
	}

	render()
	{
		return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="site-header">
			<Link className="navbar-brand" to="/">CampusKart</Link>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<form className="form-inline my-2 my-lg-0">
				<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" ref={this.searchQuery}/>
				<button className="btn btn-outline-success my-2 my-sm-0" onClick={this.search}>Search</button>
				</form>
			</div>
			<AccountMenu/>
		</nav>
		);
	}
}

export default withRouter(Header);