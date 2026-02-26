import { Router } from 'express';
import pageCtl from '../controllers/pageController.js';
import authCtl from '../controllers/authController.js';

const authRouter = Router();

//access pages
authRouter.get('/admin', pageCtl.adminPage);  //displays admin (restricted) content
authRouter.get('/user', pageCtl.userPage);    //displays user content

//register
authRouter.get('/register', authCtl.registerPage);  //view register page
authRouter.post('/register', authCtl.register)      //register a new user (form submission)

//login
authRouter.get(['/', '/login'], authCtl.loginPage);  //show login page
authRouter.post('/login', authCtl.login)             //log in a user (form submission)

//logout
authRouter.post('/logout', authCtl.logout)  //log out a user

export default authRouter;