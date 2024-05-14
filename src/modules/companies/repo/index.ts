import Company from '../../../database/models/Company';
import {
	TInsertCompany,
	TByIdCompany,
	TGetByIdCompany,
	TUpdateCompany,
	TRemoveCompany,
} from './types';

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

	async getCompany() {
		try {
			return await Company.find({ isDeleted: false });
		} catch (error: any) {
			console.error(`ERROR: [company.repo] getCompany: ${error}`);
			throw error;
		}
	}

	async getCompanyById(data: TGetByIdCompany) {
		try {
			const { companyId } = data;

			return await Company.findOne({
				_id: companyId,
				isDeleted: false,
			});
		} catch (error: any) {
			console.error(`ERROR: [company.repo] getCompanyById: ${error}`);
			throw error;
		}
	}

	async updateCompany(data: TUpdateCompany) {
		try {
			const { name, companyId } = data;

			return await Company.findOneAndUpdate(
				{
					_id: companyId,
					isDeleted: false,
				},
				{ name },
			);
		} catch (error: any) {
			console.error(`ERROR: [company.repo] updateCompany: ${error}`);
			throw error;
		}
	}

	async removeCompany(data: TRemoveCompany) {
		try {
			const { company } = data;

			return Company.findOneAndUpdate({ _id: company.id }, { isDeleted: true });
		} catch (error: any) {
			console.error(`ERROR: [company.repo] removeCompany: ${error}`);
			throw error;
		}
	}
}

export default CompanyRepository;
