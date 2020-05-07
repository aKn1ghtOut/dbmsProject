import Schema from "simpl-schema";
import { Mongo } from "meteor/mongo";

const Categories = new Mongo.Collection("Categories");

Categories.schema = new Schema({

	title: {
		type: String,
		min: 5
	},

	children: {
		type: Array,
		defaultValue: []
	},

	'children.$': {
		type: String
	},

	parent: {
		type: String,
		defaultValue: ""
	},
})

Categories.attachSchema(Categories.schema);

export default Categories;