import { ICompany } from "../../../domain/entities/Company";

export type TInsertCompany = {
	name: string;
};

export type TGetCompany = {
	companyId: string;
};

export type TGetByIdCompany = {
	companyId: string;
};

export type TByIdCompany = {
	companyId: string;
	name: string;
};

export type TUpdateCompany = {
	name: string;
	companyId: string;
};

export type TRemoveCompany = {
	companyId: string;
	company: ICompany;
};
