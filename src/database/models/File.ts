import { Schema, model } from "mongoose";
import { IFile } from "../../domain/entities/File";

const FileSchema = new Schema<IFile>(
  {
    originalName: {
      type: String,
    },
    mimetype: {
      type: String,
    },
    extension: {
      type: String,
    },
    size: {
      type: Number,
    },
    filename: {
      type: String,
    },
    additionalParameters: {
      "160x90": {
        type: String,
      },
      "320x180": {
        type: String,
      },
      "640x360": {
        type: String,
      },
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
    toObject: {
      virtuals: true,
    },
    toJSON: {
      virtuals: true,
    },
  }
);

export default model<IFile>("File", FileSchema);
