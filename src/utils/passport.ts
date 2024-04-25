import passport from 'passport';
import { Strategy as InstagramStrategy } from 'passport-instagram';
import { SocialMedia } from "../domain/entities/Contacts" 
import { configurations } from '../config/index';
const PORT = configurations.application.port || 5000;

passport.use(
	new InstagramStrategy(
		{
			clientID: 'YOUR_INSTAGRAM_CLIENT_ID',
			clientSecret: 'YOUR_INSTAGRAM_CLIENT_SECRET',
			callbackURL: 'PORT/auth/instagram/callback',
		},
		(accessToken, refreshToken, profile, done) => {
			
			return done(null, profile);
		},
	),
);

passport.serializeUser((socialMedia: any, done) => {
	done(null, socialMedia);
});

passport.deserializeUser((socialMedia: any, done) => {
	done(null, socialMedia);
});

export default passport;
