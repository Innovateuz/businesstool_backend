import { fail, ok } from "../../../utils/response";
import { TInsertContact, TGetContactById, TUpdateContact, TRemoveContact } from './types';
import ContactRepo from "../repo/index";


const repo = new ContactRepo();

class ContactService {
	async createContact(data: TInsertContact) {
		try {
			const {
				firstName,
				lastName,
				phoneNumber,
				gender,
				email,
				birthDate,
				socialMedia,
			} = data;

			const contact = await repo.createContact({
				firstName,
				lastName,
				phoneNumber,
				gender,
				email,
				birthDate,
				socialMedia,
			});

			return ok(contact);
		} catch (error: any) {
			console.error(`ERROR: [contacts.services] createContact: ${error}`);
			return fail(500, error);
		}
	}

	async getContacts() {
		try {
			const contacts = await repo.getContact();

			return ok(contacts);
		} catch (error: any) {
			console.error(`ERROR: [contacts.services] getContact: ${error}`);
			return fail(500, error);
		}
	}

	async getContactById(data: TGetContactById) {
		try {
			const { contactId } = data;

			return await repo.getContactById({ contactId });
		} catch (error: any) {
			console.error(`ERROR: [contact.services] getByContactId: ${error}`);
			return fail(500, error);
		}
	}

	async updateContact(data: TUpdateContact) {
		try {
			const {
				contactId,
				firstName,
				lastName,
				phoneNumber,
				gender,
				email,
				birthDate,
				socialMedia,
			} = data;

			const newContact = await repo.updateContact({
				contactId,
				firstName,
				lastName,
				phoneNumber,
				gender,
				email,
				birthDate,
	   socialMedia
			});

			return ok(newContact);
		} catch (error: any) {
			console.error(`ERROR: [contact.services] updateContact: ${error}`);
			return fail(500, error);
		}
	}

	async removeContact(data: TRemoveContact) {
		try {
			const contact = await repo.getContactById({ contactId: data.contactId });

			if (!contact) {
				return fail(409, "Contact doesn't exists");
			}

			data.contact = contact;

			return ok(repo.removeContact(data));
		} catch (error: any) {
			console.error(`ERROR: [contacts.services] removeContact: ${error}`);
			return fail(500, error);
		}
	}
}

export default new ContactService();
