import { ICompany } from "./Company";
import { IUser } from "./User";

export interface ICompanyUser {
    id: string;
    user: IUser;
    companys: [ICompany];
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
}
