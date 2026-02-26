import { createUser } from './../model/user.service.js';
import passport from 'passport';

//register
const registerPage = (req, res) => res.status(200).render("register", {
    title: "Register",
    errors: req.query.errors
});
const register = (req, res) => {
    const { username, password, confirm } =  req.body;

    if (password === confirm) {
        createUser(username, password);
        res.redirect("/login");
    } else {
        res.redirect("/register?errors=Passwords do not match!")
    }
}

//login
const loginPage = (req, res) => res.status(200).render("login", {
    title: "Log In",
    errors: req.query.errors
});
const login = passport.authenticate("local", {
    successRedirect: "/user",
    failureRedirect: "/login?errors=Invalid Credentials"
});

//logout
const logout = (req, res) => {
    
}

//middleware to protect routes
const isLoggedIn = (req, res, next) => {
    if (req.user) {
        return next(); //move on to the nest middleware
    } else {
        res.redirect("/login");
    }
}

const hasRole = role => {
    
}


export default { registerPage, register, loginPage, login, logout, isLoggedIn, hasRole }