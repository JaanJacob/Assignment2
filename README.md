# Assignment2
Assignment 2 of Software Frameworks. 


## __Documentation – Git__
GitHub is used for version control in this project. Blocks of code are regularly submitted to GitHub as soon as they are in a working order. Every commit is made with an appropriate comment to understand what that commit is about, for future reference. The structure used here is very simple, ‘main’ is the branch and all the commits are pushed into it. The need for another branch didn’t occur in this project. 
The url of the GitHub submission : https://github.com/JaanJacob/Assignment2.git


## __Documentation - Data Structures__
The Data structure is very straight forward. The data is kept in mongodb with three collections, one for the user data, one for the groups and channel data and one for all the chat messages. The client is making a call to the node server in order to retrieve the particular information from the database. 

name | email | id | role
-----|-------|----|-----
super |	super@gmail.com |	1 |	superAdmin
groupAD |	groupAD@gmail.com |	2 |	groupAdmin
groupAS |	groupAS@gmail.com |	3 |	groupAssis
aa |	aa@gmail.com |	4 |	user
bb |	bb@gmail.com |	5 |	user
cc |	cc@gmail.com |	6 |	user
dd |	dd@gmail.com |	7 |	user
ee |	ee@gmail.com |	8 |	user

## __Documentation - REST API__
The angular application is communicating with node through routes, in order to retrieve and process data. 

### USER related routes: 
1)	'/api/allUsers' route retrieves all the users from the user collection, this is to be then showed when a super or group admin log in. 
2)	 '/api/checkLogin' route checks if the uer trying to login is valid user by taking the user entered values from the form and send it to the node server as parameters along with this route and then the server checks in the user collection and returns true if this user is found in the database.
3)	'/api/addUser' route is for adding a user to the database. This route also take two parameter, name and email and passes it to the server to add it to the user collection as a new user. 
4)	'/api/deleteUser' route is for deleting a user from the user collection. This route takes a name as parameter and then the server checks if the name exists in the database and if it does, it deletes the user and sends a success message. 

### Group related routes:
1)	'/api/allGroups' route is to get all the groups and related channels and to display in the account page. 
2)	The delete and add route for groups hasn’t been completed.    


## __Documentation - Angular Architecture__
The angular architecture is very basic with three components, two services, and a node server. The three components are login component, Account component and chat component.    
Login component gets view first as the app launches, It shows a login form which take in a user name and password which is then passed to the server via routers for validation. If the validation is a successes then the login page displays a ‘Go to account’ button for all users, but for super admin and group admin the page lists all the users and a form to add or delete a user.     
Then the Account page is loaded with all the groups that the user is a part of and all the channels in that particular group.  This group has a form with take a group name and adds it to the group list.    
The chat component loads a simple chat session which take a message and views it in the page.    
Two services have been used, one for socket and one for remembering login success so that all the session which requires logged in in order to be viewed can be displayed (eg: logout button). 



