import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";

import Categories from "../../models/Categories";

import CategorySidebar from "../../components/CategorySidebar";
import ListProductsContainer from "../../components/ListProducts";

class HomePage extends Component
{
	state={
		productList: <div></div>,
		category: false
	}

	componentDidMount()
	{
		if(typeof(this.props.match.params.category) !== "undefined")
		this.setState({
			productList: <ListProductsContainer subscription={ this.props.match.params.category } expanded/>,
			category: true
		});
	}

	componentDidUpdate()
	{
		console.log(this.props.match);
	}

	componentWillReceiveProps(props)
	{
		if(typeof(props.match.params.category) !== "undefined")
		this.setState({
			productList: <ListProductsContainer subscription={ props.match.params.category } expanded/>,
			category: true
		});
		else
		this.setState({
			productList: <div></div>,
			category: false
		});
	}

	render()
	{
		return (
			<div className="container-lg home-container">
				<CategorySidebar/>
				<div>
				{ 
					this.state.category
					? this.state.productList
					:
					<div>
						<ListProductsContainer subscription={ "all" }/>
						{ this.props.categories.map(cat => <ListProductsContainer subscription={ cat.title }/>) }
					</div>
				}
				</div>
			</div>
		);
	}
}

const HomePageContainer = withTracker(()=>
{
	const subscription = Meteor.subscribe("categories.getall");
	var loading = !subscription.ready();

	return {
		loading,
		categories: Categories.find({}).fetch()
	};
})(HomePage)

export default HomePageContainer;