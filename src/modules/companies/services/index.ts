import { fail, ok } from '../../../utils/response';
import {
	TInsertCompany,
	TGetCompanyById,
	TUpdateCompany,
	TRemoveCompany,
} from './types';
import CompanyRepository from '../repo/index';

const repo = new CompanyRepository();

class CompaniesService {
	async createCompany(data: TInsertCompany) {
		try {
			const { name } = data;

			const company = await repo.createCompany({ name });

			if (company) {
				return fail(403, 'Company already exists');
			}

			return ok(company);
		} catch (error: any) {
			console.error(`ERROR: [company.services] createCompany: ${error}`);
			return fail(500, error);
		}
	}

	async getCompany() {
		try {
			const companies = await repo.getCompany();

			if (!companies) {
				return fail(404, 'Company not found');
			}

			return ok(companies);
		} catch (error: any) {
			console.error(`ERROR: [company.services] getCompany: ${error}`);
			return fail(500, error);
		}
	}

	async getCompanyById(data: TGetCompanyById) {
		try {
			const { companyId } = data;
			const company = await repo.getCompanyById({ companyId });

			if (!company) {
				return fail(404, 'Company not found');
			}

			return ok(company);
		} catch (error: any) {
			console.error(`ERROR: [company.services] updateCompany: ${error}`);
			return fail(500, error);
		}
	}

	async updateCompany(data: TUpdateCompany) {
		try {
			const { companyId, name } = data;

			const newCompany = await repo.updateCompany({
				companyId,
				name,
			});

			if (!newCompany) {
				return fail(404, 'CompanyId not found');
			}

			return ok(newCompany);
		} catch (error: any) {
			console.error(`ERROR: [company.services] updateCompany: ${error}`);
			return fail(500, error);
		}
	}

	async removeCompany(data: TRemoveCompany) {
		try {
			const company = await repo.getCompanyById({ companyId: data.companyId });

			if (!company) {
				return fail(409, "Company doesn't exists");
			}

			data.company = company;

			return ok(repo.removeCompany(data));
		} catch (error: any) {
			console.error(`ERROR: [company.services] removeCompany: ${error}`);
			return fail(500, error);
		}
	}
}

export default new CompaniesService();
