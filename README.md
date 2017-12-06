# IceHax's CAD/MDT for Fivem RP Communities

Hello folks! This is a fully ready-to-go C.A.D./M.D.T. system for anyone who wants to use it. it's meant to be used by RP Communities of FiveM, but anyone can use it ;)

## File Structure
```
|-- app \\ core directory of the file, contains the routes and the authentication.
|   |-- authentication \\ authentication strategy (using mongodb by default)
|   |   |-- index.js
|   |   |-- init.js
|   |   `-- middleware.js \\ middleware that prevents the user from entering forbidden pages
|   |-- index.js
|   |-- layout.hbs
|   |-- note \\ do not care about this
|   |   |-- index.js
|   |   |-- init.js
|   |   `-- overview.hbs
|   `-- user \\ the actual core of the cad. contains the router and all the server side logic of the cad
|       |-- index.js
|       |-- init.js
|       |-- profile.hbs
|       `-- welcome.hbs
|-- config
|   `-- index.js \\ main config file
|-- css \\ bootstrap css files
|   |-- bootstrap-grid.css
|   |-- bootstrap-grid.css.map
|   |-- bootstrap-grid.min.css
|   |-- bootstrap-grid.min.css.map
|   |-- bootstrap-reboot.css
|   |-- bootstrap-reboot.css.map
|   |-- bootstrap-reboot.min.css
|   |-- bootstrap-reboot.min.css.map
|   |-- bootstrap.css
|   |-- bootstrap.css.map
|   |-- bootstrap.min.css
|   `-- bootstrap.min.css.map
|-- index.js
|-- js \\ bootstrap js files
|   |-- bootstrap.js
|   `-- bootstrap.min.js
|-- package-lock.json
|-- package.json
`-- views \\ all of the web pages that will be rendered
    |-- admin.hbs
    |-- civilians.hbs
    |-- criminals.hbs
    |-- dispatcher.hbs
    |-- getuserinfo.hbs
    |-- index.hbs
    |-- login.hbs
    |-- police.hbs
    |-- searchid.hbs
    `-- signup.hbs
```


## Restyling the CAD to match your server's Theme
Well, it was pretty difficult to restyle it, wasn't it? with v0.0.4, no more headaches trying to restyle it, everything can be set in the config files!!!
## Setting up and starting the CAD
**complete setup tutorial**


[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/GIz83FnkWmA/0.jpg)](https://www.youtube.com/watch?v=GIz83FnkWmA)

#### Windows

###### Pre-requirements
- Node.js([Download](https://nodejs.org/)) **version 8.9.1 or older**
- MongoDB Server ([Free hosting](https://mlab.com/) or [Download Server](https://www.mongodb.com/))
###### Installing the dependecies:
- Open up the CMD
- CD to the folder where you downloaded the CAD
- enter "```npm install```"
- wait for it to install all the dependencies
###### Setting Up MONGODB
once you've installed and started your mongodb, create the following collections:

- "user" collection
- "sessions" collection

**Remeber to set your mongodb auth url in the config file, located here: configuration/index.js**

###### Starting The CAD
- on he same CMD where you've just installed the dependecies, type ```node index.js```
- on the console should appear a message stating the server is listening on port 3000(default port)
- To test it out, Open a Web Browser and browse to: http://localhost:3000

#### Linux
###### Pre-requirements
- Node.js([Download](https://nodejs.org/) or use ```sudo apt-get install nodejs```) **version 8.9.1 or older**
- MongoDB Server ([Free hosting](https://mlab.com/) or [Download Server](https://www.mongodb.com/) or use ```sudo apt-get install mongodb```)
###### Installing the dependecies:
- Open up the Terminal
- CD to the folder where you downloaded the CAD
- enter "```npm install```"
- wait for it to install all the dependecies
###### Setting Up MONGODB
once you've installed and started your mongod, create the following collections:

- "user" collection
- "sessions" collection

**Remeber to set your mongodb auth url in the config file, located here: configuration/index.js**

###### Starting The CAD
- on he same terminal window where you've just installed the dependecies, type ```node index.js```
- on the console should appear a message stating the server is listening on port 3000(default port)
- To test it out, Open a Web Browser and browse to: http://localhost:3000 if the server is a vps, browse to http://theipofyourserver:3000





## Features Overview

#### Main page
![alt text](https://i.imgur.com/E6nO1Oz.jpg)


This, Is The main page of the C.A.D. Let's now take a look at the features and everything that is on this page:

[watch this video](https://i.gyazo.com/92fff03e9eb9810299f4f18ac8467fc0.mp4)

The Background, Has a slideshow! pretty nice Huh? :)

![alt text](https://cdn.discordapp.com/attachments/329962830834958336/383282463696224276/image.png)

These Two buttons link to my community's discord and to my github profile

![alt text](https://cdn.discordapp.com/attachments/329962830834958336/383282853523226625/image.png)

This Button is a WORK IN PROGRESS, It doesnt work yet.

![alt-text](https://cdn.discordapp.com/attachments/329962830834958336/383283182369505282/image.png)
this is what you wanna look at to browse in the CAD

The menu is composed by the following sections:

Home
Criminal Database
Dispatcher Menu
Police Officers
Run Plate and ID
Civilians Menu
Admin Login


**Home**
the home page

**Criminal Database**
Only officers have access to this, basically the place you go when you want to search up a civilian.

**Dispatcher Menu**
Only dispatch has access to this, it lets you see online cops and their status

**Police Officers**
Only officers have access to this, There they can set everything regarding their profile, for military rp servers, i've also included a "Append Heavy to CallSign" feature

**Run Plate And ID**
It redirects to the same page as Criminal Database

**Civilians Menu** 
Everyone has access to this, you can set your id number, plate vehicle and much more.

**Admin Login**
WIP, SEE BELOW ON HOW TO APPROVE POLICE OFFICERS, EDIT USERS ETC...



### How To edit a user and How Does the users system work?

Let's answer this question:

- all the users are stored in the MongoDB Database

To edit them, do the following:
- connect to your mongodb using a client [Recommended](https://robomongo.org/)
- go in the user Collection
- right click on a user and edit the document
- to set the user as a police officer, set his "department" field as: **pd** for Police Dept or **sheriff** For Sheriff's office or **hwy** For Highway Patrol or **disp** for Dispatcher or **ems** for Fire Rescue.
- To set anything else, i've made all the other fields pretty self explanatory, but ask me on Fivem's Forum if you have any doubts.
### Registering new users

The registration page exists, put it's not listed anywhere in the cad.

this is because it's meant to be given to the users by you. the link will be:

http://yourdomainorip:yourport/register

# THANK YOU FOR USING MY CAD! AND REMEMBER THAT THIS IS AN ALPHA, SO MANY NEW FEATURES WILL BE ADDED IN THE FUTURE!!!
