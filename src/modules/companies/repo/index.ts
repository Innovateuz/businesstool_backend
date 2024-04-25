import Company from '../../../database/models/Company';
import { TInsertCompany, TGetCompany, TRemoveCompany } from './types';

class CompanyRepository {
	async createCompany(data: TInsertCompany) {
		try {
			const { name } = data;

			const currentDate = new Date();

			const company = new Company({
				name,
			});

			await company.save();

			return company;
		} catch (error: any) {
			console.error(`ERROR: [company.repo] createCompany: ${error}`);
			throw error;
		}
	}

	async getCompanyById(data: TGetCompany) {
		try {
			const { companyId } = data;

			return await Company.findOne({ _id: companyId});
		} catch (error: any) {
			console.error(`ERROR: [company.repo] getCompanyById: ${error}`);
			throw error;
		}
	}

	async removeCompany(data: TRemoveCompany) {
		try {
			const { company } = data;

			return Company.findOneAndUpdate({ _id: company.id });
		} catch (error: any) {
			console.error(`ERROR: [company.repo] removeCompany: ${error}`);
			throw error;
		}
	}
}

export default CompanyRepository;
