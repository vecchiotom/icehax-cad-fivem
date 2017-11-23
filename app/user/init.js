const passport = require('passport')
const bcrypt = require('bcrypt')
const salt = bcrypt.genSaltSync(10)
const config = require('.../config')

var html = ""
var MongoClient = require('mongodb').MongoClient;
var url = config.MongoStore.url;
var user = {}
var img= ""
var imgs=""
var lastid

function initUser (app) {
  app.get('/', renderWelcome)
  app.get('/profile', passport.authenticationMiddleware(), renderProfile)
  app.post('/login', passport.authenticate('local', {
    successRedirect: '/profile',
    failureRedirect: '/'
  }));
  app.get('/dispatchersmenu', passport.authenticationMiddleware(), renderDisp)
  app.get('/police', passport.authenticationMiddleware(), renderPol)
  app.get('/status', passport.authenticationMiddleware(), status)
  app.get('/callsign', passport.authenticationMiddleware(), callsign)
  app.post('/admin', passport.authenticationMiddleware(), admin)
  app.get('/addpolicerecord', passport.authenticationMiddleware(), addpolicerecord)
  app.get('/criminals', passport.authenticationMiddleware(), criminals)
  app.get('/searchid', passport.authenticationMiddleware(), searchcriminals)
  app.get('/getuserinfo', passport.authenticationMiddleware(), getuserinfo)
  app.get('/civilians', passport.authenticationMiddleware(), civilians)
  app.get('/modifyprofile', passport.authenticationMiddleware(), modifyprofile)
    app.post('/signup', function(req, res){
      MongoClient.connect(url, function(err, db) {
  if (err) res.send(err);


db.collection("user").findOne({username: req.body.username}, function(err, result) {
    if (err) throw err;
if (result) {

res.send('username already taken')

}else{
      var myobj = { username: req.body.username, password: bcrypt.hashSync(req.body.password, salt), id: 95, department:"civilian", status:"OFFLINE", callsign:"", admin:false,  discord: "to be set" };

db.collection("user").insertOne(myobj, function(err, result) {
    if (err) res.send(err);
    console.log("1 document inserted");
    db.close();
    res.redirect('/')
  });

}    
  });

      var myobj = { username: req.body.username, password: bcrypt.hashSync(req.body.password, salt), id: 95, department:"civilian", status:"OFFLINE", callsign:"", admin:false,  discord: "to be set" };

 
});

    });
  app.get('/register', signup)






}


function renderWelcome (req, res) {
  res.render('../views/login')
}
function criminals (req, res) {
  res.render('../views/criminals')
}

function renderProfile (req, res) {
  user={ username: req.body.username }
  res.render('../views/index', {
  
    user: req.body.username

  })

}
function renderDisp (req, res) {
if (req.user.department == "disp"){
  MongoClient.connect(url, function(err, db) {
  if (err) res.send(err);
   db.collection("user").find({}).toArray(function(err, result) { 
    if (err) res.send(err);
    console.log(result);
    for (var i = 0; i < result.length; i++) {
      if (result[i].status == "OFFLINE"){
          var back = "style='background-color:blue'"
      } else if (result[i].status == "ONLINE"){
        var back = "style='background-color:green'"
      } else if (result[i].status == "RESPONDING TO A CALL"){
        var back = "style='background-color:red'"
      }
      html = html + "<tr><td>"+ result[i].id +"</td><td>" + result[i].username + "</td><td>" + result[i].callsign +"</td><td>"+ result[i].discord + "</td><td "+ back +">"+result[i].status+"</td></tr>"

    }
    console.log(html)
 res.render('../views/dispatcher', {
    table: html
  });
 html=""
});
    db.close();
  
  });
} else {

  res.send("i'm sorry but you're not a dispatcher, go back to the <a href= '/'>Homepage</a>")

}
 
}

function renderPol (req, res) {

  MongoClient.connect(url, function(err, db) {
  if (err) res.send(err);
  db.collection("user").findOne({username: req.user.username}, function(err, result) {
    if (err) res.send(err);
    console.log(result)
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
    } else if (result.department == "hwy"){
      img='<img src = "https://www.flhsmv.gov/wp-content/uploads/fhppatch-298x300.jpg" class="media-object" style="width:60px">'
      imgs = '<div class="panel-body" style="background-image:url(https://c1.staticflickr.com/9/8343/8211766763_00fd1e0780_b.jpg);background-position: 50% 75%;  background-size: cover;">'
      res.render('../views/police',{
    username: req.user.username,
    img:img,
    discord: req.user.discord,
    status: req.user.status,
    department: "Florida Highway Patrol",
    callsign: req.user.callsign,
    imgs: imgs

  })
    } else if (result.department == "sheriff"){
      img='<img src = "https://media.glassdoor.com/sqll/208868/broward-county-sheriff-florida-squarelogo.png" class="media-object" style="width:60px">'
      imgs = '<div class="panel-body" style="background-image:url(https://c1.staticflickr.com/9/8752/16267173064_53a49b472b_b.jpg);background-position: 50% 50%;  background-size: cover;">'
      res.render('../views/police',{
    username: req.user.username,
    img:img,
    discord: req.user.discord,
    status: req.user.status,
    department: 'Broward County Sheriff Department',
    callsign: req.user.callsign,
    imgs: imgs

  })
    } else if (result.department == "pd"){
      img='<img src = "http://imageserv11.team-logic.com/store-logic/products/222/6/8/9/5/6320.jpg" class="media-object" style="width:60px">'
      imgs = '<div class="panel-body" style="background-image:url(https://farm8.static.flickr.com/7020/6811891475_e064b439a8_b.jpg);background-position: 50% 50%;  background-size: cover;">'
      res.render('../views/police',{
    username: req.user.username,
    img:img,
    discord: req.user.discord,
    status: req.user.status,
    department: 'Miami-Dade Police Department',
    callsign: req.user.callsign,
    imgs: imgs

  })
    } else {
      res.send("civilians can't access the police menu.")
    }
    db.close();
  });
});
  
}

