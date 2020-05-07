import { Meteor } from 'meteor/meteor';
import { Accounts } from "meteor/accounts-base";

import Users from './models/Users';
import Vendors from './models/Vendors';
import Transactions from './models/Transactions';
import Products from './models/Products';
import Categories from './models/Categories';

import "./api";

Meteor.startup(() => {

	// if(Categories.find({}).count() === 0)
	// {
	// 	[
	// 		{
	// 			title: "General"
	// 		},
	// 		{
	// 			title: "Electronics"
	// 		},
	// 		{
	// 			title: "Foodie"
	// 		},
	// 		{
	// 			title: "Stationary"
	// 		},
	// 	].forEach(categ => {Categories.insert(categ);})

	// 	console.log({ categories: Categories.find({}).fetch().fetch() });
	// }

	// if(Users.find({}).count() === 0)
	// {
	// 	[
	// 		{
	// 			username: "uname1",
	// 			email: "user@email.com",
	// 			password: "blablabla",
	// 			name: "UName",
	// 			number: 8888888888,
	// 			address: "temp"
	// 		},
	// 		{
	// 			username: "uname2",
	// 			email: "use2@email.com",
	// 			password: "blablabla",
	// 			name: "UName",
	// 			number: 8888888882,
	// 			address: "temp"
	// 		},
	// 		{
	// 			username: "uname3",
	// 			email: "use3@email.com",
	// 			password: "blablabla",
	// 			name: "UName",
	// 			number: 8888888883,
	// 			address: "temp"
	// 		},
	// 	].forEach(user => Users.insert(user));

	// 	console.log({ users: Users.find({}).fetch() });
	// }

	// if(Vendors.find({}).count() === 0)
	// {
	// 	[
	// 		{
	// 			username: "Vname1",
	// 			email: "Vser@email.com",
	// 			password: "blablabla",
	// 			brandName: "VName",
	// 			contactName: "VName",
	// 			number: 8888888888,
	// 			address: "temp"
	// 		},
	// 		{
	// 			username: "Vname2",
	// 			email: "Vse2@email.com",
	// 			password: "blablabla",
	// 			brandName: "VName",
	// 			contactName: "VName",
	// 			number: 8888888882,
	// 			address: "temp"
	// 		},
	// 		{
	// 			username: "Vname3",
	// 			email: "Vse3@email.com",
	// 			password: "blablabla",
	// 			brandName: "VName",
	// 			contactName: "VName",
	// 			number: 8888888883,
	// 			address: "temp"
	// 		},
	// 	].forEach(vend => Vendors.insert(vend));

	// 	console.log({ vendors: Vendors.find({}).fetch() });
	// }

	if(Meteor.users.find().count() == 0)
	{
		[
			{
				username: "bla",
				password: "pwdBwahahah",
				emails: "bleble@bleble.com",
				name: "NamesHere",
				number: 4565768798,
				address: "dxfcgh",
				profile: {
					name: ""
				}
			},
			{
				username: "bla2",
				password: "pwdBwahahah2",
				email: "bleble2@bleble.com",
				name: "NamesHere2",
				number: 4565768792,
				address: "dxfcg2",
				profile: {
					name: ""
				}
			},
			{
				username: "bla3",
				password: "pwdBwah3ahah",
				email: "bleble33@bleble.com", 
				name: "NamesHer3e",
				number: 4565768798,
				address: "dxfcg3h",
				profile: {
					name: ""
				}
			}
		].forEach(entry => {
			Accounts.createUser(entry);
		});
	}

	if(Products.find({}).count() === 3)
	{
		[
			{
				title: "Helicopter",
				pictures: [
					"https://images.unsplash.com/photo-1563561686990-f0ef5b3e0b7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
				],
				vendor: "2",
				price: 100000000,
				category: "electronics"
			},
			{
				title: "Helicopter",
				pictures: [
					"https://images.unsplash.com/photo-1563561686990-f0ef5b3e0b7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
				],
				vendor: "2",
				price: 100000000,
				category: "electronics"
			},
			{
				title: "Helicopter",
				pictures: [
					"https://images.unsplash.com/photo-1563561686990-f0ef5b3e0b7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
				],
				vendor: "2",
				price: 100000000,
				category: "electronics"
			},
			{
				title: "Helicopter",
				pictures: [
					"https://images.unsplash.com/photo-1563561686990-f0ef5b3e0b7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
				],
				vendor: "2",
				price: 100000000,
				category: "electronics"
			},
			{
				title: "Helicopter",
				pictures: [
					"https://images.unsplash.com/photo-1563561686990-f0ef5b3e0b7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
				],
				vendor: "2",
				price: 100000000,
				category: "general"
			},
			{
				title: "Helicopter",
				pictures: [
					"https://images.unsplash.com/photo-1563561686990-f0ef5b3e0b7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
				],
				vendor: "2",
				price: 100000000,
				category: "general"
			},
			{
				title: "Helicopter",
				pictures: [
					"https://images.unsplash.com/photo-1563561686990-f0ef5b3e0b7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
				],
				vendor: "2",
				price: 100000000,
				category: "general"
			},
		].forEach(prod => Products.insert(prod));
	}

	// Products.update({}, {
	// 	$set: {
	// 		pictures: ["5QYa26jH4vFniwnyw"]
	// 	}
	// }, {
	// 	multi: true
	// });
});
