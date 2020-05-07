import React, { Component } from "react";

import { Link } from "react-router-dom";
import { withTracker } from "meteor/react-meteor-data"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareRight } from "@fortawesome/free-regular-svg-icons";
import PropTypes from "prop-types";

import "./ListProducts.scss";
import Products from "../../models/Products";
import Images from "../../models/Images";

class ListProducts extends Component
{
	constructor(props)
	{
		super(props);
	}

	state = {
	};

	componentDidMount()
	{
		console.log({ products : this.props.products, query: this.props.query });
	}

	render()
	{
		return (
			<div className={"ListProducts" + (this.props.expanded ? " expanded" : "")}>
				{ this.props.subscription && <h2>{this.props.subscription}<span>{this.props.loading ? "" : this.props.products.length} found</span></h2>}
				{
					this.props.loading ? null :
					this.props.products.map(product => 
						<Link className="product-listing" to={ (this.props.linkTemplate || "/p/") + product._id}>
							<img src={ Images.findOne({ _id : product.pictures[0] }).link() }/>
							<h2>{product.title}</h2>
							<span>by: {product.vendor && product.vendor.title}</span>
							<span>₹ {product.price}</span>
						</Link>
					)
				}
			</div>
		);
	}
}

const ListProductsContainer = withTracker(({ subscription, meteorSubscription, query }) => {

	const products = Meteor.subscribe(meteorSubscription || "products.category", { subscription });
	const imageSub = Meteor.subscribe("Images.all");

	const loading = products.ready() && imageSub.ready() ? false : true;
	const nQuery = query ? { ...query } : subscription === "all" ? {} 
	: {
		category: subscription.toLocaleLowerCase()
	};

	return {
	  loading,
	  products: loading || Products.find(nQuery, { sort: { title: 1 } }).fetch()
	};
})(ListProducts);

ListProducts.propTypes = {
	loading: PropTypes.bool,
	products: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.arrayOf(PropTypes.shape({
			pictures: PropTypes.array,
			title: PropTypes.string,
			id: PropTypes.string,
			vendor: PropTypes.string,
			amount: PropTypes.number
		}))
	])
}

export default ListProductsContainer;