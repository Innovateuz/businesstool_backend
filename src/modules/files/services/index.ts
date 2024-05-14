import { fail, ok } from "../../../utils/response";
import { S3, PutObjectCommand } from "@aws-sdk/client-s3";
import { v4 as uuid } from "uuid";
import { configurations } from "../../../config/index";
import * as mime from "mime-types";

import FileRepository from "../repo";

class FileService {
    async uploadFile(files: any) {
        try {
            console.log(files)
            let file = files.files;
            if (!file || file.data.length === 0) {
                return fail(400, "No files were uploaded.");
            }

            const s3Client = new S3({
                forcePathStyle: false,
                endpoint: configurations.awsService.endpoint,
                region: configurations.awsService.region,
                credentials: {
                    accessKeyId: configurations.awsService.accessKey,
                    secretAccessKey: configurations.awsService.secretKey,
                },
            });

            const uniqeName = uuid() + "." + mime.extension(file.mimetype);

            s3Client.send(
                new PutObjectCommand({
                    Bucket: configurations.awsService.name,
                    Key: `${uniqeName}`,
                    Body: files.files.data,
                    ACL: "public-read",
                })
            );

            const customizedFiles: any = [];

            const extension: string = this.getExtension(file.mimetype);

            customizedFiles.push({
                originalName: file.name,
                filename: `${configurations.awsService.url}/${uniqeName}`,
                mimetype: file.mimetype,
                extension: "",
                size: file.size,
            });

            const originalImage = await FileRepository.upload(customizedFiles[0]);


            return ok({ files: originalImage });
        } catch (error:any) {
            console.error(error)
            return fail(500, error.message)
        }
    }

    async getFile(fileId: any) {
        const file = await FileRepository.getFileById(fileId);

        if (!file) {
            return fail(409, "File doesnt exists");
        }

        return ok(file);
    }

    private getExtension(mimetype: string): string {
        let result = mime.extension(mimetype);

        if (!result) result = "";

        return result;
    }

    getFileById(fileId: string) {
        return FileRepository.getFileById(fileId);
    }

    getFilesByIds(fileIds: string[]) {
        return FileRepository.getFilesByIds(fileIds);
    }
    
}

export default new FileService();
