import express from "express";
import http from "http";
import cors from "cors";
import { json, urlencoded } from "body-parser";
import fileUpload from "express-fileupload";
import session from 'express-session';
import passport from './utils/passport';



import routes from "./routes";

const app = express();
const server = http.createServer(app);

app.use(cors({ origin: "*" }));
app.use(fileUpload({}));
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(routes);
app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
app.get('/auth/instagram', passport.authenticate('instagram'));
app.get(
	'/auth/instagram/callback',
	passport.authenticate('instagram', {
		successRedirect: '/',
		failureRedirect: '/login',
	}),
);

app.get('/', (req, res) => {
	if (req.isAuthenticated()) {
		res.send('Authenticated with Instagram');
	} else {
		res.redirect('/login');
	}
});


process.on("SIGINT", function () {
    console.log("\nGracefully shutting down from SIGINT (Ctrl-C)");

    process.exit(0);
});

export default server;
