import { Request, Response } from 'express';
import CompaniesService from '../services/index';

class CompanyController {
	async createCompany(req: Request, res: Response) {
		try {
			const {
				code,
				message,
				data: result,
			} = await CompaniesService.createCompany(req.body);

			res.status(code).send({
				code,
				msg: message,
				data: result,
			});
		} catch (error) {
			res.status(500).send({ msg: 'SERVER_ERROR', data: null });
			throw new Error(`CompanyController controller [create] error: ${error}`);
		}
	}

	async GetCompany(req: Request, res: Response) {
		try {
			const {
				code,
				message,
				data: result,
			} = await CompaniesService.getCompany();

			res.status(code).send({
				code,
				msg: message,
				data: result,
			});
		} catch (error) {
			res.status(500).send({ msg: 'SERVER_ERROR', data: null });
			throw new Error(`CompanyController controller [get] error: ${error}`);
		}
	}

	async updateCompany(req: Request, res: Response) {
		try {
			const query: any = req.query;

			const {
				code,
				message,
				data: result,
			} = await CompaniesService.updateCompany(query);

			res.status(code).send({
				code,
				msg: message,
				data: result,
			});
		} catch (error) {
			res.status(500).send({ msg: 'SERVER_ERROR', data: null });
			throw new Error(`Task controller [update] error: ${error}`);
		}
	}

	async removeCompany(req: Request, res: Response) {
		try {
			const query: any = req.query;

			const {
				code,
				message,
				data: result,
			} = await CompaniesService.removeCompany(query);

			res.status(code).send({
				code,
				msg: message,
				data: result,
			});
		} catch (error) {
			res.status(500).send({ msg: 'SERVER_ERROR', data: null });
			throw new Error(`Task controller [delete] error: ${error}`);
		}
	}
}

export default new CompanyController();
