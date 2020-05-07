import { Meteor } from 'meteor/meteor';
import { FilesCollection } from 'meteor/ostrio:files';

const Images = new FilesCollection({
  collectionName: 'Images',
  allowClientCode: false, // Disallow remove files from Client
  storagePath: (Meteor.isDevelopment ? "../../../../../assets/" : "../../assets/"),
  onBeforeUpload(file) {

    console.log({userId: this.userId, file});

	if(!this.userId)
	return "Not logged in. Please login to upload images.";

	if(this.user() && !this.user().isVendor)
	return "Not a vendor.";

    // Allow upload files under 10MB, and only in png/jpg/jpeg formats
    if (file.size <= 10485760 && /png|jpg|jpeg/i.test(file.extension)) {
      return true;
    }
	return 'Please upload image, with size equal or less than 10MB';
	
  }
});

export default Images;