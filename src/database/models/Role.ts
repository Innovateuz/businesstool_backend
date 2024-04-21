import { Schema, model } from "mongoose"
import { IRole } from "../../domain/entities/Role"

const roleSchema = new Schema<IRole>(
    {
        name: { type: String },
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

export default model<IRole>("Role", roleSchema);