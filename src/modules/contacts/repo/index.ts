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
			const {
				firstName,
				lastName,
				phoneNumber,
				gender,
				email,
				birthDate,
				socialMedia,
			} = data;

			const currentDate = new Date();

			const contact = new Contact({
				firstName,
				lastName,
				phoneNumber,
				gender,
				email,
				birthDate,
				socialMedia,
			});

			await contact.save();

			return contact;
		} catch (error: any) {
			console.error(`ERROR: [contact.repo] createContact: ${error}`);
			throw error;
		}
	}

	async getContact() {
		try {
			return await Contact.find({ isDeleted: false });
		} catch (error: any) {
			console.error(`ERROR: [contact.repo] getContact: ${error}`);
			throw error;
		}
	}

	async getContactById(data: TGetContact) {
		try {
			const { contactId } = data;

			return await Contact.findOne({ _id: contactId, isDeleted: false });
		} catch (error: any) {
			console.error(`ERROR: [contacts.repo] getContactById: ${error}`);
			throw error;
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

			return await Contact.findOneAndUpdate(
				{
					_id: contactId,
					isDeleted: false,
				},
				{
					firstName,
					lastName,
					phoneNumber,
					gender,
					email,
					birthDate,
					socialMedia,
				},
			);
		} catch (error: any) {
			console.error(`ERROR: [contacts.repo] updateContact: ${error}`);
			throw error;
		}
	}

	async removeContact(data: TRemoveContact) {
		try {
			const { contact } = data;

			return Contact.findByIdAndUpdate(
				{ _id: contact.id },
				{ isDeleted: true },
			);
		} catch (error: any) {
			console.error(`ERROR: [contact.repo] removeContact: ${error}`);
			throw error;
		}
	}
}

export default ContactRepository;
