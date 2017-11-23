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
|   `-- index.js \\ do not care about this
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

##### Images
There are two places where the images are placed:

1- under App/User/init.js
2- under Views, in all the .hbs files.

*let's see how to change the backgrounds*

1- To change the images in the **first place i mentioned** you have to edit the init.js file. in there you will find scrolling, this:
```
if (result.department == "usaf"){
      img='<img src = "https://upload.wikimedia.org/wikipedia/commons/6/69/USAF_logo.png" class="media-object" style="width:60px">'
      imgs = '<div class="panel-body" style="background-image:url(http://eskipaper.com/images/usaf-wallpaper-2.jpg);background-position: center; background-size: cover;">'
      res.render('../views/police',{
    username: req.user.username,
    img:img,
    discord: req.user.discord,
    status: req.user.status,
    department: "United States Air Force",
    callsign: req.user.callsign,
    imgs: imgs

  })
```
repeated multiple times.

i'm sure you can notice there are **2 links to two images in there** every copy of that snippet of code has those links, to edit  the images, to match your departments, just change the links to:

**the first link will be the LOGO OF THE DEPARTMENT**
**the second, THE BACKGROUND FOR THAT DEPARTMENT.**

*NOTE THAT ALL OF THOSE LINKS, WILL REPLACE THE IMAGES THAT EVERY DEPT WILL BE ABLE TO SEE WHEN THEY GO ON THEIR PROFILE PAGE.*


2- **the second place where images are placed, is the Views folder** to edit those images, which are:

- all the backgrounds
- all the img tags in the html

You need to know at least the basics of HTML and CSS.
these images are located all over **ALL OF THE .HBS FILES** those files are normal html files, with the exception that the server can give them some infos  to display. all the infos that will be displayed are marked with **"{{{something}}}"**
##### The Text
changing the text is relatively simple, again you need to know the basis of html, but it's not a hard work to do.

most of the text is stored in the HBS files, but other text is stored in the **App/User/init.js** file. the text in there is more precisely everything reguarding the departments names.

## Setting up and starting the CAD

#### Windows

###### Pre-requirements
- Node.js([Download](https://nodejs.org/))
- MongoDB Server ([Free hosting](https://mlab.com/) or [Download Server](https://www.mongodb.com/))
###### Installing the dependecies:
1- Open up the CMD
2- CD to the folder where you downloaded the CAD
3- enter "```npm install```"
4- wait for it to install all the dependecies
###### Starting The CAD
1- on he same CMD where you've just installed the dependecies, type ```node index.js```
2- on the console should appear a message stating the server is listening on port 3000(default port)
3- To test it out, Open a Web Browser and browse to: http://localhost:3000

#### Linux
###### Pre-requirements
- Node.js([Download](https://nodejs.org/) or use ```sudo apt-get install nodejs```)
- MongoDB Server ([Free hosting](https://mlab.com/) or [Download Server](https://www.mongodb.com/) or use ```sudo apt-get install mongodb```)
