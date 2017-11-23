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
var url = "mongodb://XXX:XXX@XXX.XXX:XXX/XXX";

var ObjectId = require('mongodb').ObjectID;







 


passport.serializeUser(function (user, done) {
  console.log(user._id.toString())
  done(null, user._id.toString()); 
})

passport.deserializeUser(function (username, done) {
    MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("user").findOne({_id: new ObjectId(username)}, function(err, user) {
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
	    console.log('password is invalid')
            return done(null, false)
          }
	  console.log('password is valid!!')
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
