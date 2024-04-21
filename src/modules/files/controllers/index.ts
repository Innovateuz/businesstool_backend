import { Request, Response } from "express";
import FileService from "../services/index";

class FileController {
    async uploadFile(req: Request, res: Response) {
        try {
            const files = req.files;
            console.log(req.file)
            console.log(req.files)
            const {
                code,
                message,
                data: result,
            } = await FileService.uploadFile(files);

            res.status(code).send({
                code,
                msg: message,
                data: result,
            });
        } catch (error) {
            res.status(500).send({ msg: "SERVER_ERROR", data: null });
            throw new Error(`Files controller [uploadFile] error: ${error}`);
        }
    }

    async uploadMultipleFile(req: Request, res: Response) {
        try {
            const files: any = req.files;
            const apiResponse: any = [];

            if (Array.isArray(files.files)) {
                for (let i = 0; i < files.files.length; i++) {
                    const fileData = files.files[i];

                    let input = {
                        files: fileData,
                    };

                    const { data: result } = await FileService.uploadFile(input);

                    apiResponse.push(result);
                }
            } else {
                const input = {
                    files: files.files,
                }
                const { data: result } = await FileService.uploadFile(input);

                apiResponse.push(result);
            }

            res.status(200).send({
                code: 200,
                msg: "Completed",
                data: apiResponse,
            });
        } catch (error) {
            res.status(500).send({ msg: "SERVER_ERROR", data: null });
            throw new Error(`Files controller [uploadMultipleFile] error: ${error}`);
        }
    }

    async getFile(req: Request, res: Response) {
        try {
            const query: any = req.query;

            const {
                code,
                message,
                data: result,
            } = await FileService.getFile(query.fileId);

            res.status(code).send({
                code,
                msg: message,
                data: result,
            });
        } catch (error) {
            res.status(500).send({ msg: "SERVER_ERROR", data: null });
            throw new Error(`Files controller [getFile] error: ${error}`);
        }
    }
}

export default new FileController();
