import { fail, ok } from '../../../utils/response';
import { TInsertCompany, TRemoveCompany } from './types';
import CompanyRepository from '../repo/index';


const repo = new CompanyRepository();

class CompaniesService {
	async createCompany(data: TInsertCompany) {
		try {
			const { name } = data;

			const company = await repo.createCompany({name});

			return ok(company);
		} catch (error) {
			console.error(`ERROR: [company.service] createCompany: ${error}`);
			return fail(500, error);
		}
	}

	async removeComapany(data: TRemoveCompany) {
		try {
			const company = await repo.removeCompany({ companyId });

			if (!company) {
				return fail(409, "Company doesn't exists");
			}

			data.company = company;

			return ok(repo.removeCompany(data));
		} catch (error: any) {
			console.error(`ERROR: [company.service] removeCompany: ${error}`);
			return fail(500, error);
		}
	}
}

export default new CompaniesService();
