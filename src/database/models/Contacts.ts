import { Schema, model } from 'mongoose';
import { IContact } from '../../domain/entities/Contacts';

const ConstactSchema = new Schema<IContact>(
	{
		company: {
			type: Schema.Types.ObjectId,
			ref: 'Company',
		},
		firstName: {
			type: String,
		},
		lastName: {
			type: String
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
		gender: {
			type: String,
			enum: ['Male', 'Female'],
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

export default model<IContact>('Contact', ConstactSchema);
