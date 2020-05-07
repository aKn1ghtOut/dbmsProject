import { Meteor } from "meteor/meteor";

Meteor.publish("userData", function(){
	if(this.userId)
	{
		return Meteor.users.find(
			{ _id : this.userId },
			{
				fields: {
					name: 1,
					emails: 1,
					profile: 1,
					isVendor: 1,
					vendor: 1,
					cart: 1
				}
			}
		);
	}
	else
	return Meteor.users.find({ _id : "" });
});