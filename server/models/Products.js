import Schema from "simpl-schema";
import { Mongo } from "meteor/mongo";

const Products = new Mongo.Collection("Products");

Products.schema = new Schema({

	title: {
		type: String,
		min: 5,
		max: 15
	},

	pictures: {
		type: Array,
		defaultValue: [],
		maxCount: 4
	},

	'pictures.$': {
		type: String
	},

	vendor: {
		type: new Schema({
			title: String,
			vid: String
		})
	},

	price: {
		type: Number
	},

	category: {
		type: String,
		defaultValue: "general"
	},

	description: {
		type: String,
		defaultValue: ""
	}
})

Products.attachSchema(Products.schema);

export default Products;