import { Request, Response } from 'express';
import CompanyRepository from '../repo/index';

class CompanyController {
	async createCompany(req: Request, res: Response) {
		try {
			const {
				code,
				message,
				data: result,
			} = await CompanyRepository.createCompany(req.body);

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
			} = await CompanyRepository.getCompanyById();

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

	async removeCompany(req: Request, res: Response) {
		try {
			const query: any = req.query;

			const {
				code,
				message,
				data: result,
			} = await CompanyRepository.removeCompany(query);

			res.status(code).send({
				code,
				msg: message,
				data: result,
			});
		} catch (error) {
			res.status(500).send({ msg: 'SERVER_ERROR', data: null });
			throw new Error(`Task controller [create] error: ${error}`);
		}
	}
}

export default new CompanyController();
