const mongoose = require('mongoose');
const config = require('../config/database');


const ResourceSchema = mongoose.Schema({
	title: { type: String, required: true  },
	  author: { type: String},
	  tags: { type: String},
	  content: { type: String, required: true }
//	  created_at: Date,
//	  updated_at: Date,
//	  meta: {
//		    votes: Number,
//		  }
	},{collection:'resources'});

// Post Search Schema
const PostSearchSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    link:{
        type: String
    },
    author:{
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    category: {
        type: String
    },
    
    date:{
    	type: Number
    }
    },{collection:'forum'});


const Resource = module.exports = mongoose.model('Resource', ResourceSchema);


	//Find by Title
	module.exports.getResourceByTitle = function(title, callback) {
	 const query = {title:title}
	 Resource.find(query, callback);
	
	}
	
	//Find code
	module.exports.getResourceBycode = function(code, callback) {
	 const query = {code:code}
	 Resource.find(query, callback);
	}
	
	
	
	
	module.exports.addResource = function(newResource, callback,err) {
		if(err) throw err;
		newResource.save(callback);
	        
	   
	}





const ResourceSearch = module.exports = mongoose.model('ResourceSearch', PostSearchSchema);

module.exports.getResourceByFilter = function(query, callback) {
	ResourceSearch.find(query, callback);
   }






ResourceSchema.pre('save', function(next) {

		  var Resource = this;
		  // get the current date
		  var currentDate = new Date();

		  // change the updated_at field to current date
		  Resource.updated_at = currentDate;

		  // if created_at doesn't exist, add to that field
		  if (!Resource.created_at){
			  Resource.created_at = currentDate;
		  }
	  });
