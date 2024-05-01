import { IContact } from "../../../domain/entities/Contacts";

export type TInsertContact = {
	firstName: string;
	lastName: string;
	phoneNumber: string;
	gender: string;
	email: string;
	birthDate: string;
	socialMedia: string;
};

export type TUpdateContact = {
	contactId: string;
	firstName: string;
	lastName: string;
	phoneNumber: string;
	gender: string;
	email: string;
	birthDate: string;
	socialMedia: string;
};

export type TGetContact = {
	contactId: string;
};

export type TRemoveContact = {
 contactId: string;
 contact: IContact;
}