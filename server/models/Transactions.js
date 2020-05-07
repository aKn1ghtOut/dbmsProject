import Schema from "simpl-schema";
import { Mongo } from "meteor/mongo";

const Transactions = new Mongo.Collection("Transactions");

Transactions.schema = new Schema({

	type: {
		type: String,
		custom: function(){ 
			const val = this.value;
			return ("Order" === val || "Refund" === "val");
		}
	},

	datetime: {
		type: Date,
		defaultValue: new Date()
	},

	amount: {
		type: Number
	},

	proof: {
		type: String
	},

	from: {
		type: String
	},

	to: {
		type: String
	},

	payload: {
		type: Schema.oneOf(Array, Object)
	},

	'payload.$': {
		type: Object,
		blackbox: true
	}
})

Transactions.attachSchema(Transactions.schema);

export default Transactions;