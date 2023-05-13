import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import { Schema } from 'mongoose';

const app: Application = express();

// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    
    // inserting a test data into mongodb
    /*
    step1: interface
    step2: schema
    step3: model
    step4: database query
    */
    
    

    // creating an interface
    interface IUser {
        id: string;
        role: "student";
        password: string;
        name: {
            firstName: string;
            middleName?: string;
            lastName: string;
        }
        dateOfBirth?: string;
        gender: "male" | "female";
        email?: string;
        contactNumber: string;
        emergencyContactNumber: string;
        presentAddress: string;
        permanentAddress: string;
    }

    // creating a schema using interface
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

    
    
    // res.send('Hello World!');
    // next();
})

export default app;