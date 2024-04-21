import { IUser } from "../../../domain/entities/User";

export type TInsertUser = {
    phoneNumber: string;
    password: string;
};


export type TRemoveUser = {
    userId: string;
    user: IUser;
  };