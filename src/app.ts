import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import { Schema, model } from 'mongoose';

const app: Application = express();

// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    
    // inserting a test data into mongodb
    /*
    step1: interface done
    step2: schema   done
    step3: model    done
    step4: database query   done
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

        // creating a model using schema
      const User = model<IUser>('User', userSchema);

      // database query using model
      const createUserToDB = async () => {
        const user = new User({
            id: "123456790",
            role: "student",
            password: "123456",
            name: {
                firstName: "Shahid",
                middleName: "Monowar",
                lastName: "Monu",
                },
            gender: "male",
            email: "abc@gmail.com",
            contactNumber: "123456789",
            emergencyContactNumber: "123456789",
            presentAddress: "abcdef",
            dateOfBirth: "1998-01-01",
            permanentAddress: "abc",
        });
          await user.save(); 
          console.log(user);
        }

        createUserToDB();
    
    // res.send('Hello World!');
    // next();
})

export default app;