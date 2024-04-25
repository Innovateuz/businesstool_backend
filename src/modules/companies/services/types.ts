import { ICompany } from '../../../domain/entities/Company';

export type TInsertCompany = {
	name: string;
};

export type TGetCompany = {
	companyId: string;

};

export type TRemoveCompany = {
	companyId: string;
	company: ICompany;

};