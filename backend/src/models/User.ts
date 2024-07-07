import mongoose, { Document, Schema } from "mongoose";
import { PersonaSchema, IPersona } from "./Persona";

export interface IUser extends Document {
    externalId: string;
    personas: IPersona[];
}

export const UserSchema: Schema = new Schema<IUser>({
    externalId: { type: String, required: true },
    personas: [PersonaSchema]
}, {
    timestamps: true
});

const User = mongoose.model<IUser>(
    'User',
    UserSchema,
    'user'
);

export default User;