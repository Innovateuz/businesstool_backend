import { IFile } from "./File";

export interface IUser {
    id: string;
    avatar: IFile;
    phoneNumber: string;
    password: string;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
}
