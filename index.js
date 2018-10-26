const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');

const config = require('./config.js');
const authRoutes = require("./routes/auth-routes.js");
const passportTwitter = require("./services/passport-twitter.js");

const app = express();

const port = config.httpPort;
const dbUri = `mongodb://${config.db.username}:${config.db.password}@ds141813.mlab.com:41813/twitterfeed`;

// Connect to MongoDB
mongoose.connect(dbUri,{ useNewUrlParser: true }, () => {
    console.log("Connected to MongoDB");
})

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    secret: config.sessionSecret,
    resave: true,
    saveUninitialized: true
}));

/*
 * Initialize Passport and restore authentication state, if any, 
 * from the session.
 */
app.use(passport.initialize());
app.use(passport.session());

// Set up the routes
app.use("/auth", authRoutes);


app.listen(port, () => {
    console.log(`Listening on ${port} in ${config.envName} environment`);
});