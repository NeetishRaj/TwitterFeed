const passport = require("passport");
const TwitterStrategy = require("passport-twitter");

const config = require("../config.js");
const User = require('../model/user-model.js');

passport.serializeUser(function (user, cb) {
    cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});

passport.use(new TwitterStrategy({
        consumerKey: config.twitter.consumerKey,
        consumerSecret: config.twitter.consumerSecret,
        callbackURL: config.twitter.callbackUrl
    },

    // Passport callback
    function (token, tokenSecret, profile, cb) {
        console.log("Passport callback fired", JSON.stringify(profile, null, 4));

        User.findOne({ twitterId: profile.id }, function (err, user) {
          return cb(err, user);
        });
    }
));