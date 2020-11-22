var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
var middleware = require("../middleware"); //if we require the name of the directory, it will automatically require index file. index.js is a special name

//INDEX - show all campgrounds
router.get("/", function(req, res){	
	//res.render("campgrounds", {campgrounds:campgrounds});
	
	Campground.find({}, function(err, allCampgrounds){
		if(err){
			console.log(err);
		}
		else{
			res.render("campgrounds/index", {campgrounds:allCampgrounds, currentUser : req.user});
		}
	});
	
});

//CREATE
router.post("/", middleware.isLoggedIn, function(req, res){
	//get data from form and add to campgrounds array
	
	//Retrieve name and image from request body
	var name = req.body.name;
	var image = req.body.image;
	var description = req.body.description;
	var author = {
		id : req.user._id,
		username : req.user.username
	};
	
	//Create a new campground object 
	var newCampground = {name:name, image:image, description:description, author:author};
	//old method using arrays ->campgrounds.push(newCampground);
	
	//new method using Mongo is below
	Campground.create(newCampground, function(err, newlyCreated){
		if(err){
			console.log(err)
		} else {
			res.redirect("campgrounds");
		}
	})
});


//NEW - show form to submit new campground
router.get("/new", middleware.isLoggedIn, function(req, res){
	res.render("campgrounds/new")
});

//SHOW - show more info about one campground
// When you retrieve the campgrounds, you will see campgrounds contains comments which is an array. Therefore, you''ll have to use .populate.exec method to load comments
router.get("/:id", function(req, res){
	//find campground with provided ID
	Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
		if(err){
			console.log(err);
		}else{
			//console.log(foundCampground);
			res.render("campgrounds/show",{campground: foundCampground});
		}
	});
	//render show template with that campground
	
});

// EDIT CAMPGROUND ROUTE
router.get("/:id/edit", middleware.checkCampgroundOwnership,function(req, res){
	Campground.findById(req.params.id, function(err, foundCampground){
		res.render("campgrounds/edit", {campground:foundCampground});
		});
});


// UPDATE CAMPGROUND ROUTE
router.put("/:id", middleware.checkCampgroundOwnership , function(req, res){
	Campground.findByIdAndUpdate(req.params.id, req.body.campground ,function(err, updatedCampground){
		if(err){
			res.redirect("/campgrounds");
		} else{
			res.redirect("/campgrounds/" + req.params.id );
		}
	});
});

// DESTROY CAMPGROUND ROUTE
router.delete("/:id",middleware.checkCampgroundOwnership ,function(req, res){
	Campground.findByIdAndRemove(req.params.id, function(err){
		if(err){
			res.redirect("/campgrounds");
		}else{
			res.redirect("/campgrounds");
		}
	})
});

module.exports = router;