import { Request, Response } from "express";
import ClientService from "../services/index";

class ClientsController {
    async createClient(req: Request, res: Response) {
        try {
            const {
                code,
                message,
                data: result,
            } = await ClientService.createClient(req.body);

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

    async removeClient(req: Request, res: Response) {
        try {
          const query: any = req.query;
    
          const {
            code,
            message,
            data: result,
          } = await ClientService.removeClient(query);
    
          res.status(code).send({
            code,
            msg: message,
            data: result,
          });
        } catch (error) {
          res.status(500).send({ msg: "SERVER_ERROR", data: null });
          throw new Error(`Task controller [create] error: ${error}`);
        }
      }
}


export default new ClientsController();
