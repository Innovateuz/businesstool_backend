import { fail, ok } from "../../../utils/response";
import { TInsertContact, TUpdateContact, TRemoveContact } from './types';
import ContactRepo from "../repo/index";


const repo = new ContactRepo();

class ContactService {
	async createContact(data: TInsertContact) {
		try {
			const { fullName, phoneNumber, email, birthDate } = data;

			const contact = await repo.createContact({
				fullName,
				phoneNumber,
				email,
				birthDate,
			});

			return ok(contact);
		} catch (error) {
			console.error(`ERROR: [contacts.services] createContact: ${error}`);
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
