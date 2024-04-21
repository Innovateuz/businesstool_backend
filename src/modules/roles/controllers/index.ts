import { Request, Response } from "express";
import RolesService from "../service/index";

class RolesController {
  async getRoles(req: Request, res: Response) {
    try {
      const {
        code,
        message,
        data: result,
      } = await RolesService.getRoles();

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

  async createRole(req: Request, res: Response) {
    try {
      const {
        code,
        message,
        data: result,
      } = await RolesService.createRole(req.body);

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

export default new RolesController();
