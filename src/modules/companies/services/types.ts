import { ICompany } from '../../../domain/entities/Company';

export type TInsertCompany = {
	name: string;
};

export type TGetCompany = {
	companyId: string;
	name: string;
};

export type TGetCompanyById = {
	companyId: string;
};

export type TUpdateCompany = {
	companyId: string;
	name: string;
};

export type TRemoveCompany = {
	companyId: string;
	company: ICompany;
};
