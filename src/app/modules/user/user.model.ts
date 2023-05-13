import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>({
    id: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    password: { type: String, required: true },
    name: {
        firstName: { type: String, required: true },
        middleName: { type: String, required: false  },
        lastName: { type: String, required: true },
    },
    dateOfBirth: { type: String, required: false },
    gender: { type: String, required: true, enum: ["male", "female"] },
    email: { type: String, required: false },
    contactNumber: { type: String, required: true },
    emergencyContactNumber: { type: String, required: true },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
  });

  const User = model<IUser>('User', userSchema);

    export default User;