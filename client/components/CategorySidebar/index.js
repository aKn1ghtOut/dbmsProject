import React, { Component } from "react";

import { Link, NavLink } from "react-router-dom";
import { withTracker } from "meteor/react-meteor-data"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareRight } from "@fortawesome/free-regular-svg-icons";

import "./Sidebar.scss";
import Categories from "../../models/Categories";

class CategorySidebar extends Component
{
	constructor(props)
	{
		super(props);
	}

	state = {
	};

	componentWillReceiveProps(props)
	{
		console.log({ categories : props.categories });
	}

	render()
	{
		return (
			<nav id="categorySidebar">
				<NavLink activeClassName="category onHere" className="category" to={`/`} exact>
					<span>All</span>
					<FontAwesomeIcon icon={faCaretSquareRight}/>
				</NavLink>
				{
					this.props.loading ? null :
					this.props.categories.map(categ => 
						<NavLink activeClassName="category onHere" className="category" to={`/c/${categ.title.toLocaleLowerCase()}`}>
							<span>{categ.title}</span>
							<FontAwesomeIcon icon={faCaretSquareRight}/>
						</NavLink>
					)
				}
			</nav>
		);
	}
}

const categorySidebarContainer = withTracker(({}) => {
	const categories = Meteor.subscribe('categories.getall');
	const loading = !categories.ready();
	return {
	  loading,
	  categories: loading || Categories.find({}).fetch()
	};
})(CategorySidebar);

export default categorySidebarContainer;