import File from "../../../database/models/File";

class FileRepository {
    async upload(files: {
        originalName: string;
        filename: string;
        mimetype: string;
        extension: string;
        size: number;
    }) {
        const newFile = new File(files);

        await newFile.save();

        return newFile;
    }
    async getFileById(fileId: string) {
        return await File.findOne({ _id: fileId });
    }

    async getFilesByIds(fileIds: string[]) {
        return await File.find({ _id: { $in: fileIds } });
    }
}

export default new FileRepository();
