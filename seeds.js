var mongoose 	= require("mongoose");
var Campground 	= require("./models/campground.js");
var Comment 	= require("./models/comment.js");

var data = [
	{
		name : "Prairie Creek Redwoods State Park" ,
		image : "https://www.parks.ca.gov/pages/415/images/A-sea-of-ferns.jpg" ,
		description : "Prairie Creek Redwoods State Park is a state park, located in Humboldt County, 						 California, near the town of Orick and 50 miles north of Eureka. "
	},
	{
		name : "Kheerganga" ,
		image : "https://st3.depositphotos.com/4278755/19100/i/1600/depositphotos_191004830-stock-					 photo-camping-in-himalayan-mountains-nepal.jpg" ,
		description :"Popular for the hot springs and beautiful perspectives on the Himalayan 							  Mountains, Kheerganga is lying in Kullu region of Himachal Pradesh & is among one 					  of the most popular tourist places in Himachal. "
	},
	{
		name : "Cope Saddle Camping Area" , 
		image : "https://campsitedirect.com/wp-content/uploads/2019/02/pexels-photo-1687845-1.jpeg" ,
		description : "You'll find Cope Saddle Hut just off the High Plains Creek high up in the 						   mountains in east Victoria. The camp spot is high up looking over the Alps and 						 is gorgeous for sunrise, and there is a pit toilet which is very convenient make 						 sure you bring toilet paper."
	}
];

//seedDB function is called everytime we execute app.js
//We aee seeding into the database using this function
function seedDB(){
	//Remove all campgrounds
	Campground.remove({}, function(err){
	// 	if(err){
	// 		console.log(err);
	// 		} 
	// 	console.log("Removed campgrounds");
	// 	});		
	// //Add a few campgrounds
	// data.forEach(function(seed){
	// 	Campground.create(seed, function(err, newCampground){
	// 		if(err){
	// 			console.log(err);
	// 		} else{
	// 			console.log("Created new campground");
	// 			//Create a comment
	// 			Comment.create(
	// 				{
	// 					text : "This place is great. I love it!",
	// 					author : "Eshu"
	// 				}, function(err, comment){
	// 					if(err){
	// 						console.log(err);
	// 					} else {
	// 						newCampground.comments.push(comment);
	// 						newCampground.save();
	// 						console.log("Comment created and saved!");
	// 					}
	// 				});
	// 		}
	// 	});
	});
}	
//Just return the seedDB function here and dont actually execute it, execution happens in app.js where its required in the begining. 
module.exports = seedDB;