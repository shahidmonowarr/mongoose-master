import { IUser } from "./user.interface";
import User from "./user.model";

// create user
export const createUserToDB = async (payload: IUser): Promise<IUser> => {
   const user = new User(payload);
      await user.save(); 
    //   console.log(user);
        return user;
    }

// find all users
export const getUsersFromDB = async (): Promise<IUser[]> => {
    const users = await User.find();
    return users;
}

// find user by id
export const getUserByIdFromDB = async (payload: string): Promise<IUser | null> => {
    const user = await User.findOne({id: payload}, {name: 1, email: 1, contactNumber: 1});
    return user;

}


