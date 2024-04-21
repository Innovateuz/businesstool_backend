export interface IFile {
  id: string;
  originalName: string;
  mimetype: string;
  extension: string;
  size: number;
  filename: string;
  additionalParameters: {
    "160x90": string;
    "320x180": string;
    "640x360": string;
  };
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}
