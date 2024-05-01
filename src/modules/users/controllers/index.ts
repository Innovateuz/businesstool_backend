import { Request, Response } from "express";
import UsersService from "../services/index";

class UsersController {
    async createUser(req: Request, res: Response) {
        try {
            const {
                code,
                message,
                data: result,
            } = await UsersService.createUser(req.body);

            res.status(code).send({
                code,
                msg: message,
                data: result,
            });
        } catch (error) {
            res.status(500).send({ msg: "SERVER_ERROR", data: null });
            throw new Error(`ClientController controller [create] error: ${error}`);
        }
    }

    async removeUser(req: Request, res: Response) {
        try {
          const query: any = req.query;
    
          const {
            code,
            message,
            data: result,
          } = await UsersService.removeUser(query);
    
          res.status(code).send({
            code,
            msg: message,
            data: result,
          });
        } catch (error) {
          res.status(500).send({ msg: "SERVER_ERROR", data: null });
          throw new Error(`Task controller [removeUser] error: ${error}`);
        }
      }
}


export default new UsersController();
