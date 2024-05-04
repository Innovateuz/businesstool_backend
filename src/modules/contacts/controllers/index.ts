import { Request, Response } from 'express';
import contactService from '../services/index';

class contactController {
	async createContact(req: Request, res: Response) {
		try {
			const {
				code,
				message,
				data: result,
			} = await contactService.createContact(req.body);

			res.status(code).send({
				code,
				msg: message,
				data: result,
			});
		} catch (error) {
			res.status(500).send({ msg: 'SERVER_ERROR', data: null });
			throw new Error(`ContactController controller [create] error: ${error}`);
		}
	}

	async getContact(req: Request, res: Response) {
		try {
			const {
				code,
				message,
				data: result,
			} = await contactService.getContacts();

			res.status(code).send({
				code,
				msg: message,
				data: result,
			});
		} catch (error: any) {
			res.status(500).send({ msg: 'SERVER_ERROR', data: null });
			throw new Error(`ContactController controller [get] error: ${error}`);
		}
	}

	async getContactById(req: Request, res: Response) {
		try {
			const query: any = req.query;

			const {
				code,
				message,
				data: result,
			} = await contactService.getContactById(query);

			res.status(code).send({
				code,
				msg: message,
				data: result,
			});
		} catch (error: any) {
			res.status(500).send({ msg: 'SERVER_ERROR', data: null });
			throw new Error(`contactController controller [getById] error: ${error}`);
		}
	}

	async updateContact(req: Request, res: Response) {
		try {
			const query: any = req.query;

			const {
				code,
				message,
				data: result,
			} = await contactService.updateContact(query);

			res.status(code).send({
				code,
				msg: message,
				data: result,
			});
		} catch (error: any) {
			res.status(500).send({ msg: 'SERVER_ERROR', data: null });
			throw new Error(`Task controller [update] error: ${error}`);
		}
	}

	async removeContact(req: Request, res: Response) {
		try {
			const query: any = req.query;

			const {
				code,
				message,
				data: result,
			} = await contactService.removeContact(query);

			res.status(code).send({
				code,
				msg: message,
				data: result,
			});
		} catch (error: any) {
			res.status(500).send({ msg: 'SERVER_ERROR', data: null });
			throw new Error(`Task controller [create] error: ${error}`);
		}
	}
}

export default new contactController();
