const passport = require('passport')
var html = ""
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://icehax:tommaso.celano01@ds159344.mlab.com:59344/flecad";
var user = {}
var img= ""
var imgs=""

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


}


function renderWelcome (req, res) {
  res.render('../views/login')
}

function renderProfile (req, res) {
  user={ username: req.body.username }
  res.render('../views/index', {
  
    user: req.body.username

  })

}
function renderDisp (req, res) {

  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
   db.collection("user").find({}).toArray(function(err, result) { 
    if (err) throw err;
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
 
}

function renderPol (req, res) {

  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("user").findOne({username: req.user.username}, function(err, result) {
    if (err) throw err;
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
    } 
    db.close();
  });
});
  
}

function status(req, res){
  var newvalues = { $set: { status: req.query.status } };
  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var newvalues = { $set: { status: req.query.status } };
  db.collection("user").updateOne(req.user, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});
  console.log(req.query.status);
  res.redirect('/police?s=y')
}
function callsign(req, res){
  
  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  if (req.query.heavy){
  var newvalues2 = { $set: { callsign: req.query.callsign + " " + req.query.heavy } };
} else if (!req.query.heavy){
  var newvalues2 = { $set: { callsign: req.query.callsign } };
}
  db.collection("user").updateOne(req.user, newvalues2, function(err, res) {
    if (err) throw err;
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
module.exports = initUser