function status(req, res){
  var newvalues = { $set: { status: req.query.status } };
  MongoClient.connect(url, function(err, db) {
  if (err) res.send(err);
  var newvalues = { $set: { status: req.query.status } };
  db.collection("user").updateOne(req.user, newvalues, function(err, res) {
    if (err) res.send(err);
    console.log("1 document updated");
    db.close();
  });
});
  console.log(req.query.status);
  res.redirect('/police?s=y')
}
function callsign(req, res){
  
  MongoClient.connect(url, function(err, db) {
  if (err) res.send(err);
  if (req.query.heavy){
  var newvalues2 = { $set: { callsign: req.query.callsign + " " + req.query.heavy } };
} else if (!req.query.heavy){
  var newvalues2 = { $set: { callsign: req.query.callsign } };
}
  db.collection("user").updateOne(req.user, newvalues2, function(err, res) {
    if (err) res.send(err);
    console.log("1 document updated");
    db.close();
  });
});
  console.log(req.query.status);
  res.redirect('/police?s=y')
}
function admin(req,res){

  if (req.body.username == "floridalawenforcement" && req.body.password == "admin" && req.user.admin == true) {
    res.render('../views/admin');


  } else {

    res.send('WTF BRO WHY DO YA WANT TO HACK ME, IT IS NOT FUNNY! btw, i got your ip ;)' + req.headers['x-forwarded-for'] || req.connection.remoteAddress )
  }
  
}
function searchcriminals(req, res){
  if (req.user.department != "civilian"){


MongoClient.connect(url, function(err, db) {
  if (err) res.send(err);
  db.collection("user").find({username: req.query.username }).toArray(function(err, result) {
    var tables = ""
    if (err) res.send(err);

    for (var i = 0; i < result.length; i++) {
      tables = tables + "<tr><td id='user'>"+ result[i].username +"</td><td>"+ result[i].discord +"</td><td>"+ result[i].policerecords.split(" | ").length +"</td><td><input type='button' onclick='searchid()' value='Get User's infos></td></tr>"
    }
      res.render('../views/searchid', {
  
    table: tables

  })
      tables =""

    db.close();
  });
});
} else {res.send('403-forbidden')}


}
function addpolicerecord(req, response){
  var policerecords
MongoClient.connect(url, function(err, db) {
  if (err) res.send(err);
  db.collection("user").findOne({username: req.query.username}, function(err, result) {
    if (err) res.send(err);
    if(result.policerecords){

      policerecords = result.policerecords
    } else if (!result.policerecords){
      policerecords = ""
    }

    var newvalues = { $set: { policerecords: policerecords + " | " + req.query.record } };

  db.collection("user").updateOne({username: req.query.username}, newvalues, function(err, res) {
    if (err) res.send(err);
    console.log("1 record inserted");
response.redirect('/criminals');
    db.close();
  });
    
  });
  
});

}
function getuserinfo(req, res){
  if (req.user.department != "civilian"){
MongoClient.connect(url, function(err, db) {
 db.collection("user").findOne({username: req.query.username}, function(err, result) {
var records = result.policerecords.split(' | ')
var recordstext = ""
for (var i = 0; i < records.length; i++) {
  if (records[i] ==""){

  } else if (records != "") {


    recordstext = recordstext + ", " + records[i]

  } else if (!records){
    recordstext = "<strong>NO FILES ON RECORD</strong>"


  }



  
}

res.render('../views/getuserinfo', {
  
    username: result.username,
    id: result.licenseID,
    status: result.status,
    vehicle: result.vehicle,
    records: recordstext,
    discord: result.discord,
    plate: result.plate


  })


 })

})
} else {res.send('403 - forbidden')}
}
function modifyprofile(req, res) {
  MongoClient.connect(url, function(err, db) {
  if (err) res.send(err);
  var newvalues = { $set: req.query };;
  db.collection("user").updateOne(req.user, newvalues, function(err, resu) {
    if (err) res.send(err);
    console.log("1 user updated");
    res.redirect('/civilians')
    db.close();
  });
});
}
function civilians(req, res) {
  res.render('../views/civilians', {
  
    user: req.body.username

  })
}

function signup(req, res) {
  res.render('../views/signup')
}
module.exports = initUser
