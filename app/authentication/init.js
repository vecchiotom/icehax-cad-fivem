const passport = require('passport')
const bcrypt = require('bcrypt')
const LocalStrategy = require('passport-local').Strategy

const authenticationMiddleware = require('./middleware')

// Generate Password
const saltRounds = 10
const myPlaintextPassword = 'my-password'
const salt = bcrypt.genSaltSync(saltRounds)
const passwordHash = bcrypt.hashSync(myPlaintextPassword, salt)

var user
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://icehax:tommaso.celano01@ds159344.mlab.com:59344/flecad";



function findUser (username, callback) {
 

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("customers").find().sort({username:username}, function(error, result) { 
    if (err) throw err;
    console.log(result);
    user= result
    if (!result.length) {
       return callback(null)
    } else if (result.length = 1) {
      return callback(null, user[0])
    }
    db.close();
  });
});







 
}

passport.serializeUser(function (user, done) {
  console.log(user.id)
  done(null, user.id); 
})

passport.deserializeUser(function (username, done) {
    MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("user").findOne({id:username}, function(err, user) {
    if (err) throw err;
    done(null, user);
    db.close();
  });
});

})


function initPassport () {
  passport.use(new LocalStrategy(
    (username, password, done) => {

      MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("user").findOne({username:username}, function(err, user) {
    if (err) throw err;
    if (err) {
          return done(err)
          console.log(err)
        }

        // User not found
        if (!user) {
          console.log('User not found')
          return done(null, false)
        }

        // Always use hashed passwords and fixed time comparison
        bcrypt.compare(password, user.password, (err, isValid) => {
          if (err) {
            throw err
            return done(err)
          }
          if (!isValid) {
            return done(null, false)
          }
          return done(null, user)
        })
    console.log(user);
    db.close();
  });
});
    })    
     
    )
  

  passport.authenticationMiddleware = authenticationMiddleware
}

module.exports = initPassport
