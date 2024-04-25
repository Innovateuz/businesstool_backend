import { Schema, model } from 'mongoose';
import { ICompany } from '../../domain/entities/Company';

const CompanySchema = new Schema<ICompany>(
	{
		name: {
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

export default model<ICompany>('Company', CompanySchema);
