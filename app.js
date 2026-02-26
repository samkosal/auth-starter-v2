import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import router from './routes/router.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

//view engine
app.set('views', 'views');
app.set('view engine', 'ejs');

//default middleware
app.use(express.json());
app.use(cookieParser());
app.use(session({
    secret: "e~IZ9|)Aw2E`26u1'I<cRt=g,?HQrZ",
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 30 * 60 * 1000
    }
}))
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

//configure passport...

//load routers
app.use('/', router);

//error handling
app.use((err, req, res, next) => {
    const status = err.status || 500; 
    const message = err.message || "Unknown server error!";

    res.status(200).render('error', {
        status,
        message
    })
})

export default app;