import { Meteor } from "meteor/meteor";
import Products from "../models/Products";

Meteor.publish("products.category", function({ subscription }){
	
	const query = subscription === "all" ? {} : { category: subscription };
	return Products.find(query);

});

Meteor.publish("product.one", function({ id })
{
	const random = Math.random();
	if( id && Products.find(id).count() > 0 )
	return Products.find(id);
	else
	return Products.find({ random });
});

Meteor.publish("products.vendor", function(){

	random = Math.random();

	if(!this.userId)
	{
		this.stop();
		return;
	}

	const user = Meteor.users.findOne({ _id : this.userId });

	if( !user || !user.vendor )
	{
		this.stop();
		return;
	}
	
	return Products.find({
		"vendor.vid" : user.vendor
	});

});