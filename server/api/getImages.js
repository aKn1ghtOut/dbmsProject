import Images from "../models/Images";
import { Meteor } from "meteor/meteor";

Meteor.publish("Images.all", function(){
	return Images.find().cursor;
})