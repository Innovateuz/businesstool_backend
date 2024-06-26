import { ICompany } from "./Company";
import { IFile } from "./File";

export enum Gender {
    male = "Male",
    female = "Female",
}

type SocialMedia = {
    facebook: string;
    instagram: string;
    linkedin: string;
    telegram: string;
};

export interface IContact {
    id: string;
    company: ICompany;
    avatar: IFile;
    fullName: string;
    phoneNumber: string;
    email: string;
    socialMedia: SocialMedia;
    gender: Gender;
    birthDate: string;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
}
