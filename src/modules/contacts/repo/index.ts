import Contact from '../../../database/models/Contacts';
import {
	TInsertContact,
	TGetContact,
	TRemoveContact,
	TUpdateContact,
} from './types';

class ContactRepository {
	async createContact(data: TInsertContact) {
		try {
			const { fullName, phoneNumber, email, birthDate } = data;

			const currentDate = new Date();

			const contact = new Contact({
				fullName,
				phoneNumber,
				email,
				birthDate,
			});

			await contact.save();

			return contact;
		} catch (error: unknown) {
			console.error(`ERROR: [contact.repo] createContact: ${error}`);
			throw error;
		}
	}

	async getContactById(data: TGetContact) {
		try {
			const { contactId } = data;

			return await Contact.findOne({ _id: contactId, isDeleted: false });
		} catch (error: unknown) {
			console.error(`ERROR: [contacts.repo] getContactById: ${error}`);
			throw error;
		}
	}

	async updateContact(data: TUpdateContact) {
		try {
			const { contactId, fullName, phoneNumber, email, birthDate } = data;

			return await Contact.findOneAndUpdate(
				{
					_id: contactId,
					isDeleted: false,
				},
				{ fullName, phoneNumber, email, birthDate },
			);
		} catch (error: unknown) {
			console.error(`ERROR: [contacts.repo] updateContact: ${error}`);
			throw error;
		}
	}

	async removeContact(data: TRemoveContact) {
		try {
			const { contactId } = data;

			return Contact.findByIdAndDelete({ _id: contactId }, { isDeleted: true });
		} catch (error: unknown) {
			console.error(`ERROR: [contact.repo] removeContact: ${error}`);
			throw error;
		}
	}
}

export default ContactRepository;
