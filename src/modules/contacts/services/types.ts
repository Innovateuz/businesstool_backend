import { IContact } from '../../../domain/entities/Contacts';

export type TInsertContact = {
	fullName: string;
	phoneNumber: string;
	email: string;
	birthDate: Date;
};

export type TUpdateContact = {
	contactId: string;
	fullName: string;
	phoneNumber: string;
	email: string;
	birthDate: Date;
};

export type TRemoveContact = {
	contactId: string;
	contact: IContact;
};
