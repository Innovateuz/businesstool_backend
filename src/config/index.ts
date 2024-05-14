import { Config } from './interface';
import { config as dotenv } from 'dotenv';

dotenv();

export const configurations: Config = {
	application: {
		port: process.env.BACKEND_APP_PORT || '',
		host: process.env.BACKEND_APP_HOST || '',
		name: process.env.NODE_ENV || '',
	},
	mongodb: {
		url:
			process.env.BACKEND_MONGO_URL || 'mongodb://localhost:27017/testproject',
	},
	awsService: {
		name: process.env.DO_BUCKET_NAME || '',
		region: process.env.DO_BUCKET_REGION || '',
		accessKey: process.env.DO_ACCESS_KEY || '',
		secretKey: process.env.DO_SECRET_KEY || '',
		endpoint: process.env.DO_ENDPOINT || '',
		url: process.env.DO_URL || '',
	},
};
