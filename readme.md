# Show Page
* Review the RESTful routes
* Add description to photobook model
* Show db.collection.drop()
* Add a show route/template

# Refactor mongoose code
* Create a models directory
* Use module.exports
* Require everything correctly

# Add Seeds file
* Add a seeds.js file
* Run the seeds file everytime server starts

# Add a Comment models
* Make all errors go away
* Display comments on photobook show page

# Comment New/Create
* Discuss nested Routes
* Add the comment new and create routes
* Add the new comment form

RESTFUL ROUTES

name 	url 				verb 	desc.
INDEX   /memories			GET		Display all memories
NEW 	/memories/new		GET		Displays forms to make a new entries
CREATE	/memory				POST	Add a new memory
SHOW    /memory/:id			GET		Shows info about one memory

Comment Routes
name 	url 							verb 	
NEW 	/memory/:id/memories/new  		GET		
CREATE	/memory/:id/comments		POST	

## Style Show Page
* Add sidebar to show page
* Display comments nicely

## Finish Styling Show Page
* Add public directory
* Add custom stylesheet

## Auth Pt.1 - Add User models
* Install all packages needed for auth
* Define User Model

## Auth Pt.2 - Register
* Configure Passport
* Add register routes
* Add register template

## Auth Pt.3 - Login
* Add login routes
* Add login template

## Auth Pt.4 - Logout/Navbar
* Add logout Route
* Prevent user from adding a comment if not signed in
* Show/hide auth links correctly

## Auth Pt.5 - Show/Hide Links
* Show/hide auth links in navbar correctly

## Refactor Routes
* Use Express router to reorganize all routes

## Users + Comments
* Associate users and comments
* Save authors name to a comment automatically

## Users + Memories
* Prevent an unauthenticated user from creating a memory
* Save username+id to newly created memory

# Editing Memories
* Add Method-Override
* Add Edit Route for Memories
* Add Link to Edit Page
* Add Update Route

# Deleting Memories
* Add Destroy Route
* Add Delete button

# Authorization
* User can only eidt his/her memories
* User can only delete his/her memories
* Hide/Show edit and delete buttons

# Editing Comments
* Add Edit Route for comments
* Add Edit button
* Add update route

/memories/:id/edit
/memories/:id/comments/:comment_id/edit

# Deleting Comments
* Add Destroy router
* Add Delete button

Memory Destroy Route : /memories/:id
Comment Destroy Route : /memories/:id/comments/:comment_id

# Authorization Part2: Comments
* User can only edit his/her comments
* User can only delete his/her comments
* Hide/Show edit and delete buttons
* Refactor Middleware
