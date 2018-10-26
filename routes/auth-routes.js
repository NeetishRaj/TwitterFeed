const router = require("express").Router();
const passport = require("passport");

// Auth login route
router.get("/login", (req, res) => {
    res.send("LOGIN PAGE");
});

// Auth logout route
router.get("/logout", (req, res) => {
    res.send("LOGout PAGE");
});


router.get("/twitter", passport.authenticate("twitter", { 
    failureRedirect: '/login',
    //@TODO: Add the scope for the twitter data we want
    scope:[]
}));

router.get("/twitter/callback", passport.authenticate("twitter"), (req, res) => {
    res.send("Redirect PAGE");
});


module.exports = router;