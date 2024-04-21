import User from "../../../database/models/User";
import { TInsertUser, TGetUser, TRemoveUser } from "./types";


class UserRepository {
    async createUser(data: TInsertUser) {
        try {
            const { phoneNumber, password } = data;

            const currentDate = new Date();

            const user = new User({
                phoneNumber,
                password
            });

            await user.save();

            return user;
        } catch (error: any) {
            console.error(`ERROR: [users.repo] createUser: ${error}`);
            throw error;
        }
    }

    async getUserById(data: TGetUser) {
        try {
            const { userId } = data;

            return await User.findOne({ _id: userId, isDeleted: false });
        } catch (error: any) {
            console.error(`ERROR: [users.repo] getUserById: ${error}`);
            throw error;
        }
    }

    async removeUser(data: TRemoveUser) {
        try {
            const { user } = data;

            return User.findOneAndUpdate({ _id: user.id }, { isDeleted: true });
        } catch (error: any) {
            console.error(`ERROR: [users.repo] removeUser: ${error}`);
            throw error;
        }
    }
}

export default UserRepository;
