export enum Role {
  BUSINESSOWNER = "businessOwner",
  USER = "user",
}
export interface IRole {
  id: string;
  name: Role;
  isDeleted: boolean;
  createdAt: Date;
}
