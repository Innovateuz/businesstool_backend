import { ICompany } from "../../../domain/entities/Company";

export type TInsertCompany = {
	name: string;
	company: ICompany;
};

export type TGetCompany = {
	companyId: string;
	company: ICompany;
};

export type TRemoveCompany = {
	companyId: string;
	company: ICompany;
};
