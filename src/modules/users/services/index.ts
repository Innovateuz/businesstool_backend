import { generateHash } from "../../../utils/bcrypt";
import { fail, ok } from "../../../utils/response";
import { TInsertUser, TRemoveUser } from "./types";
import UserRepo from "../repo/index";

const repo = new UserRepo();

class UsersService {
    async createUser(data: TInsertUser) {
        try {
            const { phoneNumber, password } = data;

            const hashedPassword = await generateHash(password);

            const user = await repo.createUser({
                phoneNumber,
                password: hashedPassword
            });

            return ok(user)
        } catch (error) {
            console.error(`ERROR: [users.service] createUser: ${error}`);
            return fail(500, error);
        }
    }

    async removeUser(data: TRemoveUser) {
        try {
            const user = await repo.getUserById({ userId: data.userId });

            if (!user) {
                return fail(409, "User doesn't exists");
            }

            data.user = user;

            return ok(repo.removeUser(data));
        } catch (error: any) {
            console.error(`ERROR: [users.service] removeUser: ${error}`);
            return fail(500, error);
        }
    }
}

export default new UsersService();
