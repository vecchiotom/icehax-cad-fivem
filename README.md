# IceHax's CAD/MDT for Fivem RP Communities

Hello folks! This is a fully ready-to-go C.A.D./M.D.T. system for anyone who wants to use it. it's meant to be used by RP Communities of FiveM, but anyone can use it ;)

##File Structure
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



There are two places where the images are placed:

1- under App/User/init.js
2- under Views, in all the .hbs files.

*let's see how to change the backgrounds*

1- To change the images in the **first place i mentioned** you have to edit that file. you will find scrolling, this:
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


**TO MODIFY THE IMAGES ON THE WHOLE SITE, JUST GO IN THE HBS FILES AND REPLACE ALL THE LINKS TO IMAGES THERE WITH YOUR PREFERRED ONES.**
