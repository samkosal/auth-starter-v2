
//register
const registerPage = (req, res) => res.status(200).render("register", {
    title: "Register",
    errors: req.query.errors
});
const register = (req, res) => {
    
}

//login
const loginPage = (req, res) => res.status(200).render("login", {
    title: "Log In",
    errors: req.query.errors
});
const login = (req, res) => {}

//logout
const logout = (req, res) => {
    
}

//middleware to protect routes
const isLoggedIn = (req, res, next) => {
    
}

const hasRole = role => {
    
}


export default { registerPage, register, loginPage, login, logout, isLoggedIn, hasRole }