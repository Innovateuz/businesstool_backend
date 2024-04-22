import { Schema, model } from "mongoose";
import { IUser } from "../../domain/entities/User";
import { string } from "joi";

const UserSchema = new Schema<IUser>(
    {
        phoneNumber: {
            type: String,
        },
        password: {
            type: String
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

export default model<IUser>("User", UserSchema);
