const passport = require('passport');

module.exports = app => {
    //create a route handler and associate it with a given route
    app.get(
        '/auth/google',
        passport.authenticate('google', {//specifies to use google passport authentication
          scope: ['profile', 'email'] //specifies what access we want to have inside the user's profile
        })
      );
    
    app.get('/auth/google/callback', passport.authenticate('google')); 
}


