import React, { Component } from "react";
import { Meteor } from "meteor/meteor";

import { Link } from 'react-router-dom';
import { withTracker } from "meteor/react-meteor-data";

import "./AccountMenu.scss";

class AccountMenu extends Component
{
	constructor(props)
	{
		super(props);
	}

	state = {
	};

	logout = () => {
		Meteor.logout(() => window.location.reload());
	}

	render()
	{
		return (
		<div id="AccountMenu">
			<div className="menuList">
				{
					Meteor.userId() ?
					<div>
						<Link to="/orders">Orders</Link>
						<Link to="/cart">Cart</Link>
						<Link to="/settings">Settings</Link>
						{
							Meteor.userId() && Meteor.user() && Meteor.user().isVendor ?
							<Link to="/vendor">Vendor Panel</Link> :
							null
						}
						<a onClick={this.logout}>Logout</a>
					</div>:
					""
				}
			</div>
			<h2>{ Meteor.userId() ? (Meteor.user() ? Meteor.user().name : "Account") : <Link to="/getin">Login / Sign Up</Link> }</h2>
		</div>
		);
	}
}

const AccountMenuContainer = withTracker(()=>{
	const subscription = Meteor.subscribe("userData");
	var loading = !subscription.ready();

	return {
		loading
	}
})(AccountMenu);

export default AccountMenuContainer;