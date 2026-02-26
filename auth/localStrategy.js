//add imports to passport + passport-local
import passport from 'passport';
import Strategy from 'passport-local';
import { findUserById, findUserByUsername, validatePassword } from '../model/user.service.js';

//serializing user into session data (user -> userId)
passport.serializeUser((user, done) => {
    console.log(`Saving ${user.userId} to session`);
    done(null, user.userId);
});
 
//deserialize user from session data (userId -> user)
passport.deserializeUser( async (userId, done) =>{
    console.log(`Reading ${userId} from session`);
    const user = await findUserById(userId);
    if (!user) {
        return done(null, false);
    }

    else {
        return done(null, user);
    }
});

//add local strategy middleware provided by passport.js
passport.use(new Strategy( async (username, password, done) => {
    //match the user
    const user = await findUserByUsername(username);
    if (!user) {
        return done(null, false);
    }
    const matched = await validatePassword(password, user.password);
    if (!matched) return done(null, false);

    return 
}))

