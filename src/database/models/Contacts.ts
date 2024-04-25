import { Schema, model } from 'mongoose';
import { Gender, IContact } from '../../domain/entities/Contacts';

const ConstactSchema = new Schema<Gender, IContact>(
	{
		companyName: {
			type: String,
		},
		fullName: {
			type: String,
		},
		phoneNumber: {
			type: String,
		},
		email: {
			type: String,
		},
		socialMedia: {
			type: String,
		},
		gender:{
			type: Gender,
		},
		birthDate: {
			type: String,
		},
		isDeleted: {
			type: Boolean,
			default: false,
		},
	},
	{
		versionKey: false,
		timestamps: true,
		toObject: {
			virtuals: true,
		},
		toJSON: {
			virtuals: true,
		},
	},
);

const GenderSchema = new Schema<Gender>({
	
});

export default model<Gender, IContact>('Contact', ConstactSchema);
