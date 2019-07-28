# burger3
Created by: Reginald D. Thorpe Sr.

Date: July 29, 2019

Reason: GWU Boot camp Homework assignment, week 8.

Purpose: Node Express Handlebars: Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.
	      
 - Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be 

devoured.

 - Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page.

 - The app will store every burger in a database, whether devoured or not.

Run the app: 

App Setup
1.) I created a GutHub repo called burger and clone it to my computer.

2.) I then ran npm init from the command line to make a package.json file.

3.) Next, I installed the Express npm package by typing the command mpm install express from the   

      command line.
      
4.) Then I created a server.js file.

5.) Next I installed the Handlebars npm package from the command line using the command: npm install 

      express-handlebars.
      
6.) Then I installed MySQl from the command line using the command npm install mysql.

7.) Finally, I setup the directory structure and added the appropriate empty files in the required 
     directories.
     
.

├── config


│   ├── connection.js


│   └── orm.js

│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars

DB Setup
Inside the directory folder db, I populated the Schema.SQL file with the creation of the database and table.  I also populate the seeds.sql file with 3 insert statements to add 3 initial records. I then ran these two files files in mysql workbench.







 






Config Setup


Inside your burger directory, create a folder named config.
Create a connection.js file inside config directory.



Inside the connection.js file, setup the code to connect Node to MySQL.
Export the connection.



Create an orm.js file inside config directory.



Import (require) connection.js into orm.js

In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.


selectAll()
insertOne()
updateOne()


Export the ORM object in module.exports.



Model setup



Inside your burger directory, create a folder named models.


In models, make a burger.js file.
Inside burger.js, import orm.js into burger.js

Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
Export at the end of the burger.js file.





Controller setup


Inside your burger directory, create a folder named controllers.
In controllers, create the burgers_controller.js file.
Inside the burgers_controller.js file, import the following:



Express
burger.js



Create the router for the app, and export the router at the end of your file.



View setup


Inside your burger directory, create a folder named views.



Create the index.handlebars file inside views directory.

Create the layouts directory inside views directory.


Create the main.handlebars file inside layouts directory.
Setup the main.handlebars file so it's able to be used by Handlebars.
Setup the index.handlebars to have the template that Handlebars can render onto.
Create a button in index.handlebars that will submit the 
