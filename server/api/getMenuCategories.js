import { Meteor } from "meteor/meteor";
import Categories from "../models/Categories";

Meteor.publish("categories.getall", function(){
	return Categories.find({});
});