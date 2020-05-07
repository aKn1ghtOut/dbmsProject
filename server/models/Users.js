import { Accounts } from "meteor/accounts-base";
import { _ } from "meteor/underscore";

Accounts.onCreateUser((options, user) => {
	const { name, number, address } = options;
	Object.assign(user, { name, number, address,
		isVendor: false,
		vendor: null,
		cart: []
	});

	return user;
});